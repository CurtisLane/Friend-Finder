const friendsData = require('../data/friendsData.js')

module.exports = function(app){
    app.get('/api/friendsData', function(req,res){
        res.json(friendsData)
    })

    app.post('/api/friendsData', function(req, res){
        friendsData.push(req.body);
        res.json(friendsData)
    })
}