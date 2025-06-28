"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setResponseMessage(data.message);
      setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    } catch (error) {
      setErrorMessage(error.message);
    }

    setLoading(false);
  };

  return (
    <section className="py-32 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"  id="contact">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-24">
          {/* Left Side Text Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Get in Touch with Us
            </h1>
            <p className="text-lg text-white opacity-90">
              We are always here to help! Whether you have a question, feedback, or a project in mind, reach out to us.
            </p>
          </div>

          {/* Right Side Form Section */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl mx-auto lg:mx-0 space-y-6">
            <div className="flex gap-6 flex-col lg:flex-row">
              <div className="w-full">
                <Label htmlFor="firstName" className="text-lg font-medium text-gray-700">First Name</Label>
                <Input 
                  type="text" 
                  id="firstName" 
                  placeholder="John"
                  value={form.firstName} 
                  onChange={handleChange} 
                  required 
                  className="mt-2 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="w-full">
                <Label htmlFor="lastName" className="text-lg font-medium text-gray-700">Last Name</Label>
                <Input 
                  type="text" 
                  id="lastName" 
                  placeholder="Doe"
                  value={form.lastName} 
                  onChange={handleChange} 
                  required 
                  className="mt-2 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-lg font-medium text-gray-700">Email</Label>
              <Input 
                type="email" 
                id="email" 
                placeholder="example@mail.com"
                value={form.email} 
                onChange={handleChange} 
                required 
                className="mt-2 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <Label htmlFor="subject" className="text-lg font-medium text-gray-700">Subject</Label>
              <Input 
                type="text" 
                id="subject" 
                placeholder="Subject"
                value={form.subject} 
                onChange={handleChange} 
                required 
                className="mt-2 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-lg font-medium text-gray-700">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Write your message here..." 
                value={form.message} 
                onChange={handleChange} 
                required 
                className="mt-2 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-indigo-600 text-white py-3 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>

            {/* Success and Error Messages */}
            {responseMessage && <p className="text-center text-green-500">{responseMessage}</p>}
            {errorMessage && <p className="text-center text-red-500">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
