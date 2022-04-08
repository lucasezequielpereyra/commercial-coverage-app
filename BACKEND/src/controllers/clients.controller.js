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
        Cliente: res.A,
        OV: res.B,
        RazonSocial: res.C,
        Direccion: res.D,
        Canal: res.E,
        GEC: res.F,
        NSE: res.G,
        Zona: res.H,
        Ruta_PR: res.I,
        Ruta_TV: res.J,
        Ruta_WAPP: res.K,
        Ruta_WEB: res.L,
        TG: res.M,
        ICE: res.N,
        Tamano_ICE: res.O,
        Visita_PR: res.P,
        Visita_EJ: res.Q,
        Ritmo_EJ: res.R,
        Modalidad: res.S,
        Coberturas: {
          CCTM: res.T,
          'CCSO RP / CCSO RGB': res.U,
          'CCSO 1.75 / 2.25': res.V,
          'FN 1.75 / FN RP': res.W,
          'FRESH CF': res.X,
          'CCSO 237 / 500': res.Y,
          'CCSA 237 / 500': res.Z,
          'FN 237 / 500': res.AA,
          'SMART / KIN CP SG': res.AB,
          'CCSA RP / CCL 1.75': res.AC,
          'SP 1.75 / SP RP': res.AD,
          'SP 2.25': res.AE,
          'CCSA 1.75': res.AF,
          'SP 220 / 500': res.AG,
          'CCSA 2.25 / CCL 2.25': res.AH,
          'CEPITA 200 / FRESH 500': res.AI,
          'CEPITA 1LT / AQ 2.25': res.AJ,
          'KIN 2.25 / SMART 1.5': res.AK,
          'PWD 500/995': res.AL,
          ADES: res.AM,
          'CCSO / CCSA 500': res.AN,
          'SP / FN OW': res.AO,
          'FN / SP RP': res.AQ,
          SMARTWATER: res.AR,
          'COCA COLA BYTE': res.AS,
        },
      });
    });

    res.status(201).json({
      ok: true,
      message: 'File loaded successfully',
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      message: 'Error loading file',
      errors: err,
    });
  }
};

export const getAll = (req, res) => {
  Client.find({}, (err, clients) => {
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

// Custom data by client
export const getCustomDataByClient = (req, res) => {
  const cliente = req.params.client;
  Client.findOne(
    { Cliente: cliente },
    'Cliente RazonSocial Direccion Canal GEC',
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
