const checkSignupFormate=(req,res,next)=>{
    console.log("hello friends")
    const {name,email,password,cpassword}=req.body;
    if(password!=cpassword)
    {
        return res.send("password not matching")
    }
    if(password.length<6)
    {
        return res.send("password must be atleast 6 chars")
    }
    if(name.length<2)
    {
        return res.send("pls enter valid name")
    }
    if(!email.includes("@"))
    {
        return res.send("email must contains @")
    }
    next();
}

module.exports={checkSignupFormate}