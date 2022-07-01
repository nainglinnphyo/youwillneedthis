"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NRCSchema = void 0;
const mongoose = require("mongoose");
exports.NRCSchema = new mongoose.Schema({
    name_mm: String,
    name_en: String,
    nrc_code: String,
});
//# sourceMappingURL=nrc.schema.js.map