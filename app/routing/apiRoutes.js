const friendsData = require('../data/friendsData.js')

module.exports = function(app){
    app.get('/api/friends', function(req,res){
        res.json(friendsData)
    })

    app.post('/api/friends', function(req, res){
        let userData = req.body
        let friendMatch = {
            name: '',
            photo: '',
            diff: 10000
        }

        let compare = friendsData.map(function(friend){
            let totalDiff = 0;
            for (let i = 0; i<friend.scores.length;i++){
                totalDiff += Math.abs(parseInt(userData.scores[i]) - parseInt(friend.scores[i]))   
            }
            if (totalDiff<= friendMatch.diff){
                friendMatch.name=friend.name;
                friendMatch.photo=friend.photo;
                friendMatch.diff=totalDiff;
            }
            
            return friendMatch
        })

        // friendsData.push(userData); // If we want to add the userData to our friendData array

        res.json(compare);
    })
}