// pages/api/fetchUserData.js

import { query } from '../../utils/db';

export default async function handler(req, res) {
  const { email } = req.body;

  try {
    const results = await query(
      `SELECT * FROM emotorad WHERE email = $1`,
      [email]
    );
    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
