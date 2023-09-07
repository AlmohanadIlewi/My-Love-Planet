// Dieser Code definiert ein Mongoose-Schema und ein Mongoose-Modell für die Verwaltung von Ortsdaten in einer MongoDB-Datenbank. 
 /* dieser Code ermöglicht die Definition eines Mongoose-Modells für Orte, 
 das in anderen Teilen der Anwendung verwendet werden kann, 
 um Daten in der MongoDB-Datenbank zu speichern und abzurufen.*/ 

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ortSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    
    },
    country: {type:String},
  
    reminder: {type: Boolean},
    
    note: {type: String},

    visit: {type: Boolean},
    

  },
  { timestamps: true }
);

module.exports = mongoose.model("Places", ortSchema);

