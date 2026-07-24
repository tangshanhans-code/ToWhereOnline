import React from "react";
import LoveTimer from "../components/LoveTimer";

export default function Memory(){

return (

<div
style={{
width:"100vw",
height:"100vh",
overflow:"auto",
background:"#050816",
color:"white",
position:"relative",
fontFamily:"sans-serif"
}}
>


{/* 背景星空 */}

<div
style={{
position:"fixed",
inset:0,
background:
"radial-gradient(circle at center,#18254a,#050816 70%)",
zIndex:0
}}
/>



{/* 顶部标题 */}

<div
style={{
position:"relative",
zIndex:2,
padding:"60px",
}}
>

<h1
style={{
fontSize:"60px",
letterSpacing:"5px"
}}
>
回忆影像馆
</h1>

<p
style={{
opacity:0.7,
fontSize:"20px"
}}
>
MEMORY UNIVERSE
</p>


</div>




{/* 计时器 */}

<div
style={{
position:"absolute",
top:"80px",
right:"60px",
zIndex:3
}}
>

<LoveTimer/>

</div>





{/* 视频星球 */}

<div
style={{
position:"relative",
zIndex:2,
display:"flex",
justifyContent:"center",
gap:"60px",
marginTop:"80px"
}}
>


{
[
"第一次旅行",
"熊野古道",
"星空露营"
].map((item,index)=>(


<div
key={index}
style={{
width:"180px",
height:"180px",
borderRadius:"50%",
background:
"linear-gradient(135deg,#667eea,#764ba2)",
display:"flex",
alignItems:"center",
justifyContent:"center",
boxShadow:
"0 0 50px rgba(120,100,255,.6)",
cursor:"pointer"
}}
>

🪐

<br/>

{item}


</div>


))
}


</div>




{/* 视频区域 */}

<div
style={{
position:"relative",
zIndex:2,
padding:"80px"
}}
>

<h2>
所有影像
</h2>


<div
style={{
display:"flex",
gap:"30px",
flexWrap:"wrap"
}}
>


{
[1,2,3,4].map(i=>(

<div
key={i}
style={{
width:"280px",
height:"180px",
background:"#111827",
borderRadius:"20px",
display:"flex",
alignItems:"center",
justifyContent:"center"
}}
>

▶ 视频 {i}

</div>

))
}


</div>


</div>




</div>

)

}
