
export interface IRoom {
    hotelId: string;
    roomNo: string;
    floorNo: number;
    isBooked: boolean;
    roomType: string;
    occupancyAdult: string;
    occupancyChild: string;
    roomDescription: string;
    photos: [];
    status: string;
}