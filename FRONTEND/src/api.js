const API = 'http://192.168.0.23:3000/api/v1/files';

export const getData = async () => {
  const res = await fetch(`${API}/getAll`, {
    method: 'GET',
  });

  return await res.json();
};

export const getDataByCliente = async cliente => {
  const res = await fetch(`${API}/getByCliente/${cliente}`, {
    method: 'GET',
  });

  return await res.json();
};
