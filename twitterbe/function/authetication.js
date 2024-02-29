const  login=(req,res)=>{
    const {email,password}=req.body;
    res.send("login")
}
 const  signup=(req,res)=>{
    const {email,password,cpasword,name}=req.body;

    console.log(req.body)
    res.send("signup")
}
 const  logout=(req,res)=>{
    res.send("logout")
}
 const  forgatepassword=(req,res)=>{
    res.send("gorgate pwd")
}

module.exports={login,signup,logout, forgatepassword}