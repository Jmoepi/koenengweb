"use server";

import { contactSchema } from "@/lib/schemas";

export type ContactFormState = {
  message?: string | null;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    _form?: string[];
  };
  success?: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check your input.",
      success: false,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    // Simulate sending an email or saving to a database
    console.log("Contact Form Submission:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Example of a successful submission
    return {
      message: "Thank you for your message! We'll get back to you soon.",
      success: true,
    };

  } catch (e) {
    console.error("Error submitting contact form:", e);
    return {
      message: "An unexpected error occurred. Please try again later.",
      success: false,
      errors: { _form: ["Submission failed due to a server error."] }
    };
  }
}
