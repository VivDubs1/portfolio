"use client";
import React, { useState } from "react";
import { trackEvent } from '@/lib/analytics';

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("");
    try {
      const response = await fetch("https://formspree.io/f/xvgbvkop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.value,
          email: formData.email.value,
          message: formData.message.value,
        }),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData(defaultFormState);
        // Track successful form submission
        trackEvent('contact_form_submission', { status: 'success' });
      } else {
        setStatus("Failed to send message. Please try again later.");
        // Track failed form submission
        trackEvent('contact_form_submission', { status: 'failed' });
      }
    } catch (error) {
      setStatus("Failed to send message. Please try again later.");
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.name.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
        <input
          type="email"
          placeholder="Your email address"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.email.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <button
        className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500"
        type="submit"
        onClick={() => trackEvent('button_click', { button: 'contact_submit' })}
      >
        Submit{" "}
      </button>
      {status && (
        <p className="mt-4 text-center text-sm font-semibold text-primary">
          {status}
        </p>
      )}
    </form>
  );
};
