import { Controller, Post, Res, Body, Get, HttpStatus } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { ApiUseTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { Room } from './rooms.dto';
import { ResponseService } from '../response/response.service';

@ApiUseTags('Rooms')
@Controller('rooms')
export class RoomsController {

    constructor(
        private readonly roomService: RoomsService,
        private readonly responseService: ResponseService,
    ) { }

    @Post('/')
    async createRooms(
        @Res() response: Response,
        @Body() roomBody: Room,
    ) {
        try {
            const room = await this.roomService.createRoom(roomBody);
            return this.responseService.sendDataResponse(response, room);
        } catch (error) {
            return this.responseService.internalServerError(response);
        }
    }

    @Get('/')
    async getRooms(
        @Res() response: Response,
    ) {
        try {
            const rooms = await this.roomService.getRooms();
            if (rooms.length > 0) {
                return this.responseService.sendDataResponse(response, rooms);
            }
            return this.responseService.recordNotFoundError(response);

        } catch (error) {
            return this.responseService.internalServerError(response);
        }
    }
}
