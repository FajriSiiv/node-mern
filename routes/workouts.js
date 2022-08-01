const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getSWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/controllers");

const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// GET single workout
router.get("/:id", getSWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE workout
router.delete("/:id", deleteWorkout);

// UPDATE workout (pacth)
router.patch("/:id", updateWorkout);

module.exports = router;
