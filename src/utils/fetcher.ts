import axios from "axios";

export const fetcher = async (endpoint: string) => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`);
      return res;
    } catch (error) {
      throw new Error('Error in fetching (service) =>' + error)
    }
  }