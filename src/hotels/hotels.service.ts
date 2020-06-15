import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { IHotel } from './hotels.interface';
import { Hotel } from './hotels.dto';

@Injectable()
export class HotelsService {

    constructor(
        @InjectModel('Hotels') private readonly hotelModel: Model<IHotel>,
    ){}

    async createHotel(hotel: Hotel) {
        return await this.hotelModel(hotel).save();
    }

    async getHotels() {
        return await this.hotelModel.find();
    }
}
