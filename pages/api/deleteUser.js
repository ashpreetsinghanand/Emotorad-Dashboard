// pages/api/deleteUser.js

import { query } from '../../utils/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { userId } = req.body;

  try {
    // Delete user from the database
    const result = await query('DELETE FROM emotorad WHERE sno = $1', [userId]);
    console.log(result);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
