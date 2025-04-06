import { Router } from "express";
import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../models/index.js';

const router = Router();

// CREATE a new user
router.post('/', async (req: Request, res: Response) => {
  try {
    const newUser = req.body;
    // ! hash the password from 'req.body' and save to newUser
    newUser.password = await bcrypt.hash(req.body.password, 10);
    // ! create the newUser with the hashed password and save to DB
    const userData = await User.create(newUser);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// TODO: Add comments describing the functionality of this `login` route

router.post('/login', async (req: Request, res: Response) => {
  try {
    // find user by email 
    const userData = await User.findOne({ where: { email: req.body.email } });
    // if no user matches email return 404 login failed 
    if (!userData) {
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }
    // take given password and comapre it to stored password 
    // data type = boolean
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    // if not a valid password, returns 400 error message
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }
    // if email and password work then it logs in
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;

