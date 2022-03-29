import { Router } from 'express';
import multer from 'multer';
import * as clientsController from '../controllers/clients.controller';

const upload = multer({ dest: 'uploads/' });
const router = Router();

router.get('/getAll', clientsController.getAll);

router.get('/getByCliente/:cliente', clientsController.getByCliente);

router.get('/getByZona/:zona', clientsController.getByZona);

router.post('/newFile', upload.single('file'), clientsController.newFile);

export default router;
