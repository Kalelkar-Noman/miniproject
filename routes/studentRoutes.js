const express = require('express');
const router = express.Router();

router.get("/register",(req,res)=>{
   return res.render("register");
})

// POST route to handle user registration
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log('Received:', username, email, password);
        // Example: Save to database or perform other operations
        res.send('Form submitted successfully');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error submitting form');
    }
});



module.exports = router