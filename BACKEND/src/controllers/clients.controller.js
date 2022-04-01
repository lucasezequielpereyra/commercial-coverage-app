import Client from '../models/client.model';
import excelToJson from 'convert-excel-to-json';

export const newFile = (req, res) => {
  try {
    /*          PARSEO DE ARCHIVO           */
    const file = req.file;
    const filePath = file.path;
    const result = excelToJson({
      sourceFile: filePath,
      header: {
        rows: 1,
      },
    });

    /*           PARSEO DE JSON           */
    const resultArray = Object.values(result);

    /*            GUARDADO EN DB           */
    resultArray[0].map(res => {
      const client = new Client({
        cliente: res.A,
        razon_social: res.B,
        direccion: res.C,
        canal: res.D,
        gec: res.E,
        nse: res.F,
        zona: res.G,
        pr: res.H,
        tg: res.I,
        ice: res.J,
        tamaño_ice: res.K,
        visite_pr: res.L,
        visite_ej: res.M,
        ritmo_ej: res.N,
        modalidad: res.O,
        coberturas: {
          CCTM: res.P,
          CCSO_REFPET__RGB: res.Q,
          CCSO_175_225: res.R,
          FN_175_REFPET: res.S,
          FRESH_CF: res.T,
          CCSO_237_500: res.U,
          CCSA_220_500: res.V,
          FN_220_500: res.W,
          SMART_KIN_SG_CP: res.X,
          CCSAREFPET_CCL175: res.Y,
          SP_175_REFPET: res.Z,
          SP_225: res.AA,
          CCS_175: res.AB,
          SP_220_500: res.AC,
          CCS225_CCL_225: res.AD,
          CEPITA200_FRESH500: res.AE,
          CEPITA1L_AQ225: res.AF,
          KIN225_SMART15: res.AG,
          POWERADE_500_995: res.AH,
          ADES: res.AI,
          CCSO_CCSA_500: res.AJ,
          FN_SP_OW: res.AK,
          FRESH_CF: res.AL,
          FN_POMELO: res.AM,
          SMART: res.AN,
          PET_220_237: res.AO,
        },
      });
      client.save();
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

export const getByCliente = (req, res) => {
  const cliente = req.params.cliente;
  Client.findOne({ cliente: cliente }, (err, client) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        mensaje: 'Error loaded client',
        errors: err,
      });
    }
    res.status(200).json({
      ok: true,
      clients: client,
    });
  });
};

export const getByZona = (req, res) => {
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
