import express from 'express';
import morgan from 'morgan';
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';

const PORT = 4000;

const app = express(); // express 생성
const loggerMiddleware = morgan('dev');

app.use(loggerMiddleware); // middleware 사용

app.use('/', globalRouter); // Router 사용
app.use('/users', userRouter);
app.use('/videos', videoRouter);

const handleListening = () => console.log(`Server listeting on port ${PORT}`);

app.listen(PORT, handleListening);
