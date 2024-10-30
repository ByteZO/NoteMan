import { genSalt, hash } from "bcrypt";

const passwordHash = async (password) => {
  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);
  return hashedPassword;
};

export default passwordHash;
