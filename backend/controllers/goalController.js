const asyncHandler = require('express-async-handler')
const Goal = require("../model/goalModel")

//@desc get goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

//@desc set goals
//@route POST /api/goals
//@access Private
const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        // return res.status(400).json({data: "add text in body"}) //soluzione mia con return
        res.status(400)
        throw new Error("add text in body") //restituisce l'errore in html per ricevere un json fare middleware 
    }
    const goal = await Goal.create({ text: req.body.text })
    res.status(200).json(goal)
})

//@desc update Goals
//@route PUT/PATCH /api/goals/:id
//@access Private
const updateGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        throw new Error("add text in body")
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new : true})
    res.status(200).json(updatedGoal)
})
//@desc cancel goals
//@route DELETE /api/goals/:id
//@access Private
const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        throw new Error("add text in body")
    }
    await goal.remove()
    res.status(200).json({id:req.params.id}) //porta in FE solo ID dell'elemento eliminato - nella versione sotto (MIA) porto tutto l'elemento eliminato
})

// ALTERNATIVA FATTA DA ME
// const deleteGoals = asyncHandler(async (req, res) => {
//     const goal = await Goal.findById(req.params.id)
//     if(!goal) {
//         throw new Error("add text in body")
//     }
//     const deletedGoal = await Goal.findByIdAndDelete(req.params.id, req.body)
//     res.status(200).json(deletedGoal)
// })




module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}