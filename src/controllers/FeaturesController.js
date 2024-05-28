const {FeaturesListService,LegalDetailsService} = require("../services/FeaturesServices");

exports.FeaturesList = async (req, res) => {
    let result = await FeaturesListService();
    res.json(result);
}
exports.LegalDetails = async (req, res) => {
    let result = await LegalDetailsService(req);
    res.json(result);
}