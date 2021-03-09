const express=require('express')
const path=require('path')
const multer=require('multer')
const uuid=require('uuid').v4
const app=express()
const Image=require('./db')
app.use(express.static('../public')) 
app.use(express.static('uploads'))
const storage=multer.diskStorage({
	destination:(req,file,cb)=>{
		cb(null,'uploads/')
	},
	filename:(req,file,cb)=>{
		const ext=path.extname(file.originalname)
		const id=uuid()
		const filepath=`images/${id}${ext}`
		Image.create({filepath})
		.then(()=>{
			cb(null,filepath)}
			)	
	}
})

app.get('/images',(req,res)=>{
	Image.find()
	.then((images)=>{
		return res.json({status:'OK',images})
	})
	
})

const upload=multer({storage})
app.post('/upload',upload.array('avatar'),(req,res)=>{
	return res.json({status:req.files.length})
})


app.listen(3000,function(){
	console.log('started')
})


