import { Router } from 'express';

import Entree from '../models/Entree';

const router = Router();

router.get('/', (req, res) => {
  Entree.find((err, items) => {
    err ? res.send(err) : res.json(items)
  });
});

router.post('/add', (req, res) => {
  const newItem = new Entree(req.body);
  console.log(req.body);
  newItem.save((err, item) => {
    err ? res.send(err) : res.redirect('http://localhost:8080/#/appart/entree')
  });
});

router.get('/delete/:id', (req, res) => {
  Entree.findByIdAndRemove(req.params.id, (err, item) => {
    err ? res.send(err) : res.json(`${item.name} supprimé!`)
  });
});

router.post('/update/:id', (req, res) => {
  Entree.findByIdAndUpdate(req.params.id, req.body, (err, item) => {
    item.checked = !item.checked;
    item.save(err => { if (err) res.send(err) });
    err ? res.send(err) : res.json(item);
  });
});

export default router;