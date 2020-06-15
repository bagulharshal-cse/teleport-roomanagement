import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ICustomer } from './customer.interface';
import { Customer } from './customer.dto';
import { Model } from 'mongoose';

@Injectable()
export class CustomerService {

    constructor(
        @InjectModel('Customers') private readonly customerModel: Model<ICustomer>,
    ){}

    async createCustomer(customer: Customer) {
        return await this.customerModel(customer).save();
    }

    async getCustomers() {
        return await this.customerModel.find();
    }
}
