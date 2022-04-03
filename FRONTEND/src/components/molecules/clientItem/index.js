import React from 'react';
import ClientData from '../../atoms/clientData';

const ClientItem = ({ data }) => {
  const myData = [
    { Cliente: data.clients.cliente },
    { 'Razon Social': data.clients.razon_social },
    { Direccion: data.clients.direccion },
    { Canal: data.clients.canal },
    { GEC: data.clients.gec },
  ];

  return <ClientData data={myData} />;
};

export default ClientItem;
