import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import Role from '../models/role.model';

const SECRET_WORD = process.env.SECRET_WORD;

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({
      username,
      email,
      password: await User.encryptPassword(password),
    });

    const userRole = await Role.findOne({ name: 'comercializador' });
    newUser.roles = [userRole._id];

    const savedUser = await newUser.save();

    const token = jwt.sign({ id: savedUser._id }, SECRET_WORD, {
      expiresIn: 86400,
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const signIn = async (req, res) => {
  try {
    const userFound = await User.findOne({ email: req.body.email }).populate(
      'roles',
    );

    const matchPassword = await User.comparePassword(
      req.body.password,
      userFound.password,
    );

    if (!matchPassword)
      return res.status(401).json({ token: null, message: 'Invalid password' });

    if (!userFound)
      return res.status(400).json({ token: null, message: 'User not found' });

    const token = jwt.sign({ id: userFound._id }, SECRET_WORD, {
      expiresIn: 86400,
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error });
  }
};
