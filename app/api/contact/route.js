// app/api/contact/route.js
import connectToDatabase from "@/lib/mongodb";
import Contact from "@/models/Contactmodel";

export async function POST(req) {
  try {
    console.log("Connecting to MongoDB...");
    await connectToDatabase();
    console.log("Connected to MongoDB");

    const {
      firstName,
      lastName,
      email,
      subject,
      message,
      servicesInterested,
    } = await req.json();

    console.log("Received form data:", {
      firstName,
      lastName,
      email,
      subject,
      message,
      servicesInterested,
    });

    // Validate data
    if (
      !firstName ||
      !lastName ||
      !email ||
      !subject ||
      !message ||
      !Array.isArray(servicesInterested) ||
      servicesInterested.length === 0
    ) {
      return new Response(
        JSON.stringify({ error: "All fields are required, including services." }),
        { status: 400 }
      );
    }

    // Save to database
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      subject,
      message,
      servicesInterested,
    });

    await newContact.save();
    console.log("Data saved successfully!");

    return new Response(
      JSON.stringify({ message: "Message sent successfully!" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in API:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
