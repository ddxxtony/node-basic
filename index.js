const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
	res.json({ message: "Hello World "+req});
	console.log(req);
	
})

app.get("/health-check", (req, res) => {
	res.json({ message: "Server up and running"+req  });
})

app.listen(PORT, () => {
	console.log("Server Running on PORT", PORT);
})
