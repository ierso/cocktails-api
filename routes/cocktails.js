import express from 'express';
import requireLogin from '../helpers/requireLogin';
const router = express.Router();
import Cocktail from '../models/cocktail';

// get all
router.get('/', requireLogin, (req, res) => {
    //grab all of the objects in db
    Cocktail.find({ user: req.user.id })
        .sort({date: 'desc'})
        .then(cocktails => {
            res.send(cocktails)
        })
})

// delete
router.delete('/:id', (req, res) => {
    Cocktail.remove({_id: req.params.id})
        .then(() => {
            res.send({ message: "Deleted" });
        });
})

// post
router.post('/', requireLogin, ( req, res) => {
    const { name, drinkID, rating, user } = req.body;
    const newCocktail = {
        name: name,
        drinkID: drinkID,
        rating: rating,
        user: req.user._id
    }
    new Cocktail(newCocktail)
        .save()
        .then(cocktail => {
            res.send(cocktail);
        })
});

// update
router.put('/:id', (req, res) => {
    Cocktail.findById(req.params.id)
        .then((cocktail) => {
            const { name, drinkID, rating, date, user } = req.body;
            cocktail.name = name || cocktail.name;
            cocktail.drinkID = drinkID || cocktail.drinkID;
            cocktail.rating = rating || cocktail.rating;
            cocktail.user = user || cocktail.user;
            cocktail.date = Date.now();
            cocktail.save()
            .then((cocktail, err) => {
                if (err) {
                    res.status(500).send(err);
                } 
                res.status(200).send(cocktail);
            })
        })
});

export default router;