import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";


export default function LoveTimer(){

const togetherStart = new Date("2025-09-17T00:00:00");
const togetherEnd = new Date("2026-06-26T00:00:00");


const [now,setNow]=useState(new Date());


useEffect(()=>{

const timer=setInterval(()=>{
 setNow(new Date());
},1000);


return ()=>clearInterval(timer);

},[]);



function calculate(start,end){

let total=Math.floor((end-start)/1000);


let day=Math.floor(total/86400);
let hour=Math.floor((total%86400)/3600);
let minute=Math.floor((total%3600)/60);
let second=total%60;


return {
day,
hour,
minute,
second
};

}



function TimerText({data}){

return (

<div style={{
display:"flex",
justifyContent:"center",
gap:"10px",
marginTop:"15px"
}}>


{[
["天",data.day],
["时",data.hour],
["分",data.minute],
["秒",data.second]
].map((item,i)=>(

<div key={i}>

<div style={{
fontSize:"25px",
fontWeight:"600"
}}>
{String(item[1]).padStart(2,"0")}
</div>

<div style={{
fontSize:"12px",
opacity:.7
}}>
{item[0]}
</div>


</div>

))}

</div>

)

}



const together=calculate(
togetherStart,
togetherEnd
);


const separate=calculate(
new Date("2026-06-26T00:00:00"),
now
);



return (

<motion.div

initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}

style={{

position:"absolute",

right:"60px",

bottom:"130px",

width:"260px",

padding:"30px",

borderRadius:"30px",

background:
"rgba(10,20,45,0.45)",

border:
"1px solid rgba(255,255,255,0.15)",


backdropFilter:
"blur(15px)",


color:"white",

zIndex:50,


textAlign:"center",


boxShadow:
"0 0 40px rgba(100,150,255,0.2)"

}}

>


<div style={{
fontSize:"13px",
letterSpacing:"5px",
opacity:.7
}}>
TIME CAPSULE
</div>



<div style={{
fontSize:"26px",
marginTop:"20px"
}}>
🌎 在场
</div>


<div style={{
fontSize:"12px",
opacity:.6
}}>
2025.09.17 — 2026.06.26
</div>


<TimerText data={together}/>


<div style={{
margin:"25px 0",
height:"1px",
background:"rgba(255,255,255,.2)"
}}/>


<div style={{
fontSize:"26px"
}}>
🌙 离开以后
</div>


<div style={{
fontSize:"12px",
opacity:.6
}}>
2026.06.26 — NOW
</div>


<TimerText data={separate}/>



<div style={{
marginTop:"20px",
fontSize:"12px",
opacity:.5
}}>
第一段旅程 · 已暂停
<br/>
第二段时间 · 仍在继续
</div>


</motion.div>


)

}
