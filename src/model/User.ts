export interface UserSchema {
    email: string,
    password: string,
    phoneNumber: string,
    customerID: string,
    shopID: string, // will be populated if user is a seller.
    addressID: string,
}

export interface CustomerSchema {
    name: string,
    profilePhoto: string,
}

export interface AddressSchema {
    address1: string,
    address2: string,
    district: string,
    city: string,
    state: string,
    postalCode: number,
    country: string,
    latitude: number,
    longitude: number,
}