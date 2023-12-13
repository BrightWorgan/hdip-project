// hashing algorythm used is Sha256, with a Salt
import { createHash } from "crypto";

const hash = (password:string) => {
    return createHash("sha256").update(password + process.env.salt).digest("hex");
};

export default hash;