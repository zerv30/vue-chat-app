const express = require('express')
let router = express.Router();
const Room  = require('./../model/Room')
const mongoose = require('mongoose')

router.post('/',function(req,res){
    let name = req.body.name;
    let participants = req.body.participants
    // console.log(req.body)
    let room = new Room({
        _id:new mongoose.Types.ObjectId(),
        name: name,
        participants:participants,
        messages:[]
    })
    room.save()/*.then((result)=>{
        console.log(result)
    })*/
    res.status(202).json({
        message:'Successfully created a new chatroom'

    })
})



//might change this to a patch request later
router.put('/',function(req,res) {
    let name = req.body.name;
    // let participants = req.body.participants
    // let _id = 
    let update = req.body
    /*
    $set to update all fields in mongodb
    */
   let userId = mongoose.Types.ObjectId(req.body._id)
    Room.findOneAndUpdate({_id:_id},update,{useFindAndModify:false},(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.status(202).json({
                message:'chat has been updated'
            })
        }

    })
})


router.get('/',(req,res)=>{
    let userId =mongoose.Types.ObjectId(req.body._id)
    Room.find({},(error, result)=>{
        let chats = [];
        result.forEach(element => {
            if(element.participants.includes(userId)){
                chats.push(element)
            }

        });
        res.status(202).json({
            chats
        })
    })

})


router.delete('/:id',(req,res)=>{
    let chatId = req.params.id
    Room.findOneAndDelete({_id:chatId},{useFindAndModify:false},(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.status(202).json({
                message:'chat has been deleted'
            })
        }
    })

})
module.exports = router