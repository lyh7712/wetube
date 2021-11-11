import express from 'express';
import morgan from "morgan";

const app = express(); // express 생성
const loggerMiddleware = morgan("dev");

const PORT = 4000;

const handleHome = (req, res) => {
  return res.send('Hello Home');
};

const handleLogin = (req, res) => {
  res.send('Here Login');
};

app.use(loggerMiddleware);

app.get('/', handleHome); // GET 요청시 이벤트
app.get('/login', handleLogin);

const handleListening = () => console.log(`Server listeting on port ${PORT}`);

app.listen(PORT, handleListening);
