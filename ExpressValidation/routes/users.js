var express=require('express')
var router=express.Router()


const bodyParser=require('body-parser')
const urlencodedParser=bodyParser.urlencoded({extended:false})
const {body,validationResult}=require('express-validator')

router.get('/register',function(req,res){
	
	res.render('register')
})
router.get('/login',function(req,res){
	
	res.render('login')
})
router.post('/login',function(req,res){
	
	res.json(req.body)
})
router.post('/register',urlencodedParser,[body('username','this username must be 3+characters long')
	.exists()
	.isLength({min:3}),body('email','valid email required').isEmail().normalizeEmail()],function(req,res){
		
		const errors=validationResult(req)
		if(!err.isEmpty()){
			//return res.status(422).jsonp(errors.array())
			res.render('register',{
				errors
			})
			
		}
	
})


module.exports=router