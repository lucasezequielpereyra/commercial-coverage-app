import Role from '../models/role.model';

export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();

    if (count > 0) return;

    await Promise.all([
      new Role({ name: 'admin' }).save(),
      new Role({ name: 'backoffice' }).save(),
      new Role({ name: 'comercializador' }).save(),
      new Role({ name: 'ejecutivo' }).save(),
      new Role({ name: 'gerente' }).save(),
    ]);
  } catch (error) {
    console.error(error);
  }
};
