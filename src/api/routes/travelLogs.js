import express from 'express';
import Travel from '../model/travelModel.js';


const router = express.Router();

//get request
router.get("/", async(req,res,next) => {
try {
    const logEntries = await Travel.find()
    res.status(200).json(logEntries);
} catch (error) {
    next(error)
}
});



//post request
router.post("/", async(req,res,next) => {
    try {
    const TravelEntry = Travel.create({...req.body})
    res.status(200).json(Entry)
    } catch (error) {
      next(error)  
    }
    });

export default router





