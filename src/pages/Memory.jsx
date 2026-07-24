import React, { useState } from "react";
import LoveTimer from "../components/LoveTimer";


export default function Memory(){


const memories=[

{
emoji:"✈️",
title:"第一次旅行",
date:"2025.10",
desc:"第一次一起看见远方",
story:"我们的第一段旅程，从这里开始。",
photos:12,
color:"#667eea"
},


{
emoji:"⛰️",
title:"熊野古道",
date:"2025.07",
desc:"双朝圣的旅程",
story:"走完中边路，完成双朝圣，留下23枚印章。",
photos:23,
color:"#38bdf8"
},


{
emoji:"🌌",
title:"星空露营",
date:"2025",
desc:"属于我们的夜晚",
story:"在星空下留下的记忆。",
photos:8,
color:"#a855f7"
},


{
emoji:"📷",
title:"照片收藏",
date:"Forever",
desc:"记录每一个瞬间",
story:"所有没有消失的片段。",
photos:100,
color:"#ec4899"
}


];



const videos=[

"第一次旅行",
"熊野古道",
"日本时光",
"星空露营"

];



const [active,setActive]=useState(null);



return (

<div

style={{

width:"100vw",

minHeight:"100vh",

overflowY:"auto",

background:

"radial-gradient(circle at center,#172554,#020617 75%)",

color:"white",

fontFamily:"sans-serif",

position:"relative"

}}

>


{/* 星空 */}

<div

style={{

position:"fixed",

inset:0,

backgroundImage:

"radial-gradient(#ffffff33 1px,transparent 1px)",

backgroundSize:"45px 45px",

opacity:.25

}}

/>



{/* 标题 */}

<div

style={{

padding:"55px 60px",

position:"relative",

zIndex:2

}}

>


<h1

style={{

fontSize:"64px",

letterSpacing:"8px",

margin:0

}}

>

回忆影像馆

</h1>


<p

style={{

fontSize:"18px",

letterSpacing:"5px",

opacity:.6

}}

>

MEMORY UNIVERSE

</p>


</div>




{/* 计时器 */}

<div

style={{

position:"fixed",

right:"35px",

top:"50%",

transform:"translateY(-50%)",

zIndex:20

}}

>

<LoveTimer/>

</div>





{/* 星球 */}

<div

style={{

display:"flex",

justifyContent:"center",

gap:"55px",

flexWrap:"wrap",

marginTop:"40px",

position:"relative",

zIndex:2

}}

>


{

memories.map((item,index)=>(


<div

key={index}

onClick={()=>setActive(item)}

style={{

width:"190px",

height:"190px",

borderRadius:"50%",

cursor:"pointer",

display:"flex",

alignItems:"center",

justifyContent:"center",

flexDirection:"column",

background:

`linear-gradient(135deg,${item.color},#111827)`,

boxShadow:

`0 0 70px ${item.color}`,

transition:"0.4s"

}}

onMouseEnter={(e)=>{

e.currentTarget.style.transform="scale(1.15)";

}}

onMouseLeave={(e)=>{

e.currentTarget.style.transform="scale(1)";

}}

>


<div

style={{

fontSize:"45px"

}}

>

{item.emoji}

</div>


<div>

{item.title}

</div>


<small>

{item.date}

</small>


</div>


))

}


</div>






{/* 影像 */}

<div

style={{

padding:"70px 60px",

position:"relative",

zIndex:2

}}

>


<h2>

🎬 所有影像

</h2>



<div

style={{

display:"grid",

gridTemplateColumns:

"repeat(auto-fit,minmax(260px,1fr))",

gap:"30px"

}}

>


{

videos.map((v,i)=>(


<div

key={i}

style={{

height:"180px",

borderRadius:"25px",

background:

"linear-gradient(135deg,#111827,#1e293b)",

display:"flex",

alignItems:"center",

justifyContent:"center",

fontSize:"20px",

boxShadow:

"0 20px 50px #0008",

cursor:"pointer"

}}

>

▶ {v}


</div>


))

}


</div>


</div>






{/* 点击星球详情 */}

{

active && (

<div

onClick={()=>setActive(null)}

style={{

position:"fixed",

inset:0,

zIndex:100,

background:"rgba(0,0,0,.65)",

backdropFilter:"blur(20px)",

display:"flex",

alignItems:"center",

justifyContent:"center"

}}

>


<div

onClick={(e)=>e.stopPropagation()}

style={{

width:"480px",

padding:"45px",

borderRadius:"35px",

background:

"linear-gradient(135deg,rgba(255,255,255,.18),rgba(255,255,255,.05))",

border:

"1px solid rgba(255,255,255,.2)",

boxShadow:

"0 0 80px rgba(100,150,255,.5)",

textAlign:"center"

}}

>


<div

style={{

fontSize:"75px"

}}

>

{active.emoji}

</div>



<h1>

{active.title}

</h1>


<p>

{active.date}

</p>



<hr

style={{

opacity:.3

}}

/>



<h3>

{active.desc}

</h3>


<p

style={{

opacity:.8,

lineHeight:"1.8"

}}

>

{active.story}

</p>



<div

style={{

display:"flex",

justifyContent:"center",

gap:"40px",

marginTop:"30px"

}}

>


<div>

📷

<br/>

{active.photos} 张照片

</div>


<div>

🎬

<br/>

视频

</div>


<div>

📖

<br/>

故事

</div>


</div>




<button

onClick={()=>setActive(null)}

style={{

marginTop:"40px",

padding:"12px 45px",

borderRadius:"30px",

border:"none",

cursor:"pointer"

}}

>

返回宇宙

</button>



</div>


</div>


)

}



</div>


)

}
