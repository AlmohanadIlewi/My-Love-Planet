/* ermöglicht dieser Code die Definition eines Mongoose-Modells für Ort-Daten, 
das in anderen Teilen der Anwendung verwendet werden kann, 
um Daten in der MongoDB-Datenbank zu speichern und abzurufen.*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ortdaten = new mongoose.Schema(
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

module.exports = mongoose.model("Ort", ortdaten);