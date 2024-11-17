import mongoose from "mongoose";

const noteSchema = mongoose.Schema(
  {
    pdfFileUrl: {
      type: String,
      required: true,
      validate: {
        validator: (v) => {
          return /^https?:\/\/.+/.test(v);
        },
        message: (props) => `${props.value} is not a valid link`,
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 500,
    },
    coverImageUrl: {
      type: String,
      validate: {
        validator: (v) => {
          return /^https?:\/\/.+/.test(v);
        },
        message: (props) => `${props.value} is not a valid link`,
      },
    },
    title: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 100,
    },
    userWhoBoughtIt: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);
export default Note;
