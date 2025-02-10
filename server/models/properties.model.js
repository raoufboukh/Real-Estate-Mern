import mongoose from "mongoose";

const property = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        // default: ,
    },
    bedrooms: {
        type: Number,
        required: true,
    },
    parkings: {
        type: Number,
        required: true,
    },
    bathrooms: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: "available",
    },
},{ timestamps: true });


export const Property = mongoose.model("Property", property);