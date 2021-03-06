import User from '../models/user.model';
import Role from '../models/role.model';

export const createUser = async (req, res) => {
  try {
    const { username, password, roles } = req.body;

    const newUser = new User({
      username,
      password: await User.encryptPassword(password),
    });

    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map(role => role._id);
    } else {
      const role = await Role.findOne({ name: 'comercializador' });
      newUser.roles = [role._id];
    }

    const savedUser = await newUser.save();

    res.status(201).json({ message: 'Created User ' + savedUser.username });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getUsersById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password, roles } = req.body;
    let foundRoles;
    /*  Search Roles  */
    if (roles) {
      foundRoles = await Role.find({ name: { $in: roles } });
    }

    await User.findOneAndUpdate(
      { _id: id },
      {
        username: username,
        password: await User.encryptPassword(password),
        roles: foundRoles,
      },
    );
    res.status(200).json({ message: 'Updated User ' + id });
  } catch (error) {
    res.status(500).json({ error });
  }
};
