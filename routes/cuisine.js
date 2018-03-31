import { Router } from 'express';

import Cuisine from '../models/Cuisine';

const router = Router();

router.get('/', (req, res) => {
  Cuisine.find((err, items) => {
    err ? res.send(err) : res.json(items)
  });
});

router.post('/add', (req, res) => {
  const newItem = new Cuisine(req.body);

  newItem.save((err, item) => {
    err ? res.send(err) : res.redirect('http://localhost:8080/#/appart/cuisine');
  });
});

router.get('/delete/:id', (req, res) => {
  Cuisine.findByIdAndRemove(req.params.id, (err, item) => {
    err ? res.send(err) : res.json(`${item.name} supprimé!`)
  });
});

router.post('/update/:id', (req, res) => {
  Cuisine.findByIdAndUpdate(req.params.id, req.body, (err, item) => {
    item.checked = !item.checked;
    item.save(err => { if (err) res.send(err) });
    err ? res.send(err) : res.json(item);
  });
});

export default router;