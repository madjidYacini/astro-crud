import { Router } from 'express';
import { AstroController } from '../controller/astro.controller';

const api = Router();
const astro = new AstroController();
// CRUD
api.get('/', astro.getAll);
api.get('/:id', astro.getOne);
api.post('/', astro.createOne);
// router.put('/:id', controller.updateOne);
api.delete('/:id', astro.deleteOne);

export default api;