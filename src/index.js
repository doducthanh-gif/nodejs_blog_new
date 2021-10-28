const path = require('path')
const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars({
    extname : ".hbs"
}));

// __dirname: Đây chính là đường dẫn đến thư mục file index.js đang đứng. (D:\Node JS\Learn_1\src)
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

// route ( định nghĩa tuyến đường)
app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('news');
})

// 127.0.0.1 - localhost (phân giải DNS để call đến địa chỉ ip)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})