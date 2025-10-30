"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  CheckCircle2, 
  XCircle, 
  Send, 
  Loader2,
  Clock,
  ArrowRight,
  Briefcase
} from "lucide-react";
import Link from "next/link";

const services = [
  { name: "Web Development", description: "Custom websites & web applications" },
  { name: "App Development", description: "Mobile & desktop applications" },
  { name: "SEO Services", description: "Search engine optimization" },
  { name: "Automation", description: "Business process automation" },
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
  const [fieldErrors, setFieldErrors] = useState({});
  const [serviceError, setServiceError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        return value.trim().length < 2 ? 'Must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'subject':
        return value.trim().length < 5 ? 'Subject must be at least 5 characters' : '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

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
      
      const error = validateField(id, value);
      setFieldErrors(prev => ({
        ...prev,
        [id]: error
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");
    setErrorMessage("");

    const errors = {};
    Object.keys(form).forEach(key => {
      if (key !== 'servicesInterested') {
        const error = validateField(key, form[key]);
        if (error) errors[key] = error;
      }
    });

    if (form.servicesInterested.length === 0) {
      setServiceError("Please select at least one service to continue.");
      return;
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setServiceError("");
    setFieldErrors({});
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

      setShowModal(true);

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
    <section className="relative py-12 md:py-24 lg:py-32 overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-pink-500 rounded-full filter blur-xl animate-pulse"></div>
        </div>
      </div>

      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
          <div className="space-y-6 md:space-y-8 lg:sticky lg:top-8">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-medium text-white">Get in Touch</span>
                <ArrowRight className="ml-2 w-4 h-4 text-white" />
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Let&apos;s Build Your
                <span className="block bg-gradient-to-r from-pink-300 to-yellow-300 bg-clip-text text-transparent">
                  Digital Success
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-indigo-100 leading-relaxed max-w-lg">
                Ready to transform your business with cutting-edge digital solutions? 
                Our expert team crafts custom strategies tailored to your unique goals.
              </p>
            </div>

            <div className="grid gap-3 sm:gap-4">
              <div className="group bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-indigo-500 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-indigo-200">Call us directly</p>
                    <Link
                      href="https://wa.me/923295423064"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-semibold text-base sm:text-lg hover:text-indigo-200 transition-colors"
                    >
                      +92 329 5423 064
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-purple-500 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-indigo-200">Email us</p>
                    <Link
                      href="mailto:awais.web.developer124@gmail.com"
                      className="text-white font-semibold text-base sm:text-lg hover:text-indigo-200 transition-colors"
                    >
                      contact@coretechsolutions.org
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-pink-500 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-indigo-200">Response time</p>
                    <p className="text-white font-semibold text-base sm:text-lg">Within 2-4 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 backdrop-blur-sm border border-white/10"
              noValidate
            >
              <div className="text-center mb-4 sm:mb-6 md:mb-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                  Start Your Project
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Fill out the form below and we&apos;ll get back to you within 24 hours
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="firstName" className="text-sm sm:text-base text-gray-800 font-semibold">
                    First Name *
                  </Label>
                  <Input
                    type="text"
                    id="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all duration-200 ${
                      fieldErrors.firstName 
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                        : 'border-gray-200 focus:border-indigo-500 focus:ring-indigo-100'
                    }`}
                    placeholder="John"
                  />
                  {fieldErrors.firstName && (
                    <p className="text-red-600 text-xs sm:text-sm flex items-center gap-1">
                      <XCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                      {fieldErrors.firstName}
                    </p>
                  )}
                </div>
                
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="lastName" className="text-sm sm:text-base text-gray-800 font-semibold">
                    Last Name *
                  </Label>
                  <Input
                    type="text"
                    id="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all duration-200 ${
                      fieldErrors.lastName 
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                        : 'border-gray-200 focus:border-indigo-500 focus:ring-indigo-100'
                    }`}
                    placeholder="Doe"
                  />
                  {fieldErrors.lastName && (
                    <p className="text-red-600 text-xs sm:text-sm flex items-center gap-1">
                      <XCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                      {fieldErrors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <Label htmlFor="email" className="text-sm sm:text-base text-gray-800 font-semibold">
                  Email Address *
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all duration-200 ${
                    fieldErrors.email 
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                      : 'border-gray-200 focus:border-indigo-500 focus:ring-indigo-100'
                  }`}
                  placeholder="john@example.com"
                />
                {fieldErrors.email && (
                  <p className="text-red-600 text-xs sm:text-sm flex items-center gap-1">
                    <XCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                    {fieldErrors.email}
                  </p>
                )}
              </div>

              <div className="space-y-1 sm:space-y-2">
                <Label htmlFor="subject" className="text-sm sm:text-base text-gray-800 font-semibold">
                  Subject *
                </Label>
                <Input
                  type="text"
                  id="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all duration-200 ${
                    fieldErrors.subject 
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                      : 'border-gray-200 focus:border-indigo-500 focus:ring-indigo-100'
                  }`}
                  placeholder="What can we help you with?"
                />
                {fieldErrors.subject && (
                  <p className="text-red-600 text-xs sm:text-sm flex items-center gap-1">
                    <XCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                    {fieldErrors.subject}
                  </p>
                )}
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                    Services of Interest *
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Select one or more services that align with your business needs
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {services.map((service) => {
                    const isSelected = form.servicesInterested.includes(service.name);
                    return (
                      <label
                        key={service.name}
                        className={`group relative cursor-pointer rounded-lg sm:rounded-xl border-2 p-3 sm:p-4 transition-all duration-200 hover:shadow-sm ${
                          isSelected
                            ? "border-indigo-500 bg-indigo-50 shadow-sm"
                            : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <span className={`block text-xs sm:text-sm font-semibold ${
                              isSelected ? "text-indigo-900" : "text-gray-900"
                            }`}>
                              {service.name}
                            </span>
                            <span className={`block text-xs mt-1 ${
                              isSelected ? "text-indigo-600" : "text-gray-500"
                            }`}>
                              {service.description}
                            </span>
                          </div>

                          <div className={`ml-2 sm:ml-3 transition-colors duration-200 ${
                            isSelected ? "text-indigo-600" : "text-gray-400"
                          }`}>
                            {isSelected ? (
                              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                            ) : (
                              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-current group-hover:border-gray-500" />
                            )}
                          </div>
                        </div>

                        <input
                          type="checkbox"
                          id="servicesInterested"
                          value={service.name}
                          checked={isSelected}
                          onChange={handleChange}
                          className="sr-only"
                        />
                      </label>
                    );
                  })}
                </div>

                {serviceError && (
                  <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-red-50 border-2 border-red-200 rounded-lg sm:rounded-xl">
                    <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-red-700 font-medium">
                      {serviceError}
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-1 sm:space-y-2">
                <Label htmlFor="message" className="text-sm sm:text-base text-gray-800 font-semibold">
                  Project Details *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project, goals, timeline, or any specific requirements..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all duration-200 resize-none ${
                    fieldErrors.message 
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                      : 'border-gray-200 focus:border-indigo-500 focus:ring-indigo-100'
                  }`}
                />
                {fieldErrors.message && (
                  <p className="text-red-600 text-xs sm:text-sm flex items-center gap-1">
                    <XCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                    Placing Your Order...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                    Place Your Order
                  </div>
                )}
              </Button>

              {errorMessage && (
                <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-red-50 border-2 border-red-200 rounded-lg sm:rounded-xl">
                  <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0" />
                  <p className="text-xs sm:text-sm sm:text-base text-red-700 font-medium">{errorMessage}</p>
                </div>
              )}

              <div className="text-center text-xs sm:text-sm text-gray-500">
                By submitting this form, you agree to our privacy policy and terms of service.
              </div>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          aria-modal="true"
          role="dialog"
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl max-w-md w-full p-6 sm:p-8 text-center space-y-4 sm:space-y-6">
            <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
            </div>
            
            <div className="space-y-1 sm:space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Success!</h2>
              <p className="text-sm sm:text-base text-gray-600">
                Thank you for reaching out. We&apos;ve received your order and will get back to you within 2-4 hours.
              </p>
            </div>
            
            <Button
              onClick={closeModal}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold transition-colors"
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