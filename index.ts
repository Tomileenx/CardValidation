// import express
import express from 'express';
import router from './route/cardValidationRoutes.js';

// create express app
const app = express();

// middleware accepting JSON
app.use(express.json());

// mount router
app.use("/api/", router);

// port number
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})