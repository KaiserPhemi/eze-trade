// third-party libraries
import mongoose from "mongoose";
const { Schema, model } = mongoose;

/**
 * @desc  default schemma for all requests
 */
const tradeRequestModel = new Schema({
  // name: {
  //   type: String,
  //   required: true,
  // },
  // condition: {
  //   type: String,
  //   required: true,
  // },
  // storageCapacity: {
  //   type: String,
  //   required: true,
  // },
  // status: {
  //   type: String,
  //   required: true,
  // },
  // price: {
  //   type: Number,
  //   required: true,
  // },

  device: {
    type: String,
    required: true,
  },
  storageSize: {
    type: String,
    required: true,
  },
  New: { type: String },
  A1: { type: String },
  A2: { type: String },
  B1: { type: String },
  B2: { type: String },
  C: { type: String },
  CB: { type: String },
  CD: { type: String },
  status: { type: String, required: true },
  imgUrl: { type: String },
});

// model(s)
const BuyRequest = model("BuyRequest", tradeRequestModel);
const SellRequest = model("SellRequest", tradeRequestModel);

export { BuyRequest, SellRequest };
