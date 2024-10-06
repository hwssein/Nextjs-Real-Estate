import { hash, compare } from "bcryptjs";

const hashPassword = async (password) => {
  try {
    const result = await hash(password, 12);

    return result;
  } catch (error) {
    console.log("can not hash password in hashPassword function\n", error);
  }
};

const verifyPassword = async (password, hashPass) => {
  try {
    const result = await compare(password, hashPass);

    return result;
  } catch (error) {
    console.log("can not compare password in verifyPassword function\n", error);
  }
};

export { hashPassword, verifyPassword };
