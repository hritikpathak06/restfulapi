const express = require('express');
require("./db/conn");
// const Student = require("./models/students");
const router = require("./routers/student");
const app = express();
const port = 3000 || process.env.PORT;

app.use(express.json());
app.use(router);


// app.get("/", (req,res) => {
//     res.send("This is the home page.... !");

// })
// Create a new students  using promises
// app.post("/students", (req,res) => {
//     console.log(req.body)
//     const user = new Student(req.body)
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((err) => {
//         res.status(400).send(err);
//     })
//     // res.send("This is the home page.... !");
// })
// **************************************************************************************************



app.listen(port, () => {
    console.log(`server started listening at the port ${port}`)
});