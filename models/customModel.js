const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const baseSchema = new Schema({
    name: String,
    price: Number
}, {versionKey: false});

const frostingSchema = new Schema({
    name: String,
    price: Number
}, {versionKey: false});

const addonSchema = new Schema({
    name: String,
    price: Number
}, {versionKey: false});

const designSchema = new Schema({
    name: String
}, {versionKey: false});

const customSchema = new Schema({
    base: baseSchema,
    frosting: frostingSchema,
    addon: addonSchema,
    design: designSchema
}, {versionKey: false});

const Custom = mongoose.model('custom', customSchema);
const Base = mongoose.model('base', baseSchema);
const Frosting = mongoose.model('frosting', frostingSchema);
const Addon = mongoose.model('addon', addonSchema);
const Design = mongoose.model('design', designSchema);

exports.Custom = Custom;
exports.Base = Base;
exports.Frosting = Frosting;
exports.Addon = Addon;
exports.Design = Design;