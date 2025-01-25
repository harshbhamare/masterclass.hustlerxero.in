const express = require("express")
const app = express()
const path = require("path")

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname, "public")))



app.get("/", function(req, res){
    res.render('index', { title: 'Home Page' });
})

app.get("/about-us", function(req, res){
    res.render('aboutus', { title: 'About Us' });
})

app.get("/masterclass", function(req, res){
    res.redirect('/#masterclass');
})

app.get("/blogs", function(req, res){
    res.render("blogs", { title: 'About Us' })
})

app.get("/support", function(req, res){
    res.render("support", { title: 'Support' })
})

app.get("/refund-policy", function(req, res){
    res.render("refund", { title: 'Refund Policy' })
})

app.get("/terms-and-conditions", function(req, res){
    res.render("termsAndConditions", { title: 'Terms And Conditions' })
})

app.get("/privacy-policy", function(req, res){
    res.render("privacy", { title: 'Privacy Policy' })
})


app.use (function(req, res){
    res.redirect("/")
})



app.listen(3000)