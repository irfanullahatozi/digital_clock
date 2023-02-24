import React,{useState, useEffect} from "react";
import classes from "./Clock.module.css";

const Clock = () => {

  const [date, setDate] = useState("");
  

  function showTime() {
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";
    if (h === 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    let time = h + " : " + m + " : " + s + " " + session;
    return time
}    


  function refreshClock() {
    setDate(showTime());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  });

  return (
    <div className={`${classes.clock}`}>
      {date}
    </div>
  );
};

export default Clock;
