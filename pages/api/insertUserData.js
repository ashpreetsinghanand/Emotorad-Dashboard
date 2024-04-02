// pages/api/insertDataToEmotorad.js

import { query } from "../../utils/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { user,name, email, contact, instagram, yt } = req.body;

      // Insert data into the emotorad table
      const result = await query(
        "INSERT INTO emotorad (email,u_email, u_name, u_contact, u_instagram, u_youtube) VALUES ($1, $2, $3, $4, $5, $6)",
        [user,email, name,  contact, instagram, yt]
      );

      res.status(200).json({ message: "Data inserted successfully" });
    } catch (error) {
      console.error("Error inserting data:", error);
      res.status(500).json({ message: "Failed to insert data into emotorad table" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
