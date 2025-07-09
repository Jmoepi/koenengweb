
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

  // ** Email Sending Logic Placeholder **
  // To make this form send an actual email, you'll need to:
  // 1. Choose an email sending service/library (e.g., Resend, Nodemailer, SendGrid).
  // 2. Install the required package (e.g., `npm install resend`).
  // 3. Configure it with your API keys (use environment variables for security, e.g., process.env.RESEND_API_KEY).
  // 4. Implement the email sending logic below, replacing the simulation.

  const yourReceivingEmail = "koenenghub@gmail.com"; // Your email address

  try {
    // --- START OF ACTUAL EMAIL SENDING LOGIC (conceptual example using Resend) ---
    //
    // Example (ensure you have `resend` installed and configured):
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // const { data, error: emailError } = await resend.emails.send({
    //   from: 'Koeneng Hub Contact <your-verified-sending-email@example.com>', // Replace with your verified sending domain/email
    //   to: [yourReceivingEmail],
    //   subject: `New Contact Form Submission from ${name}`,
    //   reply_to: email, // User's email as reply-to
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message.replace(/\n/g, "<br>")}</p>
    //   `,
    // });
    //
    // if (emailError) {
    //   console.error("Email sending error:", emailError);
    //   throw new Error("Failed to send email due to service error."); // This will be caught below
    // }
    //
    // console.log("Email sent successfully:", data);
    // --- END OF ACTUAL EMAIL SENDING LOGIC ---

    // For now, we'll just log it and simulate success:
    console.log("Contact Form Submission (Simulated Email Send):");
    console.log(`To: ${yourReceivingEmail}`);
    console.log(`From: ${name} <${email}>`);
    console.log(`Message: ${message}`);
    
    // Simulate network delay for the email sending process
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      message: "Thank you for your message! We'll get back to you soon.",
      success: true,
    };

  } catch (e: any) {
    console.error("Error in contact form submission process:", e);
    // This condition would be met if the actual email sending logic (when implemented) throws an error
    if (e.message && e.message.includes("Failed to send email")) {
       return {
        message: "Your message was validated, but we couldn't send it at this time. Please try again later.",
        success: false,
        errors: { _form: ["Email sending failed."] }
      };
    }
    // Generic error for other unexpected issues
    return {
      message: "An unexpected error occurred. Please try again later.",
      success: false,
      errors: { _form: ["An unexpected server error occurred during submission."] }
    };
  }
}
