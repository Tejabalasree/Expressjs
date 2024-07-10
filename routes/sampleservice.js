//es7 style
import express from 'express';
const router = express.Router();

//restfull logic
router.get("/rest/getDetails",(req,res) => {
    res.end("welcome to flipkart services!!!!");
})

export default router;



