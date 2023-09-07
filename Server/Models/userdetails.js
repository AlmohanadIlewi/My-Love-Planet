
/* dieser Code ermöglicht die Definition eines Mongoose-Modells für Nutzer (Benutzer), 
das in anderen Teilen der Anwendung verwendet werden kann, 
um Nutzerdaten in der MongoDB-Datenbank zu speichern und abzurufen. */ 

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const nutzerSchema = new mongoose.Schema(
  {

    firstName: {type:String},
    lastName: {type:String},
    email: {type:String},

  },
  { timestamps: true }
  
);

module.exports = mongoose.model("User", nutzerSchema);