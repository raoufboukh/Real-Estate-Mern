import cloudinary from "../lib/cloudinary.js";
import { User } from "../models/model.auth.js";
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
    const upload = await cloudinary.uploader.upload(image);
    const property = {
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
    };
    const admins = await User.find({ role: "admin" });
    if (!admins) {
      const newProp = new Property(property);
      await newProp.save();
      return res.status(201).json(newProp);
    }
    const notification = {
      message: "New Property Request",
      property,
    };
    admins.forEach(async (admin) => {
      await User.findByIdAndUpdate(admin._id, {
        $push: { notification: notification },
      });
    });
    res.status(200).json({ message: "Property Request Sent To admins" });
    // await property.save();
    // res.status(200).json(property);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};