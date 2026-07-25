import React, {useEffect, useState} from "react";

export default function LoveTimer(){

const start = new Date("2025-09-17");
const end = new Date("2026-06-26");

const [now,setNow]=useState(new Date());

useEffect(()=>{
 const timer=setInterval(()=>{
   setNow(new Date());
 },1000);

 return ()=>clearInterval(timer);
},[]);


function diff(a,b){

let s=Math.floor((b-a)/1000);

let d=Math.floor(s/86400);
s%=86400;

let h=Math.floor(s/3600);
s%=3600;

let m=Math.floor(s/60);
let sec=s%60;

return `${d}天 ${h}小时 ${m}分 ${sec}秒`;

}


return (

<div
style={{
position:"fixed",
top:"80px",
right:"40px",
zIndex:99999,
color:"#fff",
fontSize:"22px",
textAlign:"center",
background:"rgba(0,0,0,0.45)",
padding:"20px",
borderRadius:"18px",
backdropFilter:"blur(12px)",
width:"280px"
}}
>

<div>
❤️ 在一起的日子
</div>

<div>
2025.09.17 - 2026.06.26
</div>

<div>
{diff(start,end)}
</div>

<div style={{marginTop:"15px"}}>
⏸ 已暂停
</div>


<hr/>


<div>
💔 分开的日子
</div>

<div>
{diff(end,now)}
</div>


</div>


)

}
