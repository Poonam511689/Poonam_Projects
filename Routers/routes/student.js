const express = require('express');
const router = express.Router();

const students = [
    "nisha",
    "poonam",
    "honey"
];

router.get('/',(req,res,next)=>{
    res.send(students);
})

router.post('/add' , (req,res,next)=>{
    const{name} = req.body;
    students.push(name);
    res.redirect('/student');
})






module.exports = router;
