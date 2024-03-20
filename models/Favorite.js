const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema({
  recipe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipe",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//MongoDB Collection named here - will give lowercase plural of name You can add a third argument to override the name that as been assigned(plural)
module.exports = mongoose.model("Favorite", FavoriteSchema);


