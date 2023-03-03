import crypto from "crypto";

const passwordEncoder = (password: string, salt: string): string => {
  const hash = crypto.createHmac("sha512", salt);
  hash.update(password);
  return hash.digest("hex");
};

export { passwordEncoder };
