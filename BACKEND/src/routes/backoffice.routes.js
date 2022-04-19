import { Router } from 'express';
const router = Router();
import * as boCtrl from '../controllers/backoffice.controller';

router.get('/', boCtrl.render);
router.post('/', boCtrl.login);
router.get('/logout', boCtrl.logout);

export default router;
