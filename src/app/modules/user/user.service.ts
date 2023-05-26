import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB=async(payload:IUser):Promise<IUser>=>{
  
    // const user = await new User({
    //   id:'80',
    //   role:"student",
    //   password:"jhankar",
    //   name:{
    //     firstName:'parvez pappu',
    //     middleName:'chandar',
    //     lastName:'dey',
    //   },
    //   dateOfBirth:'07/2/1999',
    //   gender:'male',
    //   email:'abcdefg@gmail.com',
    //   contact:'0175894478',
    //   emergencyContact:'01699483804',
    //   presentAddress:'dhanmondi',
    //   permanentAddress:'bangladesh'
    
    // });
     
    
    const user=new User(payload);  //creating new user
    await user.save();   // built in instance method
    // custom instance method
    console.log(user.fullName());
    return user;
  
  };

export const getUserFromDB=async():Promise<IUser[]>=>{
  const users=await User.find();
  return users;
}
export const getUserByIdFromDB=async(payload:string):Promise<IUser | null>=>{
  const users=await User.findOne({id:payload},{name:1,contact:1});
  return users;
}

export const getAdminUsersFromDB=async()=>{
  const admins=await User.getAdminUsers();
  return admins;
}

