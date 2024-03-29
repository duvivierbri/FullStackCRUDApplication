const express = require('express');
const router = express.Router();
const models = require('../database/models');

router.get('/', (req, res, next) => {
    models.Campus.findAll()
    .then(campuses => {
        res.status(200)
        .json({
            message: "Success!",
            campuses
        });
    }).catch(err => {
        res.status(500)
        .json({
            message: "Error!",
            err,
        })
    })
})

router.get('/:id', (req, res, next) => {
    models.Campus.findByPk(req.params.id)
    .then(campus => {
        res.status(200)
        .json({
            message: "Success!",
            campus,
        });
    }).catch(err => {
        res.status(500)
        .json({
            message: "Error!",
            err,
        })
    })
})

router.post('/', (req, res, next) => {
    models.Campus.create({
        name: req.body.name,
        address: req.body.address,
        description: req.body.description,
        imgUrl: req.body.ImgUrl
    })
    .then(campus => {
        res.status(201)
        .json({
            message: "Success!",
            campus
        })
    })
    .catch(err => {
        res.status(400)
        .json({
            message: "Error!",
            err,
        })
    })
})

router.put('/:id', (req, res, next) => {
    models.Campus.findByPk(req.params.id)
    .then(campus => {
        campus.update({
            name: req.body.name,
            gpa: req.body.gpa
        });

        campus.save();

        res.status(200)
        .json({
            message: "Campus Updated!",
            campus
        })
    })
    .catch(err => {
        res.status(500)
        .json({
            message: "Can't Update!",
            err
        })
    })
})

router.delete('/:id', (req, res, next) => {
    models.Campus.findByPk(req.params.id)
    .then(campus => {
        campus.destroy();

        res.status(200)
        .json({
            message: "Campus Updated!",
            campus
        })
    })
    .catch(err => {
        res.status(500)
        console.log(err)
        .json({
            message: "Can't delete!",
            err
        })
    })
})

module.exports = router;