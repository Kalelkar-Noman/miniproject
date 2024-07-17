const express = require("express");
const router = express.Router();

router.route("/register").get((req, res) => {
  return res.render("register");
});

// POST route to handle user registration
router.route("/register").post((req, res) => {
  try {
    console.log(req.body);
    const { username, email, password } = req.body;
    if ([email, username, password].some((field) => field?.trim() === "")) {
      throw new res.status(500).send("All fields are required");
    }

    console.log("Received:", username, email, password);
    // Example: Save to database or perform other operations
    res.send("Form submitted successfully");
  } catch (error) {
    // console.error("Error:", error);
    res.status(500).send("Error submitting form");
  }
});

module.exports = router;
