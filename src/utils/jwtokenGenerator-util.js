import jsonwebtoken from "jsonwebtoken";

const jwtGenerator = (email, id, jwtSecert) => {
  const jwToken = jsonwebtoken.sign(
    {
      email,
      id,
    },
    jwtSecert
  );
  return jwToken; 
};

export default jwtGenerator;
