const express = require('express');
const path = require('path');
const hbs = require('hbs')
const app = express();
const Port = process.env.PORT || 8000;

const staticPath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname , "../templates/partials");

// console.log(staticPath)

app.set('view engine' , 'hbs')
app.set('views' , template_path)
hbs.registerPartials(partials_path)

app.use(express.static(staticPath));


app.get("/", (req , res)=>{
    res.render("index")
})



// Remove the unnecessary root route handling
// The static middleware will handle serving index.html automatically
app.get("/about", (req, res) => {
  res.render("about")
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("*", (req, res) => {
    res.render("error404");
});

app.listen(Port, () => {
    console.log(`Listening at port ${Port}`);
});
