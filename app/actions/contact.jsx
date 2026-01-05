// app/actions/contact.jsx

export async function submitContactForm(prevState, formData) {
  // prevState is the { success: false } object
  // formData is the actual form submission data
  
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Add your logic (e.g., sending an email or saving to DB)
  console.log({ name, email, message });

  // Return the new state
  return {
    success: true,
  };
}