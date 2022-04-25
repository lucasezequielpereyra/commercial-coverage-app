import jwt from 'jsonwebtoken';
import User from '../models/user.model';
import Role from '../models/role.model';

const SECRET_WORD = process.env.SECRET_WORD;

export const verifyToken = async (req, res, next) => {
  let token = req.session?.token || req.headers['x-access-token'];
  if (!token) return res.status(403).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, SECRET_WORD);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === 'admin') {
        next();
        return;
      }
    }

    return res.status(403).json({ message: 'Unauthorized' });
  } catch (err) {
    return res
      .status(403)
      .json({ error: 'Not authorized - Require admin role' });
  }
};

export const isBackoffice = async (req, res, next) => {
  try {
    const username = req.session?.user || req.body.username;
    const user = await User.findOne({ username: username });
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === 'backoffice') {
        next();
        return;
      }
    }

    return res.status(403).render('index', {
      error: 'No tienes permiso para acceder a este panel',
    });
  } catch (err) {
    return res.status(403).render('index', { error: err.message });
  }
};

export const isComer = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === 'comercializador') {
        next();
        return;
      }
    }

    return res.status(403).json({ message: 'Unauthorized' });
  } catch (err) {
    return res
      .status(403)
      .json({ error: 'Not authorized - Require comer role' });
  }
};

export const isEjecutivo = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === 'ejecutivo') {
        next();
        return;
      }
    }

    return res.status(403).json({ message: 'Unauthorized' });
  } catch (err) {
    return res
      .status(403)
      .json({ error: 'Not authorized - Require ejecutivo role' });
  }
};
