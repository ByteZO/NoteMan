import Note from "../models/note-model.js";

const createNote = async (req, res) => {
  try {
    const User = req.user;
    const { pdf, description, coverImage, title } = req.body;

    const noteDoc = await Note.create({
      pdfFileUrl: pdf,
      owner: User._id,
      description,
      coverImageUrl: coverImage,
      title,
    }); 

    if (!noteDoc)
      return res.status(501).json({
        status: 501,
        message: "Internal Sever Error",
      });

    return res.status(201).json({
      status: 201,
      message: "Note is Successfully created NoteMan",
      data: {
        Note,
      },
    });
  } catch (error) {
    throw console.error("error while creating the note ", error);
  }
};

export default createNote;
