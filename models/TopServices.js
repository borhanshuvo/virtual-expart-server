const mongoose = require("mongoose");

const TopServicesSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
   
  },
  { timeStamps: true }
);

module.exports = mongoose.model("topServices", TopServicesSchema);