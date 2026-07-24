import React, {useEffect, useState} from "react";


export default function LoveTimer(){

const startTogether = new Date("2025-09-17T00:00:00");
const separateDate = new Date("2026-06-26T00:00:00");


const [now,setNow]=useState(new Date());


useEffect(()=>{
 const timer=setInterval(()=>{
   setNow(new Date());
 },1000);

 return ()=>clearInterval(timer);

},[]);



function diff(date1,date2){

let seconds=Math.floor((date2-date1)/1000);

let days=Math.floor(seconds/86400);
seconds%=86400;

let hours=Math.floor(seconds/3600);
seconds%=3600;

let minutes=Math.floor(seconds/60);
seconds%=60;


return `${days}天 ${hours}小时 ${minutes}分 ${seconds}秒`;

}



return (

<div style={{
position:"absolute",
right:"60px",
bottom:"120px",
zIndex:30,
color:"white",
background:"rgba(0,0,0,0.35)",
backdropFilter:"blur(10px)",
padding:"25px",
borderRadius:"20px",
textAlign:"center",
fontSize:"18px",
lineHeight:"2"
}}>


<div>
❤️ 在一起的日子
<br/>

<b>
{diff(startTogether,separateDate)}
</b>

<br/>

<span style={{fontSize:"14px"}}>
⏸ 已暂停
</span>

</div>



<hr/>


<div>

🕊 分开的日子

<br/>

<b>
{diff(separateDate,now)}
</b>

</div>


</div>

)

}
