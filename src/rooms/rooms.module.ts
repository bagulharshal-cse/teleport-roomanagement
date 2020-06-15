import { Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomSchema } from './rooms.schema';
import { ResponseService } from '../response/response.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Rooms', schema: RoomSchema },
    ]),
  ],
  controllers: [RoomsController],
  providers: [RoomsService, ResponseService]
})
export class RoomsModule { }
