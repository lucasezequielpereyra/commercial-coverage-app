const API = 'http://159.89.86.222/api/v1';

export const getDataByCliente = async (cliente, userToken) => {
  const res = await fetch(`${API}/files/getByClient/${cliente}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': userToken,
    },
  });
  return { data: await res.json(), status: res.status };
};

export const getCoveragesByClient = async (cliente, userToken) => {
  const res = await fetch(`${API}/files/getCoveragesByClient/${cliente}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': userToken,
    },
  });
  return { data: await res.json(), status: res.status };
};

export const getKofreCoveragesByClient = async (cliente, userToken) => {
  const res = await fetch(`${API}/files/getKofreCoveragesByClient/${cliente}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': userToken,
    },
  });
  return { data: await res.json(), status: res.status };
};

export const getIceCoveragesByClient = async (cliente, userToken) => {
  const res = await fetch(`${API}/files/getIceCoveragesByClient/${cliente}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': userToken,
    },
  });
  return { data: await res.json(), status: res.status };
};

export const getSalarialCoveragesByClient = async (cliente, userToken) => {
  const res = await fetch(`${API}/files/getIceCoveragesByClient/${cliente}`, {
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
