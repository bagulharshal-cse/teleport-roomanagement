import { Controller, Post, Res, Body, HttpStatus, Get, Param } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { Booking } from './bookings.dto';
import { Request, Response } from 'express';
import { ApiUseTags, ApiImplicitParam } from '@nestjs/swagger';
import { ResponseService } from '../response/response.service';

@ApiUseTags('Bookings')
@Controller('bookings')
export class BookingsController {

    constructor(
        private readonly bookingService: BookingsService,
        private readonly responseService: ResponseService,
    ) { }

    /**
     * @param response
     * @param bookingBody
     */
    @Post('/')
    async createBooking(
        @Res() response: Response,
        @Body() bookingBody: Booking,
    ) {
        try {
            const booking = await this.bookingService.createBooking(bookingBody);
            return this.responseService.sendDataResponse(response, booking);
        } catch (error) {
            console.log(error);
            return this.responseService.internalServerError(response);
        }

    }

    /**
     * @param response
     */
    @Get('/')
    async getBookings(
        @Res() response: Response,
    ) {
        try {
            const bookings = await this.bookingService.getBookings();
            if (bookings.length > 0) {
                return this.responseService.sendDataResponse(response, bookings);
            }
            return this.responseService.recordNotFoundError(response);

        } catch (error) {
            return this.responseService.internalServerError(response);
        }

    }

    /**
     * @param response
     * @param param
     */
    @Get('/:bookingId')
    @ApiImplicitParam({ name: 'bookingId', type: String })
    async getBooking(
        @Res() response: Response,
        @Param() param,
    ) {
        try {
            const booking = await this.bookingService.getBookingByQuery(param.bookingId);
            if (booking) {
                return this.responseService.sendDataResponse(response, booking);
            }
            return this.responseService.recordNotFoundError(response);
        } catch (error) {
            return this.responseService.internalServerError(response);
        }
    }

}
