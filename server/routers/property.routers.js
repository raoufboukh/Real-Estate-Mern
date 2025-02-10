import express from 'express';
import { addProperty, getProperties } from '../controllers/property.controlles.js';


const routerProperty = express.Router();

routerProperty.route('/properties').get(getProperties);
routerProperty.route('/add-properties').post(addProperty);


export default routerProperty;