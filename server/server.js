const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(apiRoutes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/tutorbuzz",
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);

app.listen(PORT, () => {
    console.log("API server now listening on PORT " + PORT);
})