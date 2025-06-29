const express = require('express');
const router = express.Router();

const teachers = [
    "isha",
    "poonam",
    "honey"
];

router.get('/',(req,res,next)=>{
    res.send(teachers);
})

router.post('/add' , (req,res,next)=>{
    const{name} = req.body;
    teachers.push(name);
    res.redirect('/teacher');
})




module.exports = router;
