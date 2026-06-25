export default function LoginPage() {
return (
<main
style={{
minHeight: "100vh",
display: "flex",
justifyContent: "center",
alignItems: "center"
}}
>
<div
style={{
width: "350px",
padding: "30px",
borderRadius: "12px",
background: "#ffffff",
color: "#000"
}}
>
<h1>تسجيل الدخول</h1>

    <input
      type="email"
      placeholder="البريد الإلكتروني"
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "10px"
      }}
    />

    <input
      type="password"
      placeholder="كلمة المرور"
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "15px"
      }}
    />

    <button
      style={{
        width: "100%",
        padding: "12px",
        cursor: "pointer"
      }}
    >
      دخول
    </button>
  </div>
</main>

);
        }
