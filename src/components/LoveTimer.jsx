import React, { useEffect, useState } from "react";

export default function LoveTimer() {

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    },1000);

    return () => clearInterval(timer);
  },[]);


  const start = new Date("2026-06-26T00:00:00");

  const diff = now - start;

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff / (1000*60*60)) % 24);
  const minutes = Math.floor((diff / (1000*60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);


  return (

    <div
    style={{
      position:"fixed",
      right:"40px",
      top:"120px",
      zIndex:999999,
      color:"white",
      background:"rgba(0,0,0,0.5)",
      padding:"20px",
      borderRadius:"15px",
      fontSize:"20px"
    }}
    >

      <div>
      分开的日子
      </div>

      <div>
      {days} 天 {hours} 小时 {minutes} 分 {seconds} 秒
      </div>


    </div>

  );

}
