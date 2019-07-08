const express = require('express')
const router = express.Router()
const gravatar = require ('gravatar')
const bcrypt = require ('bcryptjs')
const jwt = require ('jsonwebtoken')
const config = require ('config')
const auth = require('../../middleware/auth')

// look for documentation more later
const { check, validationResult} = require ('express-validator/check')

//bringing user model 
const User = require ('../../models/user')

// @route   POST api/users
//@desc     Register User
//@acess    Public
router.post('/',[
    check('name', 'name is Required')
        .not().isEmpty(),
    check('email', 'please include a valid email adress')
        .isEmail(),
    check('password', 'please enter password with min of 6  or more characters')
        .isLength({min:6}),
     check('lastname', 'last name is Required')
        .not().isEmpty(),
    check('dateOfbirth','your birth date is required')
        .not().isEmpty(),
    check('phoneNumber','Phone Number! required')
        .not().isEmpty(),
    check('gender','please choose gender')
        .not().isEmpty(),
],async ( req,res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }
  
    const {name,email,password,lastname,dateOfbirth,gender,phoneNumber} = req.body;
    try{

    //check if user exists send back error 
        let user = await User.findOne({email:email});
        if (user){
            return res.status(400).json({error: [{msg: 'User already exists'}]})
        }
     

    //get users gravatar
    const avatar = gravatar.url(email,{
        s: '200',
        r: 'pg',
        d: 'mm'
    })
    user = new User( {
        name,
        lastname,
        email,
        avatar,
        password,
        dateOfbirth,
        gender,
        phoneNumber,
        role,
    })

    //encrypt password 
    const salt = await bcrypt.genSalt(10); //roundes ,  more u have more secure 10 recommended 
    user.password = await bcrypt.hash(password,salt)

    await user.save()
    
//     res.send('user registred')

    //return json token

    const payload = {
        user : {
            id: user.id, //mongoose we use id mongo db we use _id 
            
        }
    }
    jwt.sign(
        payload,
        config.get('jwtSecret'),
        {expiresIn : 360000},
        (err,token) => {
            if (err) throw (err)
            res.json({token})
        }
        )


    }catch(err){
        console.log(error.message)
        res.status(500).send('server error')
    }
   

})



// @route   GET api/users
// @desc    get all users
// @acess   private 
router.get('/', auth,async (req,res)=>{
    try {
        const users = await User.find({} , (err ,data ) => {
          if (err) console.log('problem')
          res.json(data)
        })
   
    } catch (err) {
        console.error(err.message)
        console.log('server error ')
    }
  })


//@route DELETE api/users/:id
//@desc delete event
//@access Private
router.delete('/:id', auth , async (req,res)=>{
    try {
        const event=await User.findById(req.params.id)
        if(!event){
            return res.status(404).json({msg:'Event not found'})
        }
        //check user
        // if(event.user.toString() !== req.user.id){ //bechmayfasakh levent ken user ili habtou dsl karim 
        //     return res.status(401).json({msg:'User not authorized'});
        // }
        await event.remove()
        res.json({msg:'event removed'})
    } catch (err) {
        // console.error(err.message)
        // if(err.kind=== 'ObjectId'){
        //     return res.status(404).json({msg:'Event not found'})
        // }
        return res.status(500).send('ServerError')
    }
});


//@route Get api/users/:id
//@desc get user by ID
//@access public
router.get('/:id' , async (req,res)=>{
    try {
        const event=await User.findById(req.params.id) 
       if(!event){
           return res.status(404).json({msg:'Event not found'})
       }
        res.json(event)

    } catch (err) {
        // console.error(err.message)
        
        // if(err.kind=== 'ObjectId'){
        //     return res.status(404).json({msg:'Event not found'})
        // }

        return res.status(500).send('ServerError')
    }
});




module.exports=router;  