const router = require("express").Router();
const user = require("../model/user")

router.post("/",async(req, res)=>{
   const data = new user({
      email : req.body.email,
      phone: req.body.phone,
      time_register: new Date(),
      cart: new Array({})
   })
   try{
      const dataToSave = data.save();
      res.status(200).json(dataToSave);
   }catch(error){
      res.status(400).json({message:error.message})
   }
}) 

 
module.exports = router