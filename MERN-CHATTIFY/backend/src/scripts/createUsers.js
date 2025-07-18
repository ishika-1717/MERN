import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const createUsers = async () => {
  try {
    await connectDB();

    const users = [
      {
        email: "emma.thompson@example.com",
        fullName: "Emma Thompson",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
      },
      {
        email: "james.anderson@example.com",
        fullName: "James Anderson",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        email: "sophia.davis@example.com",
        fullName: "Sophia Davis",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
      },
      {
        email: "william.clark@example.com",
        fullName: "William Clark",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
      },
      {
        email: "olivia.miller@example.com",
        fullName: "Olivia Miller",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
      }
    ];

    for (const user of users) {
      try {
        await User.create(user);
        console.log(`Created user: ${user.fullName}`);
      } catch (error) {
        if (error.code === 11000) {
          console.log(`User ${user.fullName} already exists`);
        } else {
          console.error(`Error creating user ${user.fullName}:`, error);
        }
      }
    }

    console.log("Finished creating users");
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

createUsers(); 