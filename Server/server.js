const express = require('express'); // Importiere das Express-Framework.
const mongoose = require('mongoose');  // Importiere das Body-Parser-Modul für die Verarbeitung von Anfragedaten.
const bodyParser = require('body-parser'); // Importiere das Body-Parser-Modul für die Verarbeitung von Anfragedaten.
const Place = require('./Models/place') // Importiere Datenbankmodelle für Orte und Ort-Daten.
const Ort = require('./Models/ortdaten')
const db = require("./db"); // Importiere die Verbindung zur MongoDB-Datenbank.
const cors = require('cors'); //  Importiere das CORS-Modul, um Anfragen von verschiedenen Domänen zu ermöglichen.

const app = express(); // Erstellen eine Express-Anwendung.
const port = 8080; // Setzen den Server-Port auf 8080.

app.use(cors()); // Aktivieren CORS für die Anwendung.
app.use(bodyParser.json()); // Verwenden Body-Parser für JSON-Anfragen.

// Aktiviert Body-Parser für JSON- und URL-kodierte Daten. Body Parser Middleware (für POST-Anfragen)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//  Handlen Fehler in der MongoDB-Verbindung.
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get('/', (req, res) => {
    res.send('Hello from everywhere');   //  Definiert eine Route für die Wurzel-URL, die "Hello from everywhere" als Antwort sendet.
});

app.post('/add', (req, res) => {    //  Definieren eine Route zum Hinzufügen von Ortsdaten zur Datenbank.
    Place.create ({
        city: req.body.city,
        country : req.body.country,
        reminder: req.body.reminder,
        note:  req.body. note,
        visit: req.body.visit
    }).then((newplace)=>{res.send(newplace)})

    .catch(err => res.send(err))
});


app.post('/ortdaten', (req, res) => { //  Definieren eine Route zum Hinzufügen von Ort-Daten zur Datenbank.
    Ort.create ({
        zipCode: req.body.zipCode,
        street : req.body.street,
    }).then((newdaten)=>{res.send(newdaten)}) // Funktion wird aufgerufen, um das Ergebnis anzuzeigen
                                    
        .catch(err => res.send(err))           // Funktion wird aufgerufen, um den Fehler anzuzeigen.
});


// Definieren eine Route zum Abrufen aller Orte aus der Datenbank.
app.get('/allplaces', async (req, res) => {  
    const allplaces = await Place.find({})
    .catch((err) => res.status(500).send("Server Error"));
    res.status(200).json(allplaces);
})


//  Definieren eine Route zum Löschen eines Ortes anhand seiner ID.
app.delete('/delete/:id', async (req, res) => {
try {
    const place = await Place.findOneAndDelete({ _id: req.params.id });

    if (!place) {
    return res.status(404).json({ success: false, error: `Place not found` });
    }

    return res.status(200).json({ success: true, data: place });
} catch (err) {
    return res.status(400).json({ success: false, error: err.message });
}
});

//  Starten den Server und lasse ihn auf dem angegebenen Port laufen.
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
4