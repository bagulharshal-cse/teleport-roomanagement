

interface IPromotionDetails {
    applied: boolean;
    promoCode: string;
    promoId: string;
}


interface ICancellationDetails {
    allowCancellation: boolean;
    policy: string;
    reason?: string;
    cancellationDate?: string;
}

interface IAmount {
    value: number;
    unit: string;
}

interface IGuestDetails {
    noOfGuest: number;
    noOfAdults: number;
    noOfChilds: number;
}


export interface IBooking {
    bookingId: string;
    hotelId: string;
    roomId: string;
    customerId: string;
    bookingAmount: IAmount;
    guestDetails: IGuestDetails;
    checkInDate: string;
    checkOutDate: string;
    bookingDate: string;
    transactionId: string;
    promotionDetails?: IPromotionDetails;
    cancellationDetails: ICancellationDetails;
    status: string;
    paymentMode: string;

}