import cloudinary from "../lib/cloudinary.js";
import { Property } from "../models/properties.model.js";


export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProperty = async (req, res) => {
  try {
    const id = req.params.id;
    const property = await Property.findById(id);
    if (!property)
      return res.status(404).json({ message: "Property not found" });
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addProperty = async (req, res) => {
  try {
    const {
      country,
      city,
      address,
      title,
      price,
      description,
      image,
      bedrooms,
      parkings,
      bathrooms,
    } = req.body;
    // console.log(req.body);
    const upload = await cloudinary.uploader.upload(image);
    const property = new Property({
      country,
      city,
      address,
      title,
      price,
      description,
      image: upload.secure_url,
      bedrooms,
      parkings,
      bathrooms,
    });
    // console.log(property);
    await property.save();
    res.status(200).json(property);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};