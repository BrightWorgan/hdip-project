import db from "../util/knex";
import hash from "../util/hashing";
import Express from "express";
import jwt from "jsonwebtoken";

const login = async (req: Express.Request, res: Express.Response) => {
    //email and password
    const email =  req.body.email;
    const password = req.body.password;
  
    //TO DO: validate that the user gave email and password, else error ( heck types typeOf string)
  
    const selectedUsers = await db("Users").select("*"). where({
      email: email,
      password: hash(password),
    })
  
    if ( selectedUsers.length !== 1){
      // throw new Error("User not found!")
      res.send(false);
      return;
    }
    
    const selectedUser = selectedUsers[0];
    console.log(selectedUser);
  
    // jwt / jsonwebtoken
  const token = jwt.sign( JSON.parse(JSON.stringify(selectedUser)), process.env.JWT_KEY as string );
    console.log(jwt.decode(token))
    res.send(token)
  };

  const validate = (req: Express.Request, res: Express.Response , next: Express.NextFunction) => {
    const token = req.get('Authorization');
    if (!token) {
        return res.status(401).send();
    }
    const isValid = jwt.verify(token, process.env.JWT_KEY as string);
    if (isValid) {
        return next();
    }
    return res.status(401).send();
}

  export default {
    login,
    validate
  }