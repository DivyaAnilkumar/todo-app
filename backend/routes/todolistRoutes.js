const express = require('express');
const router = express.Router();
const listModel = require('../models/todolist');



router.post('/add', async(req,res)=>{
    try{
    
   
        var item = req.body;
        const data1 = new  listModel(item);
        const list = await data1.save();
        res.status(200).send('post successful');
    }
    catch(error){
        res.status(404).send('post unsuccessful');
    }
}

);

    // catch((error)=>{
    //     res.status(404).send('post unsuccessful');
    // });

router.get('/list',async(req,res)=>{
    try{
        var item = listModel.find();
        const data = await item;
        res.status(200).send(data);
    }
    catch (error) {
        console.log(error);
        res.status(404).send(error);
    }
});
router.delete('/delete/:_id', async(req,res)=>{
    try{
        var id = req.params._id;
        const data = await listModel.findByIdAndDelete(id);
        res.status(200).send('delete successful');
    }catch (error){
        res.status(404).send('delete unsuccessful');
    }

})
module.exports = router;

