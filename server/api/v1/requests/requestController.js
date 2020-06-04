// models
// import BuyRequest from "./requestModel";
import { BuyRequest, SellRequest } from "./requestModel";

/**
 * @desc handles all trade requests
 */
const requestController = {
  /**
   * @desc retrieves all trade request
   * @param {object} req
   * @param {object} res
   */
  async getAllRequest(req, res) {
    let allTradeRequests = {};
    try {
      const sellRequests = await SellRequest.find();
      const buyRequests = await BuyRequest.find();
      allTradeRequests = {
        sellRequests: [...sellRequests],
        buyRequests: [...buyRequests],
      };
      return res.status(200).send({
        message: "All Trade Request retrieved.",
        allTradeRequests,
      });
    } catch (error) {
      if (error) {
        return res.status(501).send({
          message: "There's an error",
          error,
        });
      }
    }
  },
  // async getBuyRequest(req, res) {},
  // async getSellRequest(req, res) {},

  /**
   * @desc adds a trade request to the database
   * @param {object} req
   * @param {object} res
   */
  async addRequest(req, res) {
    const { requestType, deviceList } = req.body;
    try {
      const createdReq =
        requestType === "buy"
          ? await BuyRequest.create(deviceList)
          : await SellRequest.insertMany(deviceList);
      return res.status(201).send({
        message: "Trade Request added",
        createdReq,
      });
    } catch (error) {
      if (error) {
        return res.status(401).send({
          message: "Invalid request",
          error,
        });
      }
    }
  },
};

export default requestController;
