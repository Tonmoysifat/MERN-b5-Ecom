const {userOTPService, verifyOTPService, saveProfileService, readProfileService} = require("../services/UserServices");


exports.UserOTP = async (req, res) => {
    let result = await userOTPService(req);
    res.json(result);
}
exports.VerifyLogin = async (req, res) => {
    let result = await verifyOTPService(req);
    if (result["status"] === "Success") {
        let cookieOptions = {
            expires: new Date(Date.now() + 480 * 60*60 * 1000),
            httponly: false
        }
        res.cookie("token",result["token"],cookieOptions)
        res.json(result);
    }
    else{
        res.json(result);
    }

}
exports.UserLogout = (req,res)=>{
    let cookieOptions = {
        expires: new Date(Date.now() - 480 * 60*60 * 1000),
        httponly: false
    }
    res.cookie("token","",cookieOptions)
    res.json({status: "Success", message: "Logout Successfully"});
}
exports.CreateProfile = async (req, res) => {
    let result = await saveProfileService(req);
    res.json(result);
}
exports.UpdateProfile = async (req, res) => {
    let result = await saveProfileService(req);
    res.json(result);
}
exports.ReadProfile = async (req, res) => {
    let result = await readProfileService(req);
    res.json(result);
}