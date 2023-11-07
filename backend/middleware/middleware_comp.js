const authenticate = (req,res,next)=>{
    const data = 14;
    if(data<=26){
        console.log("middleWare verify data")
        next();
    }
}
module.exports = authenticate