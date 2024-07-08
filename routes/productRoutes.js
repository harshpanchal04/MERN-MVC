const express = require("express");
//using a complete router for routing product,user etc is not recomended so we have routes for that.
const router = require("express").Router()
const productControllers = require("../controllers/productControllers")


//create
router.post('/',productControllers.createProduct)

router.post('/user',productControllers.createUser)

router.get('/',productControllers.getAllProducts)

router.get('/:id',productControllers.getById)

router.put('/:id',productControllers.UpdateProduct)

router.delete('/:id', productControllers.deleteProduct)

module.exports = router