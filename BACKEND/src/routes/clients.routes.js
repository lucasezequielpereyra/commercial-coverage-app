import { Router } from 'express';
import multer from 'multer';
import * as clientsCtrl from '../controllers/clients.controller';
import * as jwtCtrl from '../middlewares/authJwt';

const upload = multer({ dest: 'uploads/' });
const router = Router();

router.get('/getAll', clientsCtrl.getAll);

router.get(
  '/getByCliente/:cliente',
  [jwtCtrl.verifyToken, jwtCtrl.isComer],
  clientsCtrl.getByCliente,
);

router.get(
  '/getByZona/:zona',
  [jwtCtrl.verifyToken, jwtCtrl.isEjecutivo],
  clientsCtrl.getByZona,
);

router.post(
  '/newFile',
  [upload.single('file'), jwtCtrl.verifyToken, jwtCtrl.isBackoffice],
  clientsCtrl.newFile,
);

export default router;
