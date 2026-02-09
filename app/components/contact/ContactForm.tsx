"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/app/lib/utils";
import ElectricButton from "../ui/ElectricButton";
import ElectricBorder from "../ui/ElectricBorder";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.businessType) newErrors.businessType = "Business type is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        businessType: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="relative p-8 rounded-2xl bg-muted backdrop-blur-xl border border-primary/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-muted-foreground mb-2">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-3 rounded-lg bg-muted border text-foreground placeholder-muted-foreground",
              "focus:outline-none focus:ring-2 focus:ring-primary",
              errors.firstName ? "border-red-500" : "border-primary/30"
            )}
            placeholder="John"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-muted-foreground mb-2">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-3 rounded-lg bg-muted border text-foreground placeholder-muted-foreground",
              "focus:outline-none focus:ring-2 focus:ring-primary",
              errors.lastName ? "border-red-500" : "border-primary/30"
            )}
            placeholder="Doe"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-3 rounded-lg bg-muted border text-foreground placeholder-muted-foreground",
              "focus:outline-none focus:ring-2 focus:ring-primary",
              errors.email ? "border-red-500" : "border-primary/30"
            )}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-3 rounded-lg bg-muted border text-foreground placeholder-muted-foreground",
              "focus:outline-none focus:ring-2 focus:ring-primary",
              errors.phone ? "border-red-500" : "border-primary/30"
            )}
            placeholder="(210) 555-1234"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="businessType" className="block text-sm font-medium text-muted-foreground mb-2">
          Business Type *
        </label>
        <select
          id="businessType"
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          className={cn(
            "w-full px-4 py-3 rounded-lg bg-muted border text-foreground",
            "focus:outline-none focus:ring-2 focus:ring-primary",
            errors.businessType ? "border-red-500" : "border-primary/30"
          )}
        >
          <option value="">Select business type</option>
          <option value="bar">Bar/Restaurant</option>
          <option value="retail">Retail Store</option>
          <option value="gas-station">Gas Station</option>
          <option value="convenience">Convenience Store</option>
          <option value="other">Other</option>
        </select>
        {errors.businessType && (
          <p className="mt-1 text-sm text-red-500">{errors.businessType}</p>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={cn(
            "w-full px-4 py-3 rounded-lg bg-muted border text-foreground placeholder-muted-foreground resize-none",
            "focus:outline-none focus:ring-2 focus:ring-primary",
            errors.message ? "border-red-500" : "border-primary/30"
          )}
          placeholder="Tell us about your business and how we can help..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <ElectricBorder sparks={true} color="#00B4D8" className="w-full">
        <button
          type="submit"
          className="w-full bg-primary text-background px-10 py-5 rounded-xl font-bold text-xl transition-all hover:bg-primary/90"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(e as any);
          }}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <motion.div
                className="w-5 h-5 border-2 border-background border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              Submitting...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Send className="w-5 h-5" />
              Request Free Consultation
            </span>
          )}
        </button>
      </ElectricBorder>

      <AnimatePresence>
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 p-4 rounded-lg bg-success-green/20 border border-success-green/50 flex items-center gap-2 text-success-green"
          >
            <CheckCircle className="w-5 h-5" />
            <span>Thank you! We'll be in touch soon.</span>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 p-4 rounded-lg bg-red-500/20 border border-red-500/50 flex items-center gap-2 text-red-400"
          >
            <AlertCircle className="w-5 h-5" />
            <span>Please check the form and try again.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
