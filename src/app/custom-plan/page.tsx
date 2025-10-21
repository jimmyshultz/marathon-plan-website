"use client";

import { useState } from "react";
import Link from "next/link";
import CustomPlanForm, { CustomPlanFormData } from "@/components/CustomPlanForm";
import CustomPlanDisplay from "@/components/CustomPlanDisplay";
import { generateAndEmailPlan } from "@/app/actions/generatePlan";
import { WeeklyPlan } from "@/utils/marathonPlanGenerator";

export default function CustomPlanPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<{
    plan: WeeklyPlan[];
    planText: string;
    formData: CustomPlanFormData;
  } | null>(null);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (formData: CustomPlanFormData) => {
    setIsSubmitting(true);
    setMessage(null);

    try {
      const result = await generateAndEmailPlan(formData);

      if (result.success && result.plan && result.planText) {
        setGeneratedPlan({
          plan: result.plan,
          planText: result.planText,
          formData,
        });
        setMessage({
          type: "success",
          text: result.message,
        });
        // Scroll to the plan
        setTimeout(() => {
          document.getElementById("generated-plan")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      } else {
        setMessage({
          type: "error",
          text: result.message,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({
        type: "error",
        text: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-700 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Custom Marathon Training Plan
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-4 leading-relaxed">
            Get a personalized marathon training plan tailored to your specific
            goals, schedule, and current fitness level.
          </p>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Based on Jack Daniels&apos; proven VDOT methodology, our algorithm
            creates a scientifically-backed training schedule just for you.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Fully Customizable
              </h3>
              <p className="text-gray-600">
                Set your own marathon date, weekly mileage, training duration, and
                running frequency.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Science-Based
              </h3>
              <p className="text-gray-600">
                Built on proven training principles with progressive mileage
                buildup and proper taper.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Emailed to You
              </h3>
              <p className="text-gray-600">
                Receive your plan via email and access it anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Create Your Custom Plan
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Fill in your details below to generate a training plan that fits your
            unique situation.
          </p>

          {message && (
            <div
              className={`max-w-3xl mx-auto mb-6 p-4 rounded-lg ${
                message.type === "success"
                  ? "bg-green-50 border border-green-200 text-green-800"
                  : "bg-red-50 border border-red-200 text-red-800"
              }`}
            >
              <div className="flex items-center">
                {message.type === "success" ? (
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                <span>{message.text}</span>
              </div>
            </div>
          )}

          <CustomPlanForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </div>
      </div>

      {/* Generated Plan Display */}
      {generatedPlan && (
        <div id="generated-plan" className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <CustomPlanDisplay
              plan={generatedPlan.plan}
              goalTime={generatedPlan.formData.goalTime}
              marathonDate={generatedPlan.formData.marathonDate}
              planText={generatedPlan.planText}
            />
          </div>
        </div>
      )}

      {/* Educational CTA */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Learn More About Marathon Training?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Check out our comprehensive training guides to understand the science
            behind your plan and maximize your performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/training-guides"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Read Training Guides
            </a>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Pre-Made Plans
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
