import { Module } from '@nestjs/common';
import { HotelsController } from './hotels.controller';
import { HotelsService } from './hotels.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelSchema } from './hotels.schema';
import { ResponseService } from '../response/response.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Hotels', schema: HotelSchema },
    ]),
  ],
  controllers: [HotelsController],
  providers: [HotelsService, ResponseService]
})
export class HotelsModule { }
