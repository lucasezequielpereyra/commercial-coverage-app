import { Schema, model } from 'mongoose';

const clientSchema = new Schema(
  {
    OV: {
      type: String,
    },
    Canal: {
      type: String,
    },
    Zona: {
      type: String,
    },
    Ruta_PR: {
      type: String,
    },
    Modalidad: {
      type: String,
    },
    Visita_PR: {
      type: String,
    },
    Cliente: {
      type: Number,
    },
    RazonSocial: {
      type: String,
    },
    Direccion: {
      type: String,
    },
    ICE: {
      type: String,
    },
    GEC: {
      type: String,
    },
    Tamano_ICE: {
      type: String,
    },
    Coberturas: {},
  },
  {
    versionKey: false,
  },
);

export default model('Client', clientSchema);
