'use strict';

import express from 'express';
import 'dotenv/config';
import fetch from 'node-fetch';
import asyncHandler from 'express-async-handler';

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

let pageTop = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset='utf-8'>
            <meta http-equiv='X-UA-Compatible' content='IE=edge'>
            <title>Ideal Conditions</title>
            <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
            <meta name='viewport' content='width=device-width, initial-scale=1'>
            <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"> 
        </head>
        
        <body>
            <header>
                <h1> Ideal Conditions <img src="android-chrome-192x192.png" alt="Ideal Conditions"></h1>
            </header>
        <main>
`;

let pageBottom = `
    </main>
            <footer>
                <p>&copy; 2023 Joel Strong</p>
            </footer>
        </body>
    </html>
`;

app.get("/submit", asyncHandler(async (req, res) => {
    const location = req.query.location;
    const locationStrip = location.replaceAll(" ", "");
    let url = `https://9w160flmwj.execute-api.us-east-2.amazonaws.com/V2?partner=true&location=${locationStrip}`;
    const partner = req.query.partner;
    if (partner == 'on') {
        const partnerString = "&partner=true";
        url += partnerString;
    }
    const startDate = req.query.startDate;
    if (startDate != '') {
        const stateDateString = `&startDate=${startDate}`;
        url += stateDateString;
    }
    const endDate = req.query.endDate;
    if (endDate != '') {
        const endDateString = `&endDate=${endDate}`;
        url += endDateString;
    }
    try {
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        if (response.status == 200) {
          res.send(`${pageTop}
          <section>
                    <h2>Results</h2>
    
                    <article>
    
                        <p>The weather near <strong>${location}</strong> is <strong>${data.results.short_weather}</strong> and is ideal for the following activities: <strong>${data.results.activities.join(", ")}</strong>.</p>
    
                    </article>
          </section>
          ${pageBottom}`);
        } else {
          res.send(`${pageTop}
          <section>
                    <h2>Results</h2>
                    <article>
                        <p>There was an error processing your request. Please try again.</p>
                    </article>
          </section>
          ${pageBottom}`);
        }
    } catch (error) {
      res.send(`${pageTop}
      <section>
                <h2>Results</h2>
                <article>
                    <p>There was an error processing your request. Please try again.</p>
                </article>
      </section>
      ${pageBottom}`);
    }
}));



