import { Module } from '@nestjs/common';
import { HotelsModule } from './hotels/hotels.module';
import { RoomsModule } from './rooms/rooms.module';
import { BookingsModule } from './bookings/bookings.module';
import { CustomerModule } from './customer/customer.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigurationService } from './configuration/configuration.service';
import { ResponseService } from './response/response.service';
const configuration = new ConfigurationService(`${process.cwd()}/.env`);

@Module({
  imports: [
    MongooseModule.forRoot(configuration.get('MONGO_URI'), {
      useFindAndModify: false,
    }), HotelsModule, RoomsModule, BookingsModule, CustomerModule],
  controllers: [],
  providers: [ResponseService],
})
export class AppModule { }
