import { ApiModelProperty } from '@nestjs/swagger';


class Address {
    @ApiModelProperty() address: string;
    @ApiModelProperty() area: string;
    @ApiModelProperty() cityName: string;
    @ApiModelProperty() countryName: string;
    @ApiModelProperty() postalCode: number;
}

// tslint:disable-next-line: max-classes-per-file
export class Customer {
    @ApiModelProperty() name: string;
    @ApiModelProperty() email: string;
    @ApiModelProperty() contactNo: string;
    @ApiModelProperty({ enum: ['male', 'female', 'unknown'] }) gender: string;
    @ApiModelProperty() nationality: string;
    @ApiModelProperty({ enum: ['passport', 'mykad', 'driving-licence'] }) identityType: string;
    @ApiModelProperty() IdentityNo: string;
    @ApiModelProperty() dob: string;
    @ApiModelProperty() address: Address;
}