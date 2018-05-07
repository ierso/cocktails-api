import express from 'express';
const router = express.Router();

// load idea model
import Idea from '../models/idea';

// idea index
router.get('/', (req, res) => {
    //grab all of the objects in db
    
    Idea.find({})
        .sort({date: 'desc'})
        .then(ideas => {
            res.render('ideas/index', {
                ideas: ideas
            })
        })
    
    // send json 
    // Idea.find({})
    //     .sort({date: 'desc'})
    //     .then(ideas => {
    //         res.send(ideas)
    //     })
})

router.get('/add', ( req, res ) => {
	res.render('ideas/add');
})

// delete 
router.delete('/:id', (req, res) => {
    Idea.remove({_id: req.params.id})
        .then(() => {
            res.redirect('/');
        });
})

// process form 
router.post('/', ( req, res) => {
    let errors = [];
    if (!req.body.title) {
        errors.push({text: 'Please add a title'})
    }
    if (!req.body.details) {
        errors.push({text: 'Please add a title'})
    }
    if (errors.length > 0) {
        res.render('ideas/add', {
            errors: errors,
            title: req.body.title,
            details: req.body.details,
        });
    } else {
        console.log(req.user)
        const newIdea = {
            title: req.body.title,
            details: req.body.details,
        }
        new Idea(newIdea)
            .save()
            .then(idea => {
                res.redirect('/ideas');
            })
    }
});

export default router;