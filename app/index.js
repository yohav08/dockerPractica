import express from express;

const app = express();
const port = process.env.NODE_PORT;

app.get('/', async (req,res)=>{
    res.send('Hello World');º
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});