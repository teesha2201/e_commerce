// const { default: MoreDetails } = require("../../frontend/files/src/Component/MoreDetails");
const {homeController,allController,groceryController,fashionController,beautyProductController,electronicsController,mensController} = require("../controller/controller_compo");

const routing = require("express").Router();

routing.get("/home",homeController);
routing.get("/all",allController);
routing.get("/grocery",groceryController);
routing.get("/fashion",fashionController);
routing.get("/fashion/men",mensController);
routing.get("/beautyproduct",beautyProductController);
routing.get("/electronics",electronicsController);

// routing.get("/moredetails",MoreDetails);


module.exports = routing