import axios from 'axios';

export const register_me = async (formData: any, elevation: number) => {

    try {
        formData.address.elevation = elevation;
        let endpoint = formData.isSeller ? "/addSeller" : "/addCustomer";
        console.log(formData);
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`, JSON.stringify(formData),
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        return res;
    } catch (error) {
        throw new Error('error in register (service) => ' + error);
    }
}

export const upload_profile_photo = async (photo: File, email: string) => {

    try {
        var photoFormData = new FormData();
        photoFormData.append('profilePhoto', photo);

        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/uploadPhoto/profile`,
            photoFormData,
            {
                params: {
                    email: email,
                },
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

        return res;
    } catch (error) {
        throw new Error('error in register (service) => ' + error);
    }
}

export const login_me = async (formData: any) => {

    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/authenticate`, JSON.stringify(formData), {
            headers: {
                'Content-Type': 'application/json',
            },
        })

        return res;
    } catch (error) {
        throw new Error('error in login (service) => ' + error);
    }
}



export const forget_password = async (email: any) => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/forgotPassword`, {
            params:{ email }
        })

        return res;
    } catch (error) {
        throw new Error('error in forget Password (service) => ' + error);
    }
}

