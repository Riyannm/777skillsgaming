"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/app/lib/utils";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
}

const inputBase =
  "w-full px-4 py-3 rounded-lg bg-background border text-foreground placeholder:text-muted-foreground text-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 disabled:opacity-50 disabled:cursor-not-allowed";

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
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!formData.firstName.trim()) e.firstName = "Required";
    if (!formData.lastName.trim()) e.lastName = "Required";
    if (!formData.email.trim()) {
      e.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = "Invalid email";
    }
    if (!formData.phone.trim()) {
      e.phone = "Required";
    } else if (!/^[\d\s\-\(\)\+]+$/.test(formData.phone)) {
      e.phone = "Invalid number";
    }
    if (!formData.businessType) e.businessType = "Required";
    if (!formData.message.trim()) e.message = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, honeypot: "" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");

      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", businessType: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === "success") {
    return (
      <div className="p-10 rounded-2xl border border-success/30 bg-success/5 text-center">
        <div className="w-14 h-14 rounded-full bg-success/15 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-7 h-7 text-success" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
        <p className="text-muted-foreground text-sm mb-6">
          We received your inquiry and will be in touch within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-primary underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users, bots fill it */}
      <input
        type="text"
        name="honeypot"
        aria-hidden="true"
        tabIndex={-1}
        className="absolute -left-[9999px] opacity-0 pointer-events-none"
        autoComplete="off"
      />

      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">
            First Name <span className="text-primary">*</span>
          </label>
          <input
            id="firstName" name="firstName" type="text"
            value={formData.firstName} onChange={handleChange}
            placeholder="John"
            disabled={isSubmitting}
            className={cn(inputBase, errors.firstName ? "border-destructive" : "border-border")}
          />
          {errors.firstName && <p className="mt-1 text-xs text-destructive">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">
            Last Name <span className="text-primary">*</span>
          </label>
          <input
            id="lastName" name="lastName" type="text"
            value={formData.lastName} onChange={handleChange}
            placeholder="Doe"
            disabled={isSubmitting}
            className={cn(inputBase, errors.lastName ? "border-destructive" : "border-border")}
          />
          {errors.lastName && <p className="mt-1 text-xs text-destructive">{errors.lastName}</p>}
        </div>
      </div>

      {/* Email / Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="email" name="email" type="email"
            value={formData.email} onChange={handleChange}
            placeholder="john@business.com"
            disabled={isSubmitting}
            className={cn(inputBase, errors.email ? "border-destructive" : "border-border")}
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">
            Phone <span className="text-primary">*</span>
          </label>
          <input
            id="phone" name="phone" type="tel"
            value={formData.phone} onChange={handleChange}
            placeholder="(210) 555-1234"
            disabled={isSubmitting}
            className={cn(inputBase, errors.phone ? "border-destructive" : "border-border")}
          />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>

      {/* Business type */}
      <div>
        <label htmlFor="businessType" className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">
          Business Type <span className="text-primary">*</span>
        </label>
        <select
          id="businessType" name="businessType"
          value={formData.businessType} onChange={handleChange}
          disabled={isSubmitting}
          className={cn(inputBase, errors.businessType ? "border-destructive" : "border-border")}
        >
          <option value="">Select your business type</option>
          <option value="Bar/Restaurant">Bar / Restaurant</option>
          <option value="Retail Store">Retail Store</option>
          <option value="Gas Station">Gas Station</option>
          <option value="Convenience Store">Convenience Store</option>
          <option value="Other">Other</option>
        </select>
        {errors.businessType && <p className="mt-1 text-xs text-destructive">{errors.businessType}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="message" name="message"
          value={formData.message} onChange={handleChange}
          rows={5}
          placeholder="Tell us about your business and what you're looking for..."
          disabled={isSubmitting}
          className={cn(inputBase, "resize-none", errors.message ? "border-destructive" : "border-border")}
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>

      {/* Error banner */}
      {status === "error" && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {errorMessage || "Something went wrong. Please try again."}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base bg-primary text-background hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Request Free Consultation
          </>
        )}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        We typically respond within 24 hours · No spam, ever.
      </p>
    </form>
  );
}
