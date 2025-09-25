import axios from "axios";

const ZERO_BOUNCE_API_KEY = process.env.ZERO_BOUNCE_API_KEY;

export const validateEmail = async (email: string): Promise<boolean> => {
  try {
    const response = await axios.get(
      `https://api.zerobounce.net/v2/validate?api_key=${ZERO_BOUNCE_API_KEY}&email=${email}`
    );
    return response.data.status === "valid";
  } catch (error) {
    console.error("Error validating email:", error);
    return false;
  }
};
