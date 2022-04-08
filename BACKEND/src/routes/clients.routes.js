import { Router } from 'express';
import multer from 'multer';
import * as clientsCtrl from '../controllers/clients.controller';
import * as jwtCtrl from '../middlewares/authJwt';

const upload = multer({ dest: 'uploads/' });
const router = Router();

router.get('/getAll', clientsCtrl.getAll);

router.get(
  '/getByClient/:client',
  [jwtCtrl.verifyToken, jwtCtrl.isComer],
  clientsCtrl.getCustomDataByClient,
);

router.get(
  '/getCoveragesByClient/:client',
  [jwtCtrl.verifyToken, jwtCtrl.isComer],
  clientsCtrl.getCoveragesByClient,
);

router.get(
  '/getByZone/:zone',
  [jwtCtrl.verifyToken, jwtCtrl.isEjecutivo],
  clientsCtrl.getByZone,
);

router.post('/newFile', [upload.single('file')], clientsCtrl.newFile);

export default router;
