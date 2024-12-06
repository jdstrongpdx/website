const HomePage = () => {
    return (
        <div>
            HomePage
        </div>
    );
};

/*
import React, {useEffect, useState} from 'react';
import HelmetComponent from "../components/HelmetComponent";

const HomePage: React.FC = () => {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    };

    const cardStyle: React.CSSProperties = {
        width: '60%',
        height: '80%',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
    };

    const urlBarStyle: React.CSSProperties = {
        backgroundColor: '#f3f3f3',
        padding: '5px',
        display: 'flex',
        alignItems: 'center',
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '5px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '0.9em',
    };

    const headerFooterStyle: React.CSSProperties = {
        backgroundColor: '#005bb5',
        color: 'white',
        textAlign: 'center',
    };

    const mainStyle: React.CSSProperties = {
        padding: '10px',
        backgroundColor: '#ffffff',
        flexGrow: 1,
    };

    const footerStyle: React.CSSProperties = {
        ...headerFooterStyle,
        flexShrink: 0,
    };

    function createRandomArray(x: number) {
        const minimum = 1;
        const array = [Math.random() + minimum]; // Start with the first random number
        for (let i = 1; i < x; i++) {
            array.push(array[i - 1] + Math.random() + minimum);
        }
        return array;
    }

    const numberOfElements = 5;
    const initElementState = new Array(numberOfElements).fill(false);
    const timings = createRandomArray(numberOfElements);
    const [visibleElements, setVisibleElements] = useState<boolean[]>(initElementState);
    const [elapsedTime, setElapsedTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(true);
    const maxTime = Math.max(...timings) * 1000;
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const timers: NodeJS.Timeout[] = [];

        timings.forEach((time, index) => {
            const timeout = setTimeout(() => {
                setVisibleElements(prevState => {
                    const newState = [...prevState];
                    newState[index] = true;
                    if (index === 1) {
                        newState[0] = false;
                    }
                    return newState;
                });
            }, time * 1000);
            timers.push(timeout);
        });

        return () => {
            timers.forEach(timer => clearTimeout(timer));
        };
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;
        if (isRunning && elapsedTime < maxTime) {
            interval = setInterval(() => {
                setElapsedTime(prev => prev + 10);
            }, 10);
        } else if (elapsedTime >= maxTime) {
            setIsRunning(false);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isRunning, elapsedTime]);

    const handleRestart = () => {
        setElapsedTime(0);
        setVisibleElements(initElementState);
        setIsRunning(true);
    };

    const formatTime = (time: number) => {
        return (time / 1000).toFixed(2);
    };
    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <div style={urlBarStyle}>
                    <input type="text" value="https://www.jdstrongpdx.com" readOnly style={inputStyle}/>
                </div>
                <div style={headerFooterStyle}>
                    <h4>Welcome to my Webpage</h4>
                </div>
                <div style={mainStyle}>
                    {visibleElements[0] && <h2>Loading...</h2>}
                    {visibleElements[1] && <h3>Hello, my name is Joel Strong.</h3>}
                    {visibleElements[2] && <h3>I am a full stack software engineer.</h3>}
                    {visibleElements[3] && <h3>I have...</h3>}
                    {visibleElements[4] && <ol>
                        <ul>5 years developing in-house software for Manufacturing</ul>
                    </ol>}

                    <button onClick={handleRestart} style={{marginTop: '20px', padding: '10px 20px'}}>
                        {elapsedTime >= maxTime ? 'Reset' : `Timer: ${formatTime(elapsedTime)} seconds`}
                    </button>
                </div>
                <div style={footerStyle}>
                    <p>&copy; {currentYear} Joel Strong</p>
                </div>
            </div>
        </div>
    );
};
*/

export default HomePage;
