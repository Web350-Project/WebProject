import jwt from "jsonwebtoken";

export function signJwt(user, expiresIn = "1d") {
  const secretKey = process.env.JWT_SECRET_KEY;
  if (!secretKey) throw new Error("JWT_SECRET_KEY is not defined");
  return jwt.sign(user, secretKey, { expiresIn });
}

export function verifyJwt(idToken) {
  try {
    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) throw new Error("JWT_SECRET_KEY is not defined");
    return jwt.verify(idToken, secretKey);
  } catch (error) {
    console.error("JWT verification error:", error);
    return null;
  }
}