const express = require("express");
const db = require("./data/db.js");

const server = express();
const port = 6000;

server.use(express.json());

server.get("/", (req, res) => {
	res.json({
		message: "Welcome to our API",
	})
})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})