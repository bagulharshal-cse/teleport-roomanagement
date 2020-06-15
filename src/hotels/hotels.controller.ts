import { HotelsService } from './hotels.service';
import { Controller, Get, Post, Req, Res, Body, HttpStatus } from '@nestjs/common';
import { ApiUseTags, ApiImplicitParam } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { Hotel } from './hotels.dto';
import { ResponseService } from '../response/response.service';


@ApiUseTags('Hotels')
@Controller('hotels')
export class HotelsController {

    constructor(
        private readonly hotelService: HotelsService,
        private readonly responseService: ResponseService,
    ) { }

    @Post('/')
    async createHotel(
        @Res() response: Response,
        @Body() hotelBody: Hotel,
    ) {
        try {
            const hotel = await this.hotelService.createHotel(hotelBody);
            return this.responseService.sendDataResponse(response, hotel);
        } catch (error) {
            return this.responseService.internalServerError(response);
        }
    }

    @Get('/')
    async getHotels(
        @Res() response: Response,
    ) {
        try {
            const hotels = await this.hotelService.getHotels();
            if (hotels.length > 0) {
                return this.responseService.sendDataResponse(response, hotels);
            }
            return this.responseService.recordNotFoundError(response);

        } catch (error) {
            return this.responseService.internalServerError(response);
        }
    }

}
