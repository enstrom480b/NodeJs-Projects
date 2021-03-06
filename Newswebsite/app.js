var express=require('express')
var path=require('path')
var exphbs=require('express-handlebars')
var flash=require('express-flash')
var session=require('express-session')
var expressvalidator=require('express-validator')
var bodyparser=require('body-parser')
var passport=require('passport')

var auth=require('./auth')(passport)
var app=express()

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))
var index=require('./routes/index')
var users=require('./routes/users')


app.use('/',index)
app.use('/article',index)
app.use('/users',users)

var port=3000
app.listen(port,function(){
	console.log('server started on port'+port)
})

