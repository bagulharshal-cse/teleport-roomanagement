import { ApiModelProperty } from '@nestjs/swagger';

export class Room {
    @ApiModelProperty() hotelId: string;
    @ApiModelProperty() roomNo: string;
    @ApiModelProperty() floorNo: number;
    @ApiModelProperty({ default: false }) isBooked: boolean;
    @ApiModelProperty() roomType: string;
    @ApiModelProperty() occupancyAdult: string;
    @ApiModelProperty() occupancyChild: string;
    @ApiModelProperty() roomDescription: string;
    @ApiModelProperty() photos: [];
    @ApiModelProperty({ default: 'available', enum: ['available', 'booked', 'out-of-service'] }) status: string;

}