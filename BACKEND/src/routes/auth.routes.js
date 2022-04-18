import { Router } from 'express';
const router = Router();

import * as authCtrl from '../controllers/auth.controller';

router.post('/signup', authCtrl.signUp);
router.post('/signin', authCtrl.signIn);
router.post('/web/login', authCtrl.signInWeb);

export default router;
