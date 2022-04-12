const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))

//HTTP Lokger
app.use(morgan('combined'));
//Template angine
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));
console.log(path.join(__dirname, 'resources\\views'));

app.get('/', (req, res) => {
    
  res.render('home');
})
app.get('/news', (req, res) => {
    
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})