const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fileUpload = require('express-fileupload');
const axios = require('axios');

const app = express();

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : path.join(__dirname, 'temp')
}));
require('dotenv').config();
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
})); 
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/pages'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/deeppodcast', async (req, res) => {
    await axios.get(process.env.URL_API_PODCAST).then(function(data){
        data.data.reverse();
        var itenspod  = data.data.map(function(val){
            return {
                titulo: val.titulo,
                autor: val.autor,
                video: val.video,
                data: val.data,
            }
        })
        res.render('podcast',{data:itenspod});
    });
})

app.listen(process.env.PORT || 80,()=>{
    console.log('server rodando');
})