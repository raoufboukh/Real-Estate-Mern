import express from 'express';
import {
  addProperty,
  getProperties,
  getProperty,
} from "../controllers/property.controlles.js";

const routerProperty = express.Router();

routerProperty.route("/properties").get(getProperties);
routerProperty.route("/add-properties").post(addProperty);
routerProperty.route("/properties/:id").get(getProperty);


export default routerProperty;