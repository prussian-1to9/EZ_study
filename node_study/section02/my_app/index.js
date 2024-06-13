import express from 'express'; // import express
import path from 'path'; // import path for __dirname

const __dirname = path.resolve(); // get the current directory

const app = express(); // create an express application

// middleware

// GET mainpage
app.get('/', (req, res) => {
    //res.send(`
    //    <h1>Hello, Express!</h1>
    //`);
    res.sendFile(`${__dirname}/public/main.html`);
});

// serve
app.listen(3000, () => { // use 3000 port
    console.log('Server is running on http://localhost:3000');
});
