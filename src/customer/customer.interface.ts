

interface IAddress {
    address: string;
    area: string;
    cityName: string;
    countryName: string;
    postalCode: number;
}


export interface ICustomer {
    name: string;
    email: string;
    contactNo: string;
    gender: string;
    nationality: string;
    identityType: string;
    IdentityNo: string;
    dob: string;
    address: IAddress;
}