const express = require('express')
const router = express.Router()

//bring the module 

const Categorie = require ('../../models/Categories')
// @route   GET api/categories
// @desc    get all categories
// @acess   public 


router.get('/', async (req,res)=>{
  try {
      const categorie = await Categorie.find({} , (err ,data ) => {
        if (err) console.log('problem')
        res.json(data)
      })
 
  } catch (err) {
      console.error(err.message)
      console.log('server error ')
  }
})

router.post('/add',async (req,res)=>{ 
    try {


        const newCat= new Categorie ({
        catName :"karim",
        catImg :"karim",
        CatDesc : "salut"
        })

        const cat= await newCat.save()

        res.json(cat)
        console.log('here4')

    } catch (err) {
        console.error(err.message)
        res.status(500).send('ServerError')
    }

   
                  
}

);
module.exports=router;