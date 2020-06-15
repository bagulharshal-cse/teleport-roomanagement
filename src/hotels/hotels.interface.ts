

interface IAddress {
    address: string;
    area: string;
    cityName: string;
    countryName: string;
    postalCode: number;
}

export class IHotel {
    name: string;
    address: IAddress;
    amenities: [];
    totalNoOfRooms: number;
    totalNoOfBookedRooms: number;
    hotelDescription: string;
    rating: number;

}