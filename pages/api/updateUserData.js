// api/updateUserData.js
import { query } from '../../utils/db'; // Import your database query function

export default async function handler(req, res) {
  const { name, email, contact, instagram, yt, updateId } = req.body;

  try {
    // Update user data in the database
    await query(
      `
      UPDATE emotorad
      SET u_name = $1, u_email = $2, u_contact = $3, u_instagram = $4, u_youtube = $5
      WHERE sno = $6
      `,
      [name, email, contact, instagram, yt, updateId]
    );

    res.status(200).json({ message: 'User data updated successfully' });
  } catch (error) {
    console.error('Error updating user data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
