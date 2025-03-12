import express from "express";

const PORT = 3000

const server = () => {
    const app = express();


    app.listen(PORT, () => console.log(`Server is running PORT: ${PORT}`))
};


server();