import { Router } from 'express';

import Salon from '../models/Salon';

const router = Router();

router.get('/', (req, res) => {
  Salon.find((err, items) => {
    err ? res.send(err) : res.json(items)
  });
});

router.post('/add', (req, res) => {
  const newItem = new Salon(req.body);

  newItem.save((err, item) => {
    err ? res.send(err) : res.redirect('http://localhost:8080/#/appart/salon');
  });
});

router.get('/delete/:id', (req, res) => {
  Salon.findByIdAndRemove(req.params.id, (err, item) => {
    err ? res.send(err) : res.json(`${item.name} supprimé!`)
  });
});

router.post('/update/:id', (req, res) => {
  Salon.findByIdAndUpdate(req.params.id, req.body, (err, item) => {
    item.checked = !item.checked;
    item.save(err => { if (err) res.send(err) });
    err ? res.send(err) : res.json(item);
  });
});

export default router;