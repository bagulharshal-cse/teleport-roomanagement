import { IBooking } from './bookings.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Booking } from './bookings.dto';
import { Model, Types } from 'mongoose';

@Injectable()
export class BookingsService {

    constructor(
        @InjectModel('Bookings') private readonly bookingModel: Model<IBooking>,
    ) { }

    /**
     * @param booking           // Booking Payload
     */
    async createBooking(booking: Booking) {
        return await this.bookingModel(booking).save();
    }


    async getBookings() {
        return await this.bookingModel.find();
    }

    /**
     * @param bookingId         // Retrive the record by Booking ID
     */
    async getBookingByQuery(bookingId: string) {
        return await this.bookingModel.findOne({ _id: bookingId });
    }

}
