
export const register_me = async (formData: any) => {

    try {
        // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/register`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        // })
        // const data = res.json();
        console.log(formData);
        const data = {
            success: true,
            message: "User Registered"
        }
        return data;
    } catch (error) {
        throw new Error('error in register (service) => ' + error);
        // console.log('error in register (service) => ', error);
    }
}

export const login_me = async (formData: any) => {

    try {
        // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        // })
        // const data = res.json();
        console.log(formData);
        const data = {
            success: true,
            message: "User logged in",
            finalData: { token: "test_token", user: { email: "abcd1234@gmail.com", name: "Abcd", _id: "1234", role: "user" } }
        }
        return data;
    } catch (error) {
        throw new Error('error in login (service) => ' + error);
        // console.log('error in login (service) => ', error);
    }
}



export const forget_password = async (formData: any) => {
    try {
        // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/forgetPassword`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        // })
        // const data = res.json();
        console.log(formData);
        const data = { success: true, message: "Password Updated Successfully"  };
        return data;
    } catch (error) {
        throw new Error('error in forget Password (service) => ' + error);
        // console.log('error in forget Password (service) => ', error);
    }
}

