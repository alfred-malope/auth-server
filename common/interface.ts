import { Document } from "mongoose";

// Define the User interface
export interface IUser extends Document {
    _id: "";
    email: string;
    password: string;
    name: string;
    lastLogin?: Date;
    isVerified: boolean;
    resetPasswordToken?: string;
    resetPasswordExpiresAt?: Date;
    verificationToken?: string;
    verificationTokenExpiresAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}