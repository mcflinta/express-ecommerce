import express from 'express';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT;


// Config views Engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Config static files
app.use(express.static('/public'));


const a = 0;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



