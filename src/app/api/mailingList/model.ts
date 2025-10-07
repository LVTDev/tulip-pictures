import mongoose from "mongoose";

const MailListSchema = new mongoose.Schema({
  email: { type: String, required: true, trim: true },
});

const MailListEntry =
  mongoose.models.MailListEntry || mongoose.model("MailListEntry", MailListSchema);

export default MailListEntry;
