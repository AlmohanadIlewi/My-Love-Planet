/* Dieser Code stellt eine Verbindung zur MongoDB-Datenbank her und exportiert,
    die Datenbankverbindung für andere Teile der Anwendung*/
const mongoose = require("mongoose");
const DATABASE_URL = 'mongodb+srv://NomadNexus:xxxxx@my-love-planet.vco2jng.mongodb.net/World'
const mongoString = DATABASE_URL;
mongoose.connect(mongoString, {
useNewUrlParser: true,
useUnifiedTopology: true,
});
const dataBase = mongoose.connection;
dataBase.on("error", (error) => {
console.log(error);
});

dataBase.once("connected", () => {
console.log("Database Connected");
});

module.exports = dataBase;