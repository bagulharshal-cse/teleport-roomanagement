import { ApiModelProperty } from '@nestjs/swagger';

class PromotionDetails {
    @ApiModelProperty({ default: false }) applied: boolean;
    @ApiModelProperty() promoCode: string;
    @ApiModelProperty() promoId: string;
}

// tslint:disable-next-line: max-classes-per-file
class CancellationDetails {
    @ApiModelProperty({ default: false }) allowCancellation: boolean;
    @ApiModelProperty({ default: 'non-refundable', enum: ['refundable', 'non-refundable'] }) policy: string;
    @ApiModelProperty() reason?: string;
    @ApiModelProperty() cancellationDate?: string;
}

// tslint:disable-next-line: max-classes-per-file
class Amount {
    @ApiModelProperty() value: number;
    @ApiModelProperty() unit: string;
}

// tslint:disable-next-line: max-classes-per-file
class GuestDetails {
    @ApiModelProperty() noOfGuest: number;
    @ApiModelProperty() noOfAdults: number;
    @ApiModelProperty() noOfChilds: number;
}

// tslint:disable-next-line: max-classes-per-file
export class Booking {
    @ApiModelProperty() hotelId: string;
    @ApiModelProperty() roomId: string;
    @ApiModelProperty() customerId: string;
    @ApiModelProperty() bookingAmount: Amount;
    @ApiModelProperty() guestDetails: GuestDetails;
    @ApiModelProperty() checkInDate: string;
    @ApiModelProperty() checkOutDate: string;
    @ApiModelProperty() bookingDate: string;
    @ApiModelProperty() transactionId: string;              // After Transaction Completed then Transaction ID will update
    @ApiModelProperty() promotionDetails?: PromotionDetails;
    @ApiModelProperty() cancellationDetails: CancellationDetails;
    @ApiModelProperty({ default: 'pending', enum: ['pending', 'confirm', 'expired'] }) status: string;
    @ApiModelProperty({ default: 'debit-card', enum: ['debit-card', 'cash', 'online-payment'] }) paymentMode: string;

}
