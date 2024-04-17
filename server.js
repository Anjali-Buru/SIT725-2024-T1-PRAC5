const express = require("express");
const cardsRouter = require("./routers/cardsRouter");
const connectDB = require("./db/connection");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/cards', cardsRouter);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
