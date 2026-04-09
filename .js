const res = await fetch("http://localhost:8000/v1/message", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
  },
  body: JSON.stringify({ message: "Hello" })
});
console.log(await res.json());
