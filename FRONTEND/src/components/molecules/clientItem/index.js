import React from 'react';
import ClientData from '../../atoms/clientData';

const ClientItem = ({ data }) => {
  const myData = Object.entries(data);

  return <ClientData data={myData} />;
};

export default ClientItem;
