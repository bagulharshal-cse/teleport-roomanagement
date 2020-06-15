import * as mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
    address: String,
    area: String,
    cityName: String,
    countryName: String,
    postalCode: Number,
}, { versionKey: false, _id: false });

export const CustomerSchema = new mongoose.Schema({
    name: String,
    email: String,
    contactNo: String,
    gender: String,
    nationality: String,
    identityType: String,
    IdentityNo: String,
    dob: String,
    address: AddressSchema,
}, { versionKey: false });