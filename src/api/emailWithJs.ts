import axios from "axios";
import type { TContactFormSchema } from "../lib/contact-form-types";
import { validateEmail } from "./emailValidator";

// Load EmailJS service ID, template ID, and public key from environment variables (set in .env file)
const service_id = "service_vzbjq97";
const template_id = "template_goyfhbk";
const EMAIL_JS_PUBLIC_KEY = "BRl1Jh8Ni6WnpZQdB";

export const sendEmailWithEmailjs = async (data: TContactFormSchema) => {
  // Validate email address using emailValidator function before sending the email with EmailJS
  const isEmailValid = await validateEmail(data.email);
  if (!isEmailValid) {
    throw new Error("Email address is invalid");
  }

  // Send email using EmailJS REST API
  try {
    const response = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        service_id: service_id,
        template_id: template_id,
        user_id: EMAIL_JS_PUBLIC_KEY,
        template_params: data,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
};
