const {
    CartListService,
    saveCartListService,
    updateCartListService,
    removeCartListService
} = require("../services/CartListServices");
exports.CartList = async (req, res) => {
    let result = await CartListService(req);
    res.json(result);
}
exports.SaveCartList = async (req, res) => {
    let result = await saveCartListService(req);
    res.json(result);
}
exports.UpdateCartList = async (req, res) => {
    let result = await updateCartListService(req);
    res.json(result);
}
exports.RemoveCartList = async (req, res) => {
    let result = await removeCartListService(req);
    res.json(result);
}