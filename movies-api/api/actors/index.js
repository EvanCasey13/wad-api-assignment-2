import express from 'express';
import uniqid from 'uniqid'
import actorModel from './actorModel';
import asyncHandler from 'express-async-handler';
import { actors } from './actorsData';

const router = express.Router(); 

// Get all actors
router.get('/', asyncHandler(async (req, res) => {
    const actors = await actorModel.find();
    res.status(200).json(actors);
}));

export default router;