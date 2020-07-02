const path = require('path');

module.exports = function(app){

    // HTML Routes
    
    app.get('/images/:image', function(req,res){
        let image = req.params.image
        res.sendFile(path.join(__dirname, "../../images/" + image))
    })

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}
