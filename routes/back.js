const db = require("../models")

module.exports = function(app){
    app.get("/test/all", (req, res)=>{
        db.Workout.findAll().then(data=>{
            res.json(data)
        })
    })
    app.get("/get/:id", (req, res)=>{
        db.Workout.findOne({
            where: {
                id: req.params.id
            }
        }).then(data=>{
            console.log(data)
            res.json(data)
        })
    })


    app.post("/api/post", (req, res)=>{
        db.Workout.create(req.body).then(data=>{
            res.json(data)
        })
    })

    app.delete("/api/delete/:id", (req, res)=>{
        db.Workout.destroy({
            where: {
                id: req.params.id
            }
        }).then(data=>{
            res.json(data)
        })
    })

    
}