var mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const {isEmail}=require('validator')
mongoose.connect('mongodb://localhost/imagedb',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
	console.log('connected')
})
.catch((err)=>{
	console.log(err)
})
var userschema=new mongoose.Schema({
	filepath:{
		type:String
	}
	
})

const Image=mongoose.model('image',userschema)
module.exports=Image
