var express = require('express');
const KidToyModel = require('../models/KidtoyModel');
var router = express.Router();

/* GET users listing. */

router.get('/', (req, res) => {
    KidToyModel.find((err, data) => {
        if (!err) {
            res.render('kidtoy/index', { KidToys: data })
        }
    })
})
router.get('/delete/:id', (req, res) => {
    KidToyModel.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Delete Kidtoy succeed !");
            res.redirect("/kidtoy");
        }
    })
})

//render ra form ADD
router.get('/add', (req, res) => {
    res.render("kidtoy/add");
})
//nhận & xử lý dữ liệu từ form ADD
router.post('/add', (req, res) => {
    KidToyModel.create(req.body, (err) => {
        if (!err) {
            console.log('Add Kidtoy succeed !')
            res.redirect("/kidtoy")
        }
    })
})

//render ra form EDIT
router.get('/detail/:id', (req, res) => {
    KidToyModel.findById(req.params.id, (err, Kidtoy) => {
        if (!err) {
            res.render('kidtoy/info', { Kidtoy: Kidtoy })
        }
    })
})



module.exports = router;