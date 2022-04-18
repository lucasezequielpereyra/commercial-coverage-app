import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import Role from '../models/role.model';

const SECRET_WORD = process.env.SECRET_WORD;

export const signUp = async (req, res) => {
  try {
    const { username, password } = req.body;

    const newUser = new User({
      username,
      password: await User.encryptPassword(password),
    });

    const userRole = await Role.findOne({ name: 'comercializador' });
    newUser.roles = [userRole._id];

    const savedUser = await newUser.save();

    const token = jwt.sign({ id: savedUser._id }, SECRET_WORD, {
      expiresIn: 86400,
    });

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const signIn = async (req, res) => {
  try {
    const userFound = await User.findOne({
      username: req.body.username,
    }).populate('roles');

    if (userFound) {
      const matchPassword = await User.comparePassword(
        req.body.password,
        userFound.password,
      );

      if (!matchPassword)
        return res
          .status(401)
          .json({ token: null, message: 'Invalid password' });

      if (!userFound)
        return res.status(400).json({ token: null, message: 'User not found' });

      const token = jwt.sign({ id: userFound._id }, SECRET_WORD, {
        expiresIn: 86400,
      });

      res.json({ token });
    } else {
      res.status(401).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const signInWeb = async (req, res) => {
  try {
    const userFound = await User.findOne({
      username: req.body.username,
    }).populate('roles');

    if (userFound) {
      const matchPassword = await User.comparePassword(
        req.body.password,
        userFound.password,
      );

      if (!matchPassword)
        return res
          .status(401)
          .render('index', { login: false, message: 'Invalid password' });

      if (!userFound)
        return res
          .status(400)
          .render('index', { login: false, message: 'User not found' });

      const token = jwt.sign({ id: userFound._id }, SECRET_WORD, {
        expiresIn: 86400,
      });

      req.session.token = token;
      req.session.user = userFound.username;
      res.render('upload', {
        user: req.session.user,
        token: req.session.token,
      });
    } else {
      res
        .status(401)
        .render('index', { login: false, message: 'User not found' });
    }
  } catch (error) {
    res.status(500).render('index', { login: false, message: error.message });
  }
};
