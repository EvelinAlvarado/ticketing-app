import { Document, ObjectId } from "mongoose";

export interface UserDocument extends Document {
  _id: ObjectId; // ID generated automatically by MongoDB
  email: string;
  username: string;
  firstName?: string; // Optional for Google Auth users
  lastName?: string; // Optional for Google Auth users
  image?: string;
  password?: string; // Optional for Google Auth users
}
