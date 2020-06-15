import { HttpStatus, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class ResponseService {

    public internalServerError(
        response: Response,
        message: string = 'Something went wrong',
    ) {
        this.responseMessage(
            response,
            HttpStatus.INTERNAL_SERVER_ERROR,
            message,
            HttpStatus.INTERNAL_SERVER_ERROR,
        );
    }

    public recordNotFoundError(
        response: Response,
        message: string = 'Record not found',
    ) {
        this.responseMessage(
            response,
            HttpStatus.OK,
            message,
            HttpStatus.NO_CONTENT,
        );
    }


    public sendDataResponse(
        response: Response,
        data: any,
        statusCode: number = HttpStatus.OK,
    ) {
        response.status(statusCode).json({
            data,
            statusCode,
        });
    }

    public responseMessage(
        response: Response,
        headerStatusCode: number,
        message: string,
        responseCode: number,
    ) {
        response.status(headerStatusCode).json({
            message,
            statusCode: responseCode,
        });
    }
}
