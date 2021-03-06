var express=require('express')
var router=express.Router()

router.get('/register',function(req,res){
	
	res.render('register')
})

router.get('/login',function(req,res){
	
	res.render('login')
})


router.get('/:id',async function(req,res){
	try{
		const id=req.params.id
		const newsapi=await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/${id}`)
		//console.log(newsapi.data)
		res.render('fullhomepage',{article:newsapi.data})
		
	}catch(err)
	{
		if(err.response)
		{
			console.log(err.response.data)
			console.log(err.response.status)
			console.log(err.response.headers)
		}
		else if(err.request)
		{
			res.render('index',{articles:null})
			console.log(err.request)
		}else{
			res.render('index',{articles:null})
			console.error(err.message)
			
		}
	}
//	res.render('index')
})


module.exports=router