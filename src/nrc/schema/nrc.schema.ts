import * as mongoose from 'mongoose';

export const NRCSchema = new mongoose.Schema({
  name_mm: String,
  name_en: String,
  nrc_code: String,
});