// third-party libraries
import mongoose from "mongoose";
const { Schema, model } = mongoose;

/**
 * @desc  default schemma for all requests
 */
const tradeRequestModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  storageCapacity: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// model(s)
const BuyRequest = model("BuyRequest", tradeRequestModel);
const SellRequest = model("SellRequest", tradeRequestModel);

export { BuyRequest, SellRequest };
