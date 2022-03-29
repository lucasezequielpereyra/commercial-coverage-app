import { Schema, model } from 'mongoose';

const clientSchema = new Schema(
  {
    cliente: {
      type: Number,
    },
    razon_social: {
      type: String,
    },
    direccion: {
      type: String,
    },
    canal: {
      type: String,
    },
    gec: {
      type: String,
    },
    nse: {
      tpye: String,
    },
    zona: {
      type: String,
    },
    pr: {
      type: String,
    },
    tg: {
      type: String,
    },
    ice: {
      type: String,
    },
    tamaño_ice: {
      type: String,
    },
    visite_pr: {
      tpye: String,
    },
    visite_ej: {
      type: String,
    },
    ritmo_ej: {
      type: String,
    },
    modalidad: {
      type: String,
    },
    cob_cctm: {
      type: Boolean,
    },
    cob_ccso_refpet_rgb: {
      type: Boolean,
    },
    cob_ccso_175_225: {
      type: Boolean,
    },
    cob_fn_175_refpet: {
      type: Boolean,
    },
    cob_cepita_Fresh_cf: {
      type: Boolean,
    },
    cob_ccso_237_500: {
      type: Boolean,
    },
    cob_ccsa_220_500: {
      type: Boolean,
    },
    cob_fanta_220_500: {
      type: Boolean,
    },
    cob_smart_kin_sg_cp: {
      type: Boolean,
    },
    cob_ccsa_refpet_ccl_175: {
      type: Boolean,
    },
    cob_sp_175_refpet: {
      type: Boolean,
    },
    cob_sp_225: {
      type: Boolean,
    },
    cob_ccsa_175: {
      type: Boolean,
    },
    cob_sp_220_500: {
      type: Boolean,
    },
    cob_ccsa_225_ccl_225: {
      type: Boolean,
    },
    cob_cepita_200_cepitafresh_500: {
      type: Boolean,
    },
    cob_cepita1_aquarius_225: {
      type: Boolean,
    },
    cob_kin_225_smart_15: {
      type: Boolean,
    },
    cob_powerade_500_995: {
      type: Boolean,
    },
    cob_ades: {
      type: Boolean,
    },
    cob_ccso_ccsa_500: {
      type: Boolean,
    },
    cob_ow_fn_sp: {
      type: Boolean,
    },
    cob_cepitafresh_cf: {
      type: Boolean,
    },
    cob_fn_pomelo: {
      type: Boolean,
    },
    cob_smart: {
      type: Boolean,
    },
    cob_220_237: {
      type: Boolean,
    },
  },
  {
    versionKey: false,
  },
);

export default model('Client', clientSchema);
