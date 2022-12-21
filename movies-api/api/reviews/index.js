import express from 'express';
import uniqid from 'uniqid'
import reviewModel from './reviewModel';
import asyncHandler from 'express-async-handler';
import movieModel from '../movies/movieModel';

const router = express.Router(); 

// Get movie reviews
router.get('/movie/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);
    // find reviews in list
    if (id) {
        res.status(200).json();
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

//Post a movie review
router.post('/:username/movie/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);
    if (id) {
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        req.body.id = uniqid();  
        reviewModel.create(req.body);
        res.status(201).json(req.body);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});


export default router;