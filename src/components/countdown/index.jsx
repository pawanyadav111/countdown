import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [time, setTime] = useState(120);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTime(120);
    setIsRunning(false);
  };

  const handleInputChange = (e) => {
    const newTime = parseInt(e.target.value, 10);
    setTime(isNaN(newTime) ? 0 : newTime);
  };

  return (
    <div className="text-center mt-8">
      <h2 className="text-3xl font-semibold mb-4">Countdown Timer</h2>

      <div className="flex items-center justify-center mb-4">
        <label htmlFor="countdown" className="mr-2">Set Time (in seconds):</label>
        <input
          type="number"
          id="countdown"
          value={time}
          onChange={handleInputChange}
          className="border p-2"
        />
      </div>

      <div className="text-4xl mb-4">{`${Math.floor(time / 60)}:${(time % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}`}</div>

      <div className="flex justify-center space-x-4">
        <button onClick={startTimer} className="bg-green-500 text-white px-4 py-2 rounded-md">Start</button>
        <button onClick={stopTimer} className="bg-red-500 text-white px-4 py-2 rounded-md">Stop</button>
        <button onClick={resetTimer} className="bg-blue-500 text-white px-4 py-2 rounded-md">Reset</button>
      </div>
    </div>
  );
};

export default Countdown;
