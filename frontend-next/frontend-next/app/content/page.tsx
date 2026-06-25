export default function ContentPage() {
  return (
    <main style={{ padding: "30px" }}>
      <h1>مولد المحتوى بالذكاء الاصطناعي</h1>

      <div
        style={{
          maxWidth: "800px",
          margin: "30px auto"
        }}
      >
        <textarea
          placeholder="اكتب وصف المحتوى الذي تريد إنشاءه..."
          style={{
            width: "100%",
            height: "200px",
            padding: "15px",
            borderRadius: "10px"
          }}
        />

        <button
          style={{
            marginTop: "15px",
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          إنشاء المحتوى
        </button>

        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px"
          }}
        >
          <h3>النتيجة</h3>
          <p>
            سيظهر المحتوى الذي تم إنشاؤه بواسطة الذكاء الاصطناعي هنا.
          </p>
        </div>
      </div>
    </main>
  );
}
