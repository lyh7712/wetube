import express from 'express';
import { edit, see, upload, remove } from '../controller/videoController';

const videoRouter = express.Router();

videoRouter.get('/upload', upload);
videoRouter.get('/:id(\\d+)', see);
videoRouter.get('/edit/:id(\\d+)', edit);
videoRouter.get('/delete/:id(\\d+)', remove);

export default videoRouter;
