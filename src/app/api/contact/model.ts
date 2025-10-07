import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },

  email: { type: String, required: true, trim: true },
  company: { type: String, required: true, trim: true },
  message: {
    type: String,
    required: true,
    trim: true,
  },
});

const ContactEntry =
  mongoose.models.ContactEntry || mongoose.model("ContactEntry", ContactSchema);

export default ContactEntry;
