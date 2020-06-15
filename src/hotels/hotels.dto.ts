import { ApiModelProperty } from '@nestjs/swagger';

// tslint:disable-next-line: max-classes-per-file
class Address {
    @ApiModelProperty() address: string;
    @ApiModelProperty() area: string;
    @ApiModelProperty() cityName: string;
    @ApiModelProperty() countryName: string;
    @ApiModelProperty() postalCode: number;
}

// tslint:disable-next-line: max-classes-per-file
export class Hotel {
    @ApiModelProperty() name: string;
    @ApiModelProperty() address: Address;
    @ApiModelProperty() amenities: [];
    @ApiModelProperty() totalNoOfRooms: number;
    @ApiModelProperty() totalNoOfBookedRooms: number;
    @ApiModelProperty() hotelDescription: string;
    @ApiModelProperty() rating: number;

}

