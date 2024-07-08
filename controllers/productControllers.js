const productModel = require('../models/product')
const UserModel = require('../models/user')

exports.createProduct= async(req,res)=>{
    await productModel.create({
       product_name : req.body.product_name,
       product_price : req.body.product_price,
       isInStock : req.body.isInStock,
       category : req.body.category
   })
   // console.log(product);
   return res.status(201).json({message: "ProductCreated"});
}

exports.createUser = async(req,res) =>{
   await UserModel.create({
      username : req.body.username,
      email : req.body.email,
      password: req.body.password
   })

   return res.status(201).json({message:"UserCreated"});

}

exports.getAllProducts= async(req,res)=>{
    const allProducts = await productModel.find({});
    // const product = await productModel.findById(req.params.id);
 
    return res.json(allProducts);
    // return res.json(product);
 }

 exports.getById = async(req,res)=>{
    // const allProducts = await productModel.find();
    const product = await productModel.findById(req.params.id);
 
    // return res.json(allProducts);
    return res.json(product);
 }


 exports.UpdateProduct = async(req,res)=>{
    const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body)
        return res.json(updatedProduct);
 }


 exports.deleteProduct = async(req,res)=>{
    const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
 
    return res.json(deletedProduct);
 }