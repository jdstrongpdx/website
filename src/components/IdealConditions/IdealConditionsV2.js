
import { useState } from "react";

function IdealConditionsV2() {
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [weekendsOnly, setWeekendsOnly] = useState("");
  const [result, setResult] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    let url = new URL("https://9w160flmwj.execute-api.us-east-2.amazonaws.com/V2");
    url.searchParams.set("location", location);
    url.searchParams.set("startDate", startDate);
    url.searchParams.set("endDate", endDate);
    url.searchParams.set("weekendsOnly", weekendsOnly);
    console.log(url);
    try {
      let res = await fetch(url, {
        method: "GET"
      });
      let data = await res.json();
      if (res.status === 200) {


        let location = data.information
        let forecast = data.results
        let returnString = "";
        
        if (data.error === 1) {
            returnString = "Error processing your location.";
        }
        else {
            returnString += `Results`
            returnString += `The closest weather station was found at ${location.city}, ${location.state}.\n\n`;
            let startDateTime = undefined;
            let endDateTime = undefined;
            let weather = {};
            let temperature = 0;
            let wind_speed = 0;
            let humidity = 0;
            let hours = 0;
            for (const activity in forecast) {
                const result = forecast[activity];
                if (Object.keys(result).length === 0) {
                    returnString += `\n${activity}: There are no ideal conditions for this activity.\n`
                } else {
                    returnString += `${activity} has the following ideal time windows:\n`;
                    for (const window in forecast[activity]) {
                        const time = forecast[activity][window]
                        const timeString = time.date + "T" + time.time + ":00:00"
                        const dateTime = new Date(timeString);
                        if (startDateTime === undefined) startDateTime = dateTime;
                        if (endDateTime !== undefined) {
                            // if consecutive hour - add to results, else print and reset
                            let nextHour = new Date(endDateTime.setHours(endDateTime.getHours() + 1));
                            if (dateTime.getTime() !== nextHour.getTime()) {
                                let mostCommonWeather = Object.keys(weather).reduce(function (key, max) {
                                    return (max === undefined || weather[key] > weather[max]) ? +key : max;
                                });
                                returnString += `\n     Time window: ${hours} hour(s) starting at ${startDateTime.toLocaleString()}
                  Weather: mostly ${mostCommonWeather} 
                  Temperature average: ${(temperature / hours).toFixed(0)}F 
                  Wind Speed average: ${(wind_speed / hours).toFixed(0)} mph 
                  Humidity average: ${(humidity / hours).toFixed(0)}%\n`;
                                startDateTime = dateTime;
                                endDateTime = undefined;
                                weather = {};
                                temperature = 0;
                                wind_speed = 0;
                                humidity = 0;
                                hours = 0;
                                endDateTime = dateTime;
                            }
                        }
        
                        if (time.weather in weather) {
                            weather[time.weather] += 1;
                        } else {
                            weather[time.weather] = 1;
                        }
                        temperature += time.temperature;
                        wind_speed += time.wind_speed;
                        humidity += time.humidity;
                        hours++;
                        endDateTime = dateTime;
                    }
                    let mostCommonWeather = Object.keys(weather).reduce(function (key, max) {
                        return (max === undefined || weather[key] > weather[max]) ? +key : max;
                    });
                    returnString += `\n     Time window: ${hours} hour(s) starting at ${startDateTime.toLocaleString()}
                  Weather: mostly ${mostCommonWeather} 
                  Temperature average: ${(temperature / hours).toFixed(0)}F 
                  Wind Speed average: ${(wind_speed / hours).toFixed(0)} mph 
                  Humidity average: ${(humidity / hours).toFixed(0)}%\n\n`;
                }
        
            }
          }
        setResult(returnString);

      } else {
        setResult("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        id="location"
          type="text"
          value={location}
          placeholder="City, State"
          required
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="date"
          value={startDate}
          placeholder="Email"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          value={endDate}
          placeholder="Mobile Number"
          onChange={(e) => setEndDate(e.target.value)}
        />
        <label for="weekendsOnly">Weekends Only</label>
        <input
          type="checkbox"
          value={weekendsOnly}
          onChange={(e) => setWeekendsOnly(e.target.value)}
        />

        <button type="submit">Submit</button>

        <div className="results" style={{whiteSpace: "pre-wrap"}}>{result ? <p>{result}</p> : null}</div>

      </form>
    </div>
  );
}

export default IdealConditionsV2;