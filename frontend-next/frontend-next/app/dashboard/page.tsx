export default function Dashboard() {
return (
<main style={{ padding: "30px" }}>
<h1>ALWASEET AI Dashboard</h1>

  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "20px",
    marginTop: "30px"
  }}>

    <div style={{padding:"20px",border:"1px solid #ddd",borderRadius:"12px"}}>
      <h3>عدد العملاء</h3>
      <p>125</p>
    </div>

    <div style={{padding:"20px",border:"1px solid #ddd",borderRadius:"12px"}}>
      <h3>عدد المنشورات</h3>
      <p>850</p>
    </div>

    <div style={{padding:"20px",border:"1px solid #ddd",borderRadius:"12px"}}>
      <h3>الترندات</h3>
      <p>12</p>
    </div>

    <div style={{padding:"20px",border:"1px solid #ddd",borderRadius:"12px"}}>
      <h3>التفاعل</h3>
      <p>94%</p>
    </div>

  </div>
</main>

);
                 }
