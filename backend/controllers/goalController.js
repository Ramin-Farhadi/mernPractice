const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");
// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

// @desc set goals
// @route POST /api/goals
// @access Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }

  res.status(200).json({
    messege: "set goals",
  });
});
// @desc update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.status(200).json({
    messege: `update goal ${req.params.id}`,
  });
});
// @desc delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) =>
  res.status(200).json({
    messege: `delete goal ${req.params.id}`,
  })
);

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
};
