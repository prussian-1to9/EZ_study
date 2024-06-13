import express from 'express';
import nunjucks from 'nunjucks';
import bodyParser from 'body-parser';

import path from 'path';
import fs from 'fs'; // to save data
import mongoose from 'mongoose';

import { MONGODB_EXPRESS } from './config.js';
import e from 'express';

const app = express();
const filePath = path.join(path.resolve(), 'data'); // /my_app/data/

// ===== [ express configuration ] =====
// set body parser
app.use(bodyParser.urlencoded({ extended: false })); // no extension
app.use(bodyParser.json());

// set view engine
app.set('view engine', 'html');


// ===== [ nunjucks configuration ] =====
nunjucks.configure('views', {
    watch: true,
    express: app
});

// ===== [ mongoDB configuration ] =====
// connect
mongoose.connect(MONGODB_EXPRESS).then(() => {
    console.log('Successfully connected to MongoDB');
}).catch(console.error);

// schema definition
const { Schema } = mongoose;

const writingSchema = new Schema({
    title: String,
    contents: String,
    date: {
        type: Date,
        default: Date.now,
    }
});

const Writing = mongoose.model('Writings', writingSchema);

// load one post from MongoDB
const loadOne = async (id) => {
    return await Writing.findOne({
        _id: id
    }).then((result) => {
        return result;
    }).catch(console.error);
}

// ===== [ middleware ] =====
// GET : main page : List
app.get('/', async (req, res) => {
/*
    // load from current file
    const fileData = fs.readFileSync(path.join(filePath, 'writing.json'));

    res.render('main', {
        'list': JSON.parse(fileData)
    });
*/

    // load from MongoDB
    // similar to SELECT ${column_name, ...} FROM writings;
    let writings = await Writing.find({ }); // SELECT * FROM writings;

    res.render('main', { list: writings });
});

// GET : write page
app.get('/write', (req, res) => {
    res.render('write');
});

// POST : exec write
app.post('/write', async (req, res) => {
    // handel parameters
    const title = req.body.title;
    const contents = req.body.contents;
/*
    const date = req.body.date;
    
    const formData = {
        'title': title,
        'contents': contents,
        'date': date
    }
    
    // save to ./data/writing.json
    const fileData = fs.readFileSync(path.join(filePath, 'writing.json'));
    
    const writings = JSON.parse(fileData);
    writings.push(formData);
    fs.writeFileSync(path.join(filePath, 'writing.json'), JSON.stringify(writings));

    res.render('detail', {
        'detail': formData
    });
*/

    // save to MongoDB : 'express.writings'
    const writing = new Writing({
        title: title,
        contents: contents
    });
    const result = await writing.save().then((e) => {
        console.log(`Post ${e._id} successfully saved`);
        res.redirect(`detail/${e._id}`)
    }).catch((err) => {
        console.error(err);
        res.render('write');
    });
});

// GET : detail page
app.get('/detail/:id', async (req, res) => {
    // load data from MongoDB
    loadOne(req.params.id).then((result) => {
        res.render('detail', { detail: result });
    }).catch(console.error);
});

// GET : edit page
app.get('/edit/:id', async (req, res) => {
    // load data from MongoDB
    loadOne(req.params.id).then((result) => {
        res.render('detail', { edit: result });
    }).catch(console.error);
});


// POST : exec edit
app.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const edit_content = await Writing.updateOne({
        _id: id
    }, {
        title: req.body.title,
        contents: req.body.contents,
        date: Date.now()
    }).then(() => {
        console.log(`Post ${id} successfully updated`);
        res.redirect(`/detail/${id}`);
    }).catch(console.error);
});


// POST : exec delete
app.post('/delete/:id', async (req, res) => {
    const id = req.params.id;

    // delete from MongoDB
    const delete_content = await Writing.deleteOne({
        _id: id
    }).then(() => {
        console.log(`Post ${id} successfully deleted`);
        res.redirect('/');
    }).catch(console.error);
});


// ===== [ serve ] =====
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});