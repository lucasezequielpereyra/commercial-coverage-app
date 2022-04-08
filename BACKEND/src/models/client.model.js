import { Schema, model } from 'mongoose';

const clientSchema = new Schema(
  {
    Cliente: {
      type: Number,
    },
    OV: {
      type: String,
    },
    RazonSocial: {
      type: String,
    },
    Direccion: {
      type: String,
    },
    Canal: {
      type: String,
    },
    GEC: {
      type: String,
    },
    NSE: {
      type: String,
    },
    Zona: {
      type: String,
    },
    Ruta_PR: {
      type: String,
    },
    Ruta_TV: {
      type: String,
    },
    Ruta_WAPP: {
      type: String,
    },
    Ruta_WEB: {
      type: String,
    },
    TG: {
      type: String,
    },
    ICE: {
      type: String,
    },
    Tamano_ICE: {
      type: String,
    },
    Visita_PR: {
      type: String,
    },
    Visita_EJ: {
      type: String,
    },
    Ritmo_EJ: {
      type: String,
    },
    Modalidad: {
      type: String,
    },
    Coberturas: {},
  },
  {
    versionKey: false,
  },
);

export default model('Client', clientSchema);
