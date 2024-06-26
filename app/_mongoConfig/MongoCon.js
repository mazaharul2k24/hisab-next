import mongoose from "mongoose";

export const Dbconnect = async () => {
  await mongoose
    .connect("mongodb+srv://hisab:hisab2k24@cluster0.mtimeds.mongodb.net/HISAB")
    .then((res) => {
      console.log("Db connected");
    })
    .catch(() => {
      console.log("Db not connected");
    });
};
    
