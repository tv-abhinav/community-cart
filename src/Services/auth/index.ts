import axios from 'axios';

export const register_me = async (formData: any) => {

    try {
        console.log(formData);
        let endpoint = formData.isSeller ? "/addSeller" : "/addCustomer";

        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`, JSON.stringify(formData),
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log(res.data);
        // const data = {
        //     success: true,
        //     message: "User Registered"
        // }
        return res;
    } catch (error) {
        throw new Error('error in register (service) => ' + error);
        // console.log('error in register (service) => ', error);
    }
}

export const upload_profile_photo = async (photo: File, email: string) => {

    try {
        var photoFormData = new FormData();
        photoFormData.append('profilePhoto', photo);
        console.log(photoFormData);

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
        console.log(res.data);
        // const data = {
        //     success: true,
        //     message: "User Registered"
        // }
        return res;
    } catch (error) {
        throw new Error('error in register (service) => ' + error);
        // console.log('error in register (service) => ', error);
    }
}

export const login_me = async (formData: any) => {

    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/authenticate`, JSON.stringify(formData), {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        // console.log(formData);
        // const data = {
        //     success: true,
        //     message: "User logged in",
        //     finalData: { token: "test_token", user: { email: "abcd1234@gmail.com", name: "Abcd", _id: "1234", role: "user" } }
        // }
        return res;
    } catch (error) {
        throw new Error('error in login (service) => ' + error);
        // console.log('error in login (service) => ', error);
    }
}



export const forget_password = async (formData: any) => {
    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/forgetPassword`, JSON.stringify(formData))
        // const data = res.json();
        console.log(formData);
        // const data = { success: true, message: "Password Updated Successfully" };
        return res;
    } catch (error) {
        throw new Error('error in forget Password (service) => ' + error);
        // console.log('error in forget Password (service) => ', error);
    }
}

