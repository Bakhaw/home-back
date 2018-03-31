import { Router } from 'express';

import Chambre from '../models/Chambre';

const router = Router();

router.get('/', (req, res) => {
  Chambre.find((err, items) => {
    err ? res.send(err) : res.json(items)
  });
});

router.post('/add', (req, res) => {
  const newItem = new Chambre(req.body);

  newItem.save((err, item) => {
    err ? res.send(err) : res.redirect('http://localhost:8080/#/appart/chambre');
  });
});

router.get('/delete/:id', (req, res) => {
  Chambre.findByIdAndRemove(req.params.id, (err, item) => {
    err ? res.send(err) : res.json(`${item.name} supprimé!`)
  });
});

router.post('/update/:id', (req, res) => {
  Chambre.findByIdAndUpdate(req.params.id, req.body, (err, item) => {
    item.checked = !item.checked;
    item.save(err => { if (err) res.send(err) });
    err ? res.send(err) : res.json(item);
  });
});

export default router;