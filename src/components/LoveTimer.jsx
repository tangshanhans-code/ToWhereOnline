import React,{useEffect,useState} from "react";

export default function LoveTimer(){

const [now,setNow]=useState(new Date());

useEffect(()=>{
 const t=setInterval(()=>setNow(new Date()),1000);
 return ()=>clearInterval(t);
},[]);


const start=new Date("2026-06-26T00:00:00");

const diff=now-start;


const day=Math.floor(diff/86400000);
const hour=Math.floor(diff/3600000)%24;
const min=Math.floor(diff/60000)%60;
const sec=Math.floor(diff/1000)%60;


return (

<div
style={{
position:"fixed",
right:"40px",
top:"40px",
zIndex:99999,
color:"#fff",
background:"rgba(0,0,0,.45)",
padding:"20px 30px",
borderRadius:"20px",
backdropFilter:"blur(10px)",
fontSize:"18px"
}}
>

<div style={{fontSize:"24px"}}>
分开的日子
</div>

<div>
{day}天 {hour}小时 {min}分 {sec}秒
</div>

</div>

)

}
