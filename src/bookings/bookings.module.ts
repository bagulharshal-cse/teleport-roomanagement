import { ResponseService } from '../response/response.service';
import { Module } from '@nestjs/common';
import { BookingsController } from './bookings.controller';
import { BookingsService } from './bookings.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingSchema } from './bookings.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Bookings', schema: BookingSchema },
    ]),
  ],
  controllers: [BookingsController],
  providers: [BookingsService, ResponseService]
})
export class BookingsModule {

}
