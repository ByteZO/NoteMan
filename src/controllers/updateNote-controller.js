import Note from "../models/note-model";

const updateNote = async (req, res) => {
  const { id, pdf, description, coverImage, title } = req.body;

  try {
    const noteDoc = Note.findByIdAndUpdate(
      id,
      {
        $set: {
          pdfFileUrl: pdf,
          description,
          coverImageUrl: coverImage,
          title,
        },
      },
      { new: true }
    );

    if (!noteDoc)
      return res.status(404).json({
        status: 404,
        message: "Note not found",
        data: {},
      });
    res.status(200).json({
      status: 200,
      message: "Note updated successfully",
      data: {
        pdfUrl: noteDoc.pdfFileUrl,
        description: noteDoc.description,
        coverImageUrl: noteDoc.coverImage,
        title: noteDoc.title,
      },
    });
  } catch (error) {
    console.log("Error while updating the note >>>", error);
    return res.status(501).json({
      status: 501,
      message: "Internal Server Error",
    });
  }
};

export default updateNote;
