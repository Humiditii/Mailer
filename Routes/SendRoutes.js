import { Router } from 'express';
import SenderController from '../Controllers/SenderController';

const baseRouter = Router();
const senderRouter = Router();

senderRouter.post('/to_one',  SenderController.sendToOne);
senderRouter.post('/to_many',  SenderController.sendToMany);


baseRouter.use('/send', senderRouter);

export default baseRouter;