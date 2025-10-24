"use client";

import { useState } from "react";

export interface CustomPlanFormData {
  marathonDate: string;
  trainingWeeks: number;
  currentWeeklyMiles: number;
  maxWeeklyMiles: number;
  daysPerWeek: number;
  goalTime: string;
  email: string;
  firstName: string;
  lastName: string;
  marketingConsent: boolean;
}

interface CustomPlanFormProps {
  onSubmit: (data: CustomPlanFormData) => Promise<void>;
  isSubmitting: boolean;
}

export default function CustomPlanForm({ onSubmit, isSubmitting }: CustomPlanFormProps) {
  const [formData, setFormData] = useState<CustomPlanFormData>({
    marathonDate: "",
    trainingWeeks: 12,
    currentWeeklyMiles: 30,
    maxWeeklyMiles: 50,
    daysPerWeek: 5,
    goalTime: "4:00:00",
    email: "",
    firstName: "",
    lastName: "",
    marketingConsent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CustomPlanFormData, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof CustomPlanFormData, string>> = {};

    // Validate marathon date
    if (!formData.marathonDate) {
      newErrors.marathonDate = "Marathon date is required";
    } else {
      const selectedDate = new Date(formData.marathonDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate <= today) {
        newErrors.marathonDate = "Marathon date must be in the future";
      }
    }

    // Validate training weeks
    if (formData.trainingWeeks < 8 || formData.trainingWeeks > 20) {
      newErrors.trainingWeeks = "Training weeks must be between 8 and 20";
    }

    // Validate current weekly miles
    if (formData.currentWeeklyMiles < 10 || formData.currentWeeklyMiles > 80) {
      newErrors.currentWeeklyMiles = "Current weekly miles must be between 10 and 80";
    }

    // Validate max weekly miles
    if (formData.maxWeeklyMiles < 20 || formData.maxWeeklyMiles > 100) {
      newErrors.maxWeeklyMiles = "Max weekly miles must be between 20 and 100";
    }

    if (formData.maxWeeklyMiles <= formData.currentWeeklyMiles) {
      newErrors.maxWeeklyMiles = "Max weekly miles must be greater than current weekly miles";
    }

    // Validate days per week
    if (formData.daysPerWeek < 3 || formData.daysPerWeek > 7) {
      newErrors.daysPerWeek = "Days per week must be between 3 and 7";
    }

    // Validate goal time format (HH:MM:SS)
    const timeRegex = /^([0-9]|[0-5][0-9]):([0-5][0-9]):([0-5][0-9])$/;
    if (!timeRegex.test(formData.goalTime)) {
      newErrors.goalTime = "Goal time must be in format HH:MM:SS (e.g., 4:00:00)";
    }

    // Validate email if provided
    if (formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      await onSubmit(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" 
        ? checked
        : (name === "trainingWeeks" || name === "currentWeeklyMiles" || name === "maxWeeklyMiles" || name === "daysPerWeek"
          ? parseInt(value)
          : value),
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof CustomPlanFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
      <div className="grid md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
            placeholder="Optional"
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
            placeholder="Optional"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="your@email.com (optional)"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          <p className="mt-1 text-xs text-gray-500">
            We&apos;ll email your custom plan to this address
          </p>
        </div>

        {/* Marathon Date */}
        <div>
          <label htmlFor="marathonDate" className="block text-sm font-medium text-gray-700 mb-2">
            Marathon Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="marathonDate"
            name="marathonDate"
            value={formData.marathonDate}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black ${
              errors.marathonDate ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {errors.marathonDate && (
            <p className="mt-1 text-sm text-red-600">{errors.marathonDate}</p>
          )}
        </div>

        {/* Goal Time */}
        <div>
          <label htmlFor="goalTime" className="block text-sm font-medium text-gray-700 mb-2">
            Goal Time (HH:MM:SS) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="goalTime"
            name="goalTime"
            value={formData.goalTime}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black ${
              errors.goalTime ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="4:00:00"
            required
          />
          {errors.goalTime && <p className="mt-1 text-sm text-red-600">{errors.goalTime}</p>}
        </div>

        {/* Training Weeks */}
        <div>
          <label htmlFor="trainingWeeks" className="block text-sm font-medium text-gray-700 mb-2">
            Training Weeks <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="trainingWeeks"
            name="trainingWeeks"
            value={formData.trainingWeeks}
            onChange={handleChange}
            min="8"
            max="20"
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black ${
              errors.trainingWeeks ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {errors.trainingWeeks && (
            <p className="mt-1 text-sm text-red-600">{errors.trainingWeeks}</p>
          )}
          <p className="mt-1 text-xs text-gray-500">8-20 weeks recommended</p>
        </div>

        {/* Days Per Week */}
        <div>
          <label htmlFor="daysPerWeek" className="block text-sm font-medium text-gray-700 mb-2">
            Running Days Per Week <span className="text-red-500">*</span>
          </label>
          <select
            id="daysPerWeek"
            name="daysPerWeek"
            value={formData.daysPerWeek}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black ${
              errors.daysPerWeek ? "border-red-500" : "border-gray-300"
            }`}
            required
          >
            <option value="3">3 days/week</option>
            <option value="4">4 days/week</option>
            <option value="5">5 days/week</option>
            <option value="6">6 days/week</option>
            <option value="7">7 days/week</option>
          </select>
          {errors.daysPerWeek && (
            <p className="mt-1 text-sm text-red-600">{errors.daysPerWeek}</p>
          )}
        </div>

        {/* Current Weekly Miles */}
        <div>
          <label
            htmlFor="currentWeeklyMiles"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Current Weekly Miles <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="currentWeeklyMiles"
            name="currentWeeklyMiles"
            value={formData.currentWeeklyMiles}
            onChange={handleChange}
            min="10"
            max="80"
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black ${
              errors.currentWeeklyMiles ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {errors.currentWeeklyMiles && (
            <p className="mt-1 text-sm text-red-600">{errors.currentWeeklyMiles}</p>
          )}
          <p className="mt-1 text-xs text-gray-500">Your average weekly mileage now</p>
        </div>

        {/* Max Weekly Miles */}
        <div>
          <label
            htmlFor="maxWeeklyMiles"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Peak Weekly Miles <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="maxWeeklyMiles"
            name="maxWeeklyMiles"
            value={formData.maxWeeklyMiles}
            onChange={handleChange}
            min="20"
            max="100"
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black ${
              errors.maxWeeklyMiles ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {errors.maxWeeklyMiles && (
            <p className="mt-1 text-sm text-red-600">{errors.maxWeeklyMiles}</p>
          )}
          <p className="mt-1 text-xs text-gray-500">Target peak mileage during training</p>
        </div>
      </div>

      {/* Marketing Consent */}
      <div className="mt-6 bg-gray-50 p-4 rounded-md border border-gray-200">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              id="marketingConsent"
              name="marketingConsent"
              checked={formData.marketingConsent}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="marketingConsent" className="font-medium text-gray-700 cursor-pointer">
              Yes, I&apos;d like to receive training tips, race strategies, and updates via email
            </label>
            <p className="text-xs text-gray-500 mt-1">
              We respect your privacy. Unsubscribe anytime. See our{" "}
              <a href="/privacy-policy" className="text-blue-600 hover:text-blue-700 underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Generating Your Plan...
            </span>
          ) : (
            "Generate My Custom Training Plan"
          )}
        </button>
        <p className="mt-2 text-sm text-gray-600 text-center">
          {formData.email
            ? "Your plan will be displayed below and emailed to you"
            : "Your plan will be displayed below (provide email to receive a copy)"}
        </p>
      </div>
    </form>
  );
}
