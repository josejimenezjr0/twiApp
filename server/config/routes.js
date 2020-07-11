const faction = require('../controllers/factions.js')
var path = require("path");



module.exports = function(app){

    app.get("/factions", faction.index);

    app.get("/factions/:id", faction.findFaction);

    app.all("*",(req,res,next)=> {
        console.log('Monkey')
        res.sendFile(path.resolve("./dist/index.html"))
    });

}