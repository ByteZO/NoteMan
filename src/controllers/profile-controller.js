const profile = (req, res) => {
  try {
    const user = req.user;

    return res.status(200).json({
      status: 200,
      message: "Profile Information",
      data: {
        user,
      },
    });
  } catch (error) {
    console.log("something went wrong while getting user data", error);
  }
};

export default profile;
