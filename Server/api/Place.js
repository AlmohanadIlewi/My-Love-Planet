// Das Mongoose-Schema definiert die Struktur
// eines Orts in der Datenbank. Hier werden Titel,
// Koordinaten, Details, Bilder, Benutzer-ID und andere Felder festgelegt.

const mongoose = require("mongoose");

const ortSchema = new mongoose.Schema(
  {
    city: {
      type: String,
    },
    postType: {
      type: String,
    },
    title: {
      type: String,
    },
    category: {
      type: String,
    },
    price: {
      type: String,
    },
    content: {
      type: String,
    },
    image: {
      type: String,
    },
    Address: {
      type: String,
    },
    zipCode: {
      type: String,
    },
    cloudinary_id: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
