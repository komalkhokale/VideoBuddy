import mongoose, { mongo, Schema } from "mongoose";

const meetingSchema = new Schema({
  user_id: { type: String },
  meetingCode: { type: String, require: true },
  date: { type: Date, default: Date.now, require: true },
});

const Meeting = mongoose.model("Meeting", meetingSchema);

export { Meeting };

// export { Meeting }; use when we want to export multiple things in single js file