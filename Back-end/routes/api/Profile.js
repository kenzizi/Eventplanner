const express = require ('express')
const router = express.Router()
const auth = require('../../middleware/auth')

//Profile module 
const Profile= require ('../../models/user')


// @route   GET api/profiles
// @desc    get all profiles
// @acess   private 


router.get('/', auth,async (req,res)=>{
    try {
        const profile = await Profile.find({} , (err ,data ) => {
          if (err) console.log('problem')
          res.json(data)
        })
   
    } catch (err) {
        console.error(err.message)
        console.log('server error ')
    }
  })
  
// @route   POST api/profiles
// @desc    update profile
// @acess   private 
  router.put('/updateprofile',async (req,res)=>{ 
      try {
            const profile = Profile.findOneAndUpdate({_id :req.body.id})
      } catch (err) {
          console.error(err.message)
          res.status(500).send('ServerError')
      }
  
     
                    
  }
  
  );

  module.exports = router;