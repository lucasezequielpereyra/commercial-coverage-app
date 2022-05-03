import { Router } from 'express';
import multer from 'multer';
import * as clientsCtrl from '../controllers/clients.controller';
import * as jwtCtrl from '../middlewares/authJwt';

const upload = multer({ dest: 'uploads/' });
const router = Router();

router.get('/getCoveragesKeys', clientsCtrl.getCoveragesKeys);

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
  '/getKofreCoveragesByClient/:client',
  [jwtCtrl.verifyToken, jwtCtrl.isComer],
  clientsCtrl.getKofreCoveragesByClient,
);

router.get(
  '/getIceCoveragesByClient/:client',
  [jwtCtrl.verifyToken, jwtCtrl.isComer],
  clientsCtrl.getIceCoveragesByClient,
);

router.get(
  '/getSalarialCoveragesByClient/:client',
  [jwtCtrl.verifyToken, jwtCtrl.isComer],
  clientsCtrl.getSalarialCoveragesByClient,
);

router.post(
  '/newFile',
  [upload.single('file'), jwtCtrl.verifyToken, jwtCtrl.isBackoffice],
  clientsCtrl.newFile,
);

export default router;
