const {
    BrandListService, CategoryListService, SliderListService, ListByBrandService, ListByCategoryService,
    ListByRemarkService, ListBySmilierService, ListByKeywordService, DetailsService, ListByFilterService,
    saveReviewListService, ReviewListService
} = require("../services/ProductServices");

exports.ProductBrandList = async (req, res) => {
    let result = await BrandListService();
    res.json(result);
}
exports.ProductCategoryList = async (req, res) => {
    let result = await CategoryListService();
    res.json(result);
}
exports.ProductSliderList = async (req, res) => {
    let result = await SliderListService();
    res.json(result);
}
exports.ProductListByBrand = async (req, res) => {
    let result = await ListByBrandService(req);
    res.json(result);
}
exports.ProductListByCategory = async (req, res) => {
    let result = await ListByCategoryService(req);
    res.json(result);
}
exports.ProductListBySmilier = async (req, res) => {
    let result = await ListBySmilierService(req);
    res.json(result);
}
exports.ProductListByKeyword = async (req, res) => {
    let result = await ListByKeywordService(req);
    res.json(result);
}
exports.ProductListByRemark = async (req, res) => {
    let result = await ListByRemarkService(req);
    res.json(result);
}
exports.ProductListByFilter = async (req, res) => {
    let result = await ListByFilterService(req);
    res.json(result);
}
exports.ProductDetails = async (req, res) => {
    let result = await DetailsService(req);
    res.json(result);
}
exports.ProductReviewList = async (req, res) => {
    let result = await ReviewListService(req);
    res.json(result);
}
exports.CreateReview = async (req, res) => {
    let result = await saveReviewListService(req);
    res.json(result);
}