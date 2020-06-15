import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from './customer.schema';
import { ResponseService } from '../response/response.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Customers', schema: CustomerSchema },
    ]),
  ],
  controllers: [CustomerController],
  providers: [CustomerService, ResponseService]
})
export class CustomerModule { }
