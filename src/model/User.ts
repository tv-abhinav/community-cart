export interface CreateUserSchema {
    email: string,
    password: string,
    phoneNumber: string,
    customerID: string,
    shopID: string, // will be populated if user is a seller.
    address: AddressSchema,
}

export interface UserSchema extends CreateUserSchema {
    _id: string,
}

export interface UserSessionSchema {
    email: string,
    role: string,
    _id: string,
    name: string
}

export interface CreateCustomerSchema {
    name: string,
    profilePhoto: string,
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
    postalCode: number,
    country: string,
    latitude: number,
    longitude: number,
}