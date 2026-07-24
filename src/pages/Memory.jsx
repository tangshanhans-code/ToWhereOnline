import React, {useState} from "react";
import LoveTimer from "../components/LoveTimer";


export default function Memory(){


const memories=[

{
emoji:"✈️",
title:"第一次旅行",
date:"2025.10",
desc:"第一次一起看见远方",
color:"#667eea"
},

{
emoji:"⛰️",
title:"熊野古道",
date:"2025.07",
desc:"双朝圣的旅程",
color:"#38bdf8"
},

{
emoji:"🌌",
title:"星空露营",
date:"2025",
desc:"属于我们的夜晚",
color:"#a855f7"
},

{
emoji:"📷",
title:"照片收藏",
date:"Forever",
desc:"记录每一个瞬间",
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
"radial-gradient(circle at center,#172554,#020617 70%)",
color:"white",
fontFamily:"sans-serif",
position:"relative"
}}
>


{/* 星空光晕 */}

<div
style={{
position:"fixed",
inset:0,
background:
"radial-gradient(circle,#ffffff22 1px,transparent 1px)",
backgroundSize:"40px 40px",
opacity:.25
}}
/>



{/* 标题 */}

<div
style={{
position:"relative",
padding:"50px 60px",
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
fontSize:"20px",
opacity:.6,
letterSpacing:"4px"
}}
>
MEMORY UNIVERSE
</p>


</div>



{/* 计时器 */}

<div
style={{
position:"fixed",
right:"40px",
top:"50%",
transform:"translateY(-50%)",
zIndex:10
}}
>

<LoveTimer/>

</div>





{/* 星球区域 */}

<div
style={{
display:"flex",
justifyContent:"center",
gap:"60px",
marginTop:"50px",
position:"relative",
zIndex:2,
flexWrap:"wrap"
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
background:
`linear-gradient(135deg,${item.color},#111827)`,
display:"flex",
alignItems:"center",
justifyContent:"center",
flexDirection:"column",
cursor:"pointer",
boxShadow:
`0 0 60px ${item.color}`,
transition:"0.4s",
transform:
active?.title===item.title
?"scale(1.15)"
:"scale(1)"
}}
>


<div
style={{
fontSize:"40px"
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





{/* 当前章节 */}

{
active &&

<div
style={{
margin:"70px auto",
width:"60%",
padding:"40px",
background:"rgba(255,255,255,.08)",
backdropFilter:"blur(20px)",
borderRadius:"30px",
textAlign:"center",
position:"relative",
zIndex:2
}}
>


<h2>
{active.emoji} {active.title}
</h2>


<p
style={{
fontSize:"20px",
opacity:.8
}}
>
{active.desc}
</p>


<p>
DATE : {active.date}
</p>


</div>

}




{/* 视频 */}

<div
style={{
padding:"40px 60px",
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





</div>

)

}
