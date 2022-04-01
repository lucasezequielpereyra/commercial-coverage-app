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
    coberturas: {}, // not defined because the coverages are dynamic
  },
  {
    versionKey: false,
  },
);

export default model('Client', clientSchema);
