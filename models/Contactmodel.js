// models/Contactmodel.js
import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    subject: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    servicesInterested: {
      type: [String], // Array of selected services
      required: true,
      validate: {
        validator: (arr) => arr.length > 0,
        message: "Please select at least one service.",
      },
    },
  },
  {
    timestamps: true, // Adds createdAt & updatedAt fields
  }
);

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export default Contact;
