import { compare } from "bcrypt";

const passwordChecker = (password, hashedPassword) => {
  try {
    return compare(password, hashedPassword);
  } catch (err) {
    console.error("somethig went wrong while checking the password ! ", err);
  }
};

export default passwordChecker;
