const {saveWishListService, removeWishListService, WishListService} = require("../services/WishListServices");

exports.WishList = async (req, res) => {
    let result = await WishListService(req);
    res.json(result);
}
exports.SaveWishList = async (req, res) => {
    let result = await saveWishListService(req);
    res.json(result);
}
exports.RemoveWishList = async (req, res) => {
    let result = await removeWishListService(req);
    res.json(result);
}