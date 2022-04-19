import User from '../models/user.model';
import jwt from 'jsonwebtoken';

const SECRET_WORD = process.env.SECRET_WORD;

export const login = async (req, res) => {
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

export const render = (req, res) => {
  if (req.session?.token) {
    res.render('upload', {
      user: req.session.user,
      token: req.session.token,
    });
  } else {
    res.render('index');
  }
};

export const logout = (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (!err) {
        res.redirect('/api/backoffice/');
      } else {
        console.log(err);
        res.redirect('/api/backoffice/');
      }
    });
  } else {
    res.redirect('/api/backoffice/');
  }
};