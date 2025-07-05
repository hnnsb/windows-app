import {useEffect, useState} from "react";
import {useTheme} from "@/context/ThemeContext.tsx";

export default function Clock() {
  const [time, setTime] = useState<string>()

  const {theme} = useTheme();

  useEffect(() => {
    setInterval(() => {
      const date = new Date()

      const hour = date.getHours()
      const minute = date.getMinutes()

      const currentTime = hour.toString().padStart(2, '0') + ':' + minute.toString().padStart(2, '0');

      setTime(currentTime)
    }, 1000)
  }, [])

  const classes = "clock " + (theme === "xp" ? "clock-xp" : "clock-w98");

  return (
    <div className={classes}>
      <span className={"time"}>{time}</span>
    </div>
  )
}