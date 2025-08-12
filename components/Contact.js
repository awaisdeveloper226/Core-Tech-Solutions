"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

const services = [
  "Web Development",
  "App Development",
  "SEO Services",
  "Automation",
];

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    servicesInterested: [],
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [serviceError, setServiceError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { id, value, checked } = e.target;

    if (id === "servicesInterested") {
      const updatedServices = checked
        ? [...form.servicesInterested, value]
        : form.servicesInterested.filter((s) => s !== value);
      setForm({ ...form, servicesInterested: updatedServices });
      if (updatedServices.length > 0) setServiceError("");
    } else {
      setForm({ ...form, [id]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");
    setErrorMessage("");

    if (form.servicesInterested.length === 0) {
      setServiceError("Please select at least one service.");
      return;
    }

    setServiceError("");
    setLoading(true);

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

      setResponseMessage(
        data.message ||
          "Thank you for reaching out. We'll get back to you shortly."
      );

      // Show the modal on success
      setShowModal(true);

      // Clear the form
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
        servicesInterested: [],
      });
    } catch (error) {
      setErrorMessage(
        error.message || "Failed to send message. Please try again later."
      );
    }

    setLoading(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setResponseMessage("");
    setErrorMessage("");
  };

  return (
    <section
      className="py-32 bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-700"
      id="contact"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:gap-24 gap-16 justify-center items-start">
          {/* Left: Contact Info & Intro */}
          <div className="max-w-md text-center lg:text-left space-y-10">
            <h1 className="text-5xl font-extrabold text-white leading-tight">
              Let's Build Your Digital Success Together
            </h1>
            <p className="text-lg text-indigo-200">
              Ready to grow your business with expert Web, App, SEO, and
              Automation solutions? Tell us what you need, and our team at
              CoreTech Solutions will craft a custom plan just for you.
            </p>

            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 shadow-lg space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="text-white w-6 h-6" />
                <Link
                  href="tel:+923001234567"
                  className="text-white font-semibold hover:underline"
                >
                  +92 300 1234567
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-white w-6 h-6" />
                <Link
                  href="mailto:info@coretechsolutions.com"
                  className="text-white font-semibold hover:underline"
                >
                  info@coretechsolutions.com
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-xl mx-auto space-y-8"
            noValidate
          >
            <div className="flex gap-6 flex-col lg:flex-row">
              <div className="flex-1">
                <Label
                  htmlFor="firstName"
                  className="text-gray-800 font-semibold text-lg"
                >
                  First Name
                </Label>
                <Input
                  type="text"
                  id="firstName"
                  placeholder="John"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="mt-2 p-4 rounded-lg border border-gray-300 focus:ring-4 focus:ring-indigo-500 focus:outline-none transition"
                />
              </div>
              <div className="flex-1">
                <Label
                  htmlFor="lastName"
                  className="text-gray-800 font-semibold text-lg"
                >
                  Last Name
                </Label>
                <Input
                  type="text"
                  id="lastName"
                  placeholder="Doe"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="mt-2 p-4 rounded-lg border border-gray-300 focus:ring-4 focus:ring-indigo-500 focus:outline-none transition"
                />
              </div>
            </div>

            <div>
              <Label
                htmlFor="email"
                className="text-gray-800 font-semibold text-lg"
              >
                Email Address
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-2 p-4 rounded-lg border border-gray-300 focus:ring-4 focus:ring-indigo-500 focus:outline-none transition"
              />
            </div>

            <div>
              <Label
                htmlFor="subject"
                className="text-gray-800 font-semibold text-lg"
              >
                Subject
              </Label>
              <Input
                type="text"
                id="subject"
                placeholder="Brief description"
                value={form.subject}
                onChange={handleChange}
                required
                className="mt-2 p-4 rounded-lg border border-gray-300 focus:ring-4 focus:ring-indigo-500 focus:outline-none transition"
              />
            </div>

            {/* Services Selection */}
            <div>
              <Label className="text-gray-800 font-semibold text-lg mb-3 block">
                Services of Interest{" "}
                <span className="text-gray-500 text-sm font-normal">
                  (select one or more)
                </span>
              </Label>
              <div className="flex flex-wrap gap-3">
                {services.map((service) => (
                  <label
                    key={service}
                    className={`cursor-pointer rounded-full border px-6 py-2 text-gray-700 font-semibold select-none transition
                      hover:bg-indigo-100 focus-within:ring-4 focus-within:ring-indigo-500
                      ${
                        form.servicesInterested.includes(service)
                          ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                          : "border-gray-300 bg-white"
                      }`}
                  >
                    <input
                      type="checkbox"
                      id="servicesInterested"
                      value={service}
                      checked={form.servicesInterested.includes(service)}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    {service}
                  </label>
                ))}
              </div>
              {serviceError && (
                <p className="mt-2 text-red-600 font-medium flex items-center gap-2">
                  <XCircle className="w-5 h-5" /> {serviceError}
                </p>
              )}
            </div>

            <div>
              <Label
                htmlFor="message"
                className="text-gray-800 font-semibold text-lg"
              >
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Share your ideas or questions..."
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="mt-2 p-4 rounded-lg border border-gray-300 focus:ring-4 focus:ring-indigo-500 focus:outline-none transition"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-indigo-600 text-white py-4 rounded-xl shadow-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500 transition"
              disabled={loading}
            >
              {loading ? "Placing Your Order…" : "Place My Order Now"}
            </Button>

            {errorMessage && (
              <p
                role="alert"
                className="mt-5 flex items-center gap-2 justify-center text-red-600 font-semibold text-lg select-text"
              >
                <XCircle className="w-6 h-6" /> {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div
          aria-modal="true"
          role="dialog"
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
        >
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-10 text-center space-y-6">
            <CheckCircle className="mx-auto text-green-600 w-16 h-16" />
            <h2 className="text-3xl font-extrabold text-gray-900">
              Success!
            </h2>
            <p className="text-gray-700 text-lg">
              Your order has been successfully placed. We will contact you soon
              to discuss the next steps and bring your project to life.
            </p>
            <Button
              onClick={closeModal}
              className="bg-indigo-600 text-white py-3 px-8 rounded-xl shadow-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500 transition"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
