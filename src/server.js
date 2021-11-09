import express from 'express';

const app = express(); // express 생성

const PORT = 4003;

app.get('/', () => 'Somebody come Home'); // GET 요청시 이벤트

const handleListening = () => console.log(`Server listeting on port ${PORT}`);

app.listen(PORT, handleListening);
