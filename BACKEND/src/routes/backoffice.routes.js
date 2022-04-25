import { Router } from 'express';
const router = Router();
import * as boCtrl from '../controllers/backoffice.controller';
import * as jwtCtrl from '../middlewares/authJwt';

router.get('/', boCtrl.render);
router.post('/', [jwtCtrl.isBackoffice], boCtrl.login);
router.get('/logout', boCtrl.logout);
router.get('/uploaded', boCtrl.uploaded);
router.get('/uploaded-error', boCtrl.errorUploaded);

export default router;
