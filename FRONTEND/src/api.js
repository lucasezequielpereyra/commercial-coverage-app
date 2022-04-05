const API = 'http://192.168.0.23:3001/api/v1';

export const getData = async () => {
  const res = await fetch(`${API}/files/getAll`, {
    method: 'GET',
  });

  return await res.json();
};

export const getDataByCliente = async (cliente, userToken) => {
  const res = await fetch(`${API}/files/getByCliente/${cliente}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': userToken,
    },
  });

  return { data: await res.json(), status: res.status };
};

export const signIn = async (username, password) => {
  const res = await fetch(`${API}/auth/signIn`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  return { token: await res.json(), status: res.status };
};
