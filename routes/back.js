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


    app.post("/api/post", async (req, res)=>{
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

    app.put("/edit/:id", (req, res)=>{
        console.log(req.body)
        console.log(req.params.id)
        db.Workout.update(
            {name: req.body.name,
            type: req.body.type,
            wight: req.body.weight,
            sets: req.body.sets,
            reps: req.body.reps,
            duration: req.body.duration,
            distance: req.body.Distance},{
            where: {
                id: req.params.id
            } 
        }).then(data => {
            res.json(data)
        })
    })

    
}