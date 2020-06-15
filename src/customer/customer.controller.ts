import { CustomerService } from './customer.service';
import { Controller, Post, Res, Body, Get, HttpStatus } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Customer } from './customer.dto';
import { Request, Response } from 'express';
import { ResponseService } from '../response/response.service';

@ApiUseTags('Customers')
@Controller('customer')
export class CustomerController {

    constructor(
        private readonly customerService: CustomerService,
        private readonly responseService: ResponseService,
    ) { }

    @Post('/')
    async createCustomer(
        @Res() response: Response,
        @Body() customerBody: Customer,
    ) {
        try {
            const customer = await this.customerService.createCustomer(customerBody);
            return this.responseService.sendDataResponse(response, customer);
        } catch (error) {
            return this.responseService.internalServerError(response);
        }
    }

    @Get('/')
    async getCustomers(
        @Res() response: Response,
    ) {
        try {
            const customers = await this.customerService.getCustomers();
            if (customers.length > 0) {
                return this.responseService.sendDataResponse(response, customers);
            }
            return this.responseService.recordNotFoundError(response);

        } catch (error) {
            return this.responseService.internalServerError(response);
        }
    }
}
