import path from 'path';
import express from 'express';
import nunjecks from 'nunjucks';

const __dirname = path.resolve();

const app = express();

// set view engine
app.set('view engine', 'html');

// nunjucks configuration
nunjecks.configure('views', {
    watch: true, // reload templates when they are changed
    express: app
});

// middeleware
// GET main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/write', (req, res) => {
    res.render('write.html');
});

// serve
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});