const register = async (req, res) => {
  try {
    res.json({
      message: "Success",
      status: 200,
      data: [
        {
          name: "John Doe",
        },
      ],
    });
  } catch (error) {
    res.json({
      message: "Error",
      status: 500,
    });
  }
};

const logIn = async (req, res) => {
  try {
    res.json({
      message: "Success",
      status: 200,
      data: [
        {
          name: "John Doe",
        },
      ],
    });
  } catch (error) {
    res.json({
      message: "Error",
      status: 500,
    });
  }
};

export { register, logIn };
