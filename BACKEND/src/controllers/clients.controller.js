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
        cob_cctm: res.P,
        cob_ccso_refpet_rgb: res.Q,
        cob_ccso_175_225: res.R,
        cob_fn_175_refpet: res.S,
        cob_cepita_fresh_cf: res.T,
        cob_ccso_237_500: res.U,
        cob_ccsa_220_500: res.V,
        cob_fanta_220_500: res.W,
        cob_smart_kin_sg_cp: res.X,
        cob_ccsa_refpet_ccl_175: res.Y,
        cob_sp_175_refpet: res.Z,
        cob_sp_225: res.AA,
        cob_ccsa_175: res.AB,
        cob_sp_220_500: res.AC,
        cob_ccsa_225_ccl_225: res.AD,
        cob_cepita_200_cepitafresh_500: res.AE,
        cob_cepita1_aquarius_2250: res.AF,
        cob_kin_225_smart_15: res.AG,
        cob_powerade_500_995: res.AH,
        cob_ades: res.AI,
        cob_ccso_ccsa_500: res.AJ,
        cob_ow_fn_sp: res.AK,
        cob_cepitafresh_cf: res.AL,
        cob_fn_pomelo: res.AM,
        cob_smart: res.AN,
        cob_220_237: res.AO,
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
