const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
	res.json({ message: "Hello World get"});
	console.log(JSON.stringify(req.headers));
	
})
app.post('/', (req, res) => {
	res.json({ message: "Hello World Post"});
	console.log(JSON.stringify(req.body));
	console.log(JSON.stringify(req.headers));
})

app.get("/health-check", (req, res) => {
	res.json({ message: "Server up and running"+req  });
})

app.listen(PORT, () => {
	console.log("Server Running on PORT", PORT);
})
