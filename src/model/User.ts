export interface UserSchema {
    email: string,
    password: string,
    phoneNumber: string,
    customerID: string,
    sellerId: string, // will be populated if user is a seller.
    address: AddressSchema,
}

export interface UserSessionSchema {
    sub: string,
    role: string,
    iat?: number,
    exp?: number,
}

export interface CreateCustomerSchema {
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    shopSlug: string,
    profilePhoto?: string,
}

export interface CustomerSchema extends CreateCustomerSchema {
    _id: string,
}

export interface AddressSchema {
    address1: string,
    address2: string,
    district: string,
    city: string,
    state: string,
    pinCode: string,
    country: string,
    latitude: number,
    longitude: number,
}