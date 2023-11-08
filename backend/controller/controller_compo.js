const  {home,all,grocery,fashion,beautyProduct,electronics,mac} = require("../dummydata");

const homeController = (req,res)=>{
    res.send(home)
}
const allController = (req,res)=>{
    res.send(all)
}
const groceryController = (req,res)=>{
    res.send(grocery)
}
const fashionController = (req,res)=>{
    res.send(fashion)
}
const mensController = (req,res) =>{
    res.send(fashion)
}
const beautyProductController = (req,res)=>{
    res.send(beautyProduct)
}
const electronicsController = (req,res)=>{
    res.send(electronics)
}
const MoreDetails = (req,res) =>{
    res.send(mac)
}

module.exports ={homeController,allController,groceryController,fashionController,beautyProductController,electronicsController,MoreDetails,
     mensController

}