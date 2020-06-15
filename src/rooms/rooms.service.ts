import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { IRoom } from './rooms.interface';
import { Room } from './rooms.dto';

@Injectable()
export class RoomsService {

    constructor(
        @InjectModel('Rooms') private readonly roomModel: Model<IRoom>,
    ){}

    async createRoom(room: Room) {
        return await this.roomModel(room).save();
    }

    async getRooms() {
        return await this.roomModel.find();
    }
}
