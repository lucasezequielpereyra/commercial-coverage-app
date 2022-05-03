import Client from '../models/client.model';
import excelToJson from 'convert-excel-to-json';
import fs from 'fs';

export const newFile = (req, res) => {
  try {
    /*              FILE PARSE            */
    const file = req.file;
    const filePath = file.path;
    const result = excelToJson({
      sourceFile: filePath,
      header: {
        rows: 1,
      },
    });

    /*             JSON PARSE              */
    const resultArray = Object.values(result);

    /*            FILE DELETE             */
    fs.unlinkSync(filePath, err => {
      if (err) {
        console.log(err);
      }
    });

    /*           DROP COLLECTION            */
    Client.collection.drop(err => {
      if (err) {
        console.log(err);
      }
    });

    /*            SAVE COLLECTION           */
    resultArray[0].map(res => {
      Client.create({
        OV: res.A,
        Canal: res.B,
        Zona: res.C,
        Ruta_PR: res.D,
        Modalidad: res.E,
        Visita_PR: res.F,
        Cliente: res.G,
        RazonSocial: res.H,
        Direccion: res.I,
        ICE: res.J,
        GEC: res.K,
        Tamano_ICE: res.L,
        Coberturas: {
          CCTM: res.M,
          'CCSO RP / CCSO RGB': res.N,
          'CCSO 1.75 / 2.25': res.O,
          'FN 1.75 / FN RP': res.P,
          'FRESH CF': res.Q,
          'CCSO 237 / 500': res.R,
          'CCSA 237 / 500': res.S,
          'FN 237 / 500': res.T,
          'SMART / KIN CP SG': res.U,
          'CCSA RP / CCL 1.75': res.V,
          'SP 1.75 / SP RP': res.W,
          'SP 2.25': res.X,
          'CCSA 1.75': res.Y,
          'SP 220 / 500': res.Z,
          'CCSA 2.25 / CCL 2.25': res.AA,
          'CEPITA 200 / FRESH 500': res.AB,
          'CEPITA 1LT / AQ 2.25': res.AC,
          'KIN 2.25 / SMART 1.5': res.AD,
          'PWD 500/995': res.AE,
          ADES: res.AF,
          'CCSO / CCSA 500': res.AG,
          'SP / FN OW': res.AH,
          'FN / SP RP': res.AI,
          SMARTWATER: res.AJ,
          'COCA COLA BYTE': res.AK,
        },
      });
    });

    res.status(201).redirect('/api/backoffice/uploaded');
  } catch (err) {
    console.log(err.message);
    res.status(500).redirect('/api/backoffice/uploaded-error');
  }
};

export const getCoveragesKeys = (req, res) => {
  Client.find({ Cliente: 300012046 }, 'Coberturas', (err, data) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        mensaje: 'Error loaded coverages',
        errors: err,
      });
    }
    const coberturas = Object.keys(data[0].Coberturas);

    res.status(200).json({
      coberturas,
    });
  });
};

// Custom data by client
export const getCustomDataByClient = (req, res) => {
  const cliente = req.params.client;
  Client.findOne(
    { Cliente: cliente },
    'Cliente RazonSocial Direccion Canal GEC ICE',
    (err, client) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          mensaje: 'Error loaded client',
          errors: err,
        });
      }
      res.status(200).json({
        ok: true,
        client: client,
      });
    },
  );
};

// Get all coverages by client
export const getCoveragesByClient = (req, res) => {
  const cliente = req.params.client;
  Client.findOne({ Cliente: cliente }, 'Coberturas', (err, client) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        mensaje: 'Error loaded client',
        errors: err,
      });
    }
    const coverages = client.Coberturas;
    res.status(200).json({
      ok: true,
      coverages: coverages,
    });
  });
};

// Get Kofre coverages by client
export const getKofreCoveragesByClient = (req, res) => {
  const cliente = req.params.client;
  const arrayCoverages = [];
  Client.findOne({ Cliente: cliente }, 'Coberturas', (err, client) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        mensaje: 'Error loaded client',
        errors: err,
      });
    }
    const coverages = Object.entries(client.Coberturas);
    coverages.map(coverage => {
      if (
        coverage[0] === 'SMART / KIN CP SG' ||
        coverage[0] === 'SMARTWATER' ||
        coverage[0] === 'FRESH CF' ||
        coverage[0] === 'SP / FN OW' ||
        coverage[0] === 'CCSO RP / CCSO RGB'
      ) {
        arrayCoverages.push(coverage);
      }
    });
    res.status(200).json({
      ok: true,
      coverages: arrayCoverages,
    });
  });
};

// Get Ice coverages by client
export const getIceCoveragesByClient = (req, res) => {
  const cliente = req.params.client;
  const arrayCoverages = [];
  Client.findOne({ Cliente: cliente }, 'Coberturas', (err, client) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        mensaje: 'Error loaded client',
        errors: err,
      });
    }
    const coverages = Object.entries(client.Coberturas);
    coverages.map(coverage => {
      if (
        coverage[0] === 'CCSO RP / CCSO RGB' ||
        coverage[0] === 'CCSO 1.75 / 2.25' ||
        coverage[0] === 'FN 1.75 / FN RP' ||
        coverage[0] === 'FRESH CF' ||
        coverage[0] === 'CCSO 237 / 500' ||
        coverage[0] === 'CCSA 237 / 500' ||
        coverage[0] === 'FN 237 / 500' ||
        coverage[0] === 'SMART / KIN CP SG' ||
        coverage[0] === 'SP 1.75 / SP RP'
      ) {
        arrayCoverages.push(coverage);
      }
    });
    res.status(200).json({
      ok: true,
      coverages: arrayCoverages,
    });
  });
};

// Get Salarial coverages by client
export const getSalarialCoveragesByClient = (req, res) => {
  const cliente = req.params.client;
  const arrayCoverages = [];
  Client.findOne({ Cliente: cliente }, 'Coberturas', (err, client) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        mensaje: 'Error loaded client',
        errors: err,
      });
    }
    const coverages = Object.entries(client.Coberturas);
    coverages.map(coverage => {
      if (
        coverage[0] === 'CCSO 237 / 500' ||
        coverage[0] === 'SMART / KIN CP SG' ||
        coverage[0] === 'CCSO 1.75 / 2.25' ||
        coverage[0] === 'CCSA 237 / 500' ||
        coverage[0] === 'CCSO RP / CCSO RGB' ||
        coverage[0] === 'FN 1.75 / FN RP' ||
        coverage[0] === 'SP 1.75 / SP RP' ||
        coverage[0] === 'FRESH CF' ||
        coverage[0] === 'KIN 2.25 / SMART 1.5' ||
        coverage[0] === 'CCSA RP / CCL 1.75'
      ) {
        arrayCoverages.push(coverage);
      }
    });
    res.status(200).json({
      ok: true,
      coverages: arrayCoverages,
    });
  });
};

export const getByZone = (req, res) => {
  const zona = req.params.zona;
  Client.find({ zona: zona }, (err, clients) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        mensaje: 'Error loaded clients',
        errors: err,
      });
    }
    res.status(200).json({
      ok: true,
      clients: clients,
    });
  });
};
