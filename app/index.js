import express from "express";
console.log("la gata de yohana es una loca :V")

const app = express();
const port = process.env.NODE_PORT || 3000;

app.get('/', async (req,res)=>{
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});