import Role from '../models/role.model';
import User from '../models/user.model';

export const verifyRolesExist = async (req, res, next) => {
  try {
    if (req.body.roles) {
      const roles = await Role.find({});
      let arrayRoles = [];

      roles.map(rol => arrayRoles.push(rol.name));

      for (let i = 0; i < req.body.roles.length; i++) {
        if (!arrayRoles.includes(req.body.roles[i])) {
          return res.status(400).json({
            message: `Role ${req.body.roles[i]} does not exist`,
          });
        }
      }
      next();
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const verifiyUsernameExist = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      return res.status(400).json({
        message: `Username ${req.body.username} already exist`,
      });
    }
    next();
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const verifiyEmailExist = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        message: `Email ${req.body.email} already exist`,
      });
    }
    next();
  } catch (error) {
    res.status(500).json({ error });
  }
};
