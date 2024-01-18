import { CountdownCircleTimer } from "react-countdown-circle-timer";
import upIcon from "../assets/icons/up.png";
import downIcon from "../assets/icons/down.png";
import { useEffect, useState } from "react";

export const Timer = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const [startTimer, setStartTimer] = useState(false);

  // direction = up/down
  // time = hour/minute/second
  const changeTime = (direction, time) => {
    if (direction === "up") {
      if (time === "h") {
        setHour((prev) => prev + 1);
      } else if (time === "m") {
        if (minute === 59) {
          setHour((prev) => prev + 1);
          setMinute(0);
        } else {
          setMinute((prev) => prev + 1);
        }
      } else if (time === "s") {
        if (second === 59) {
          setMinute((prev) => prev + 1);
          setSecond(0);
        } else {
          setSecond((prev) => prev + 1);
        }
      }
    } else {
      if (time === "h") {
        if (hour === 0) return;
        setHour((prev) => prev - 1);
      } else if (time === "m") {
        if (minute === 0) return;
        setMinute((prev) => prev - 1);
      } else if (time === "s") {
        if (second === 0) return;
        setSecond((prev) => prev - 1);
      }
    }
  };

  const getTime = () => {
    if (hour * 60 * 60 + minute * 60 + second < 0) {
      return 0;
    }
    return hour * 60 * 60 + minute * 60 + second;
  };

  return (
    <div className="bg-[#1e2343] rounded-2xl px-20 py-6 text-white flex justify-around gap-x-20">
      <div>
        <CountdownCircleTimer
          isPlaying={startTimer}
          children
          duration={getTime()}
          initialRemainingTime={getTime()}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
          onComplete={() => {
            setHour(0);
            setMinute(0);
            setSecond(0);
            setStartTimer(false);
          }}
        >
          {({ remainingTime }) => {
            console.log(remainingTime);
            let hours = 0;
            let minutes = 0;
            let seconds = 0;
            if (remainingTime > 0) {
              hours = Math.abs(Math.floor(remainingTime / 3600));
              minutes = Math.abs(Math.floor((remainingTime % 3600) / 60));
              seconds = Math.abs(remainingTime % 60);
            } else {
              hours = 0;
              minutes = 0;
              seconds = 0;
            }

            return (
              <p className="text-xl">
                {hours} : {minutes} : {seconds}
              </p>
            );
          }}
        </CountdownCircleTimer>
      </div>

      <div className="flex flex-col justify-between gap-5 w-1/2">
        <div className="grid grid-cols-3 gap-x-5">
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg">Hours</p>
            <img src={upIcon} alt="" onClick={() => changeTime("up", "h")} />
            <p className="text-4xl">{hour}</p>
            <img
              src={downIcon}
              alt=""
              onClick={() => changeTime("down", "h")}
            />
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-lg">Minutes</p>
            <img src={upIcon} alt="" onClick={() => changeTime("up", "m")} />
            <p className="text-4xl">{minute}</p>
            <img
              src={downIcon}
              alt=""
              onClick={() => changeTime("down", "m")}
            />
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-lg">Seconds</p>
            <img src={upIcon} alt="" onClick={() => changeTime("up", "s")} />
            <p className="text-4xl">{second}</p>
            <img
              src={downIcon}
              alt=""
              onClick={() => changeTime("down", "s")}
            />
          </div>
        </div>

        <button
          disabled={getTime() === 0}
          onClick={() => setStartTimer(!startTimer)}
          className="bg-red-500 hover:bg-red-500/90 rounded-full py-2 text-xl disabled:cursor-not-allowed"
        >
          {startTimer ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};
