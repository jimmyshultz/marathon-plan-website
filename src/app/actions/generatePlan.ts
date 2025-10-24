"use server";

import { MarathonTrainingPlanGenerator, GeneratedPlan } from "@/utils/marathonPlanGenerator";
import { CustomPlanFormData } from "@/components/CustomPlanForm";

interface GeneratePlanResult {
  success: boolean;
  plan?: GeneratedPlan;
  planText?: string;
  message: string;
}

export async function generateAndEmailPlan(
  formData: CustomPlanFormData
): Promise<GeneratePlanResult> {
  try {
    // Generate the training plan
    const generator = new MarathonTrainingPlanGenerator({
      marathonDate: formData.marathonDate,
      trainingWeeks: formData.trainingWeeks,
      currentWeeklyMiles: formData.currentWeeklyMiles,
      maxWeeklyMiles: formData.maxWeeklyMiles,
      daysPerWeek: formData.daysPerWeek,
      goalTime: formData.goalTime,
    });

    const plan = generator.generateCompletePlan();
    const planText = generator.generatePlanText();

    // If email is provided, send the plan
    if (formData.email) {
      try {
        await sendPlanEmail(formData, planText);
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Don't fail the whole request if email fails
        return {
          success: true,
          plan,
          planText,
          message:
            "Your plan has been generated, but we couldn't send the email. Please copy your plan from the page.",
        };
      }
    }

    return {
      success: true,
      plan,
      planText,
      message: formData.email
        ? "Your training plan has been generated and emailed to you!"
        : "Your training plan has been generated!",
    };
  } catch (error) {
    console.error("Error generating plan:", error);
    return {
      success: false,
      message: "Failed to generate training plan. Please try again.",
    };
  }
}

async function sendPlanEmail(
  formData: CustomPlanFormData,
  planText: string
): Promise<void> {
  // Check if Resend API key is configured
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.warn("RESEND_API_KEY not configured. Email will not be sent.");
    throw new Error("Email service not configured");
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Marathon Training Plans <noreply@marathontrainingplans.jimmyshultz.com>",
        to: [formData.email],
        subject: `Your Custom ${formData.goalTime} Marathon Training Plan`,
        html: generateEmailHTML(formData, planText),
        text: generateEmailText(formData, planText),
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Resend API error:", error);
      throw new Error("Failed to send email via Resend");
    }

    const data = await response.json();
    console.log("Email sent successfully:", data);
  } catch (error) {
    console.error("Error in sendPlanEmail:", error);
    throw error;
  }
}

function generateEmailHTML(formData: CustomPlanFormData, planText: string): string {
  const greeting = formData.firstName
    ? `Hi ${formData.firstName},`
    : "Hi there,";

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Custom Marathon Training Plan</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #2563eb, #9333ea); color: white; padding: 30px; border-radius: 8px; margin-bottom: 20px;">
    <h1 style="margin: 0; font-size: 28px;">Your Custom Marathon Training Plan</h1>
    <p style="margin: 10px 0 0 0; font-size: 16px;">Goal Time: ${formData.goalTime}</p>
  </div>

  <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
    <p style="margin: 0 0 15px 0; font-size: 16px;">${greeting}</p>
    <p style="margin: 0 0 15px 0;">Thank you for using Marathon Training Plans! We've generated your custom ${formData.trainingWeeks}-week training plan to help you achieve your ${formData.goalTime} marathon goal.</p>
    <p style="margin: 0;"><strong>Your Plan Details:</strong></p>
    <ul style="margin: 10px 0;">
      <li>Marathon Date: ${new Date(formData.marathonDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</li>
      <li>Training Duration: ${formData.trainingWeeks} weeks</li>
      <li>Running Days: ${formData.daysPerWeek} days per week</li>
      <li>Starting Weekly Mileage: ${formData.currentWeeklyMiles} miles</li>
      <li>Peak Weekly Mileage: ${formData.maxWeeklyMiles} miles</li>
    </ul>
  </div>

  <div style="background: white; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 20px;">
    <h2 style="margin: 0 0 15px 0; color: #1f2937;">Your Training Schedule</h2>
    <pre style="font-family: 'Courier New', monospace; font-size: 11px; overflow-x: auto; white-space: pre; background: #f9fafb; padding: 15px; border-radius: 4px; line-height: 1.4;">${planText}</pre>
  </div>

  <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
    <h3 style="margin: 0 0 10px 0; color: #1e40af;">Important Training Notes</h3>
    <ul style="margin: 0; color: #1e3a8a;">
      <li><strong>Pace Key:</strong> E=Easy, T=Tempo/Threshold, I=Interval, M=Marathon, WU=Warmup, CD=Cooldown</li>
      <li><strong>Easy Runs:</strong> These should feel comfortable. You should be able to hold a conversation.</li>
      <li><strong>Long Runs:</strong> Critical for building endurance. Start slow and maintain steady effort.</li>
      <li><strong>Workouts:</strong> Interval and tempo runs improve speed and lactate threshold. Follow the prescribed paces.</li>
      <li><strong>Rest Days:</strong> Essential for recovery and adaptation. Don't skip them!</li>
      <li><strong>Listen to Your Body:</strong> If you're overly fatigued or injured, adjust the plan accordingly.</li>
    </ul>
  </div>

  <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 14px; border-top: 1px solid #e5e7eb;">
    <p>Good luck with your training! 🏃‍♂️💪</p>
    <p>Visit <a href="https://www.marathontrainingplans.com" style="color: #2563eb;">marathontrainingplans.com</a> for more training resources and guides.</p>
    <p style="font-size: 12px; margin-top: 20px;">This is an automated email. Please do not reply.</p>
  </div>
</body>
</html>
  `;
}

function generateEmailText(formData: CustomPlanFormData, planText: string): string {
  const greeting = formData.firstName ? `Hi ${formData.firstName},` : "Hi there,";

  return `
${greeting}

Thank you for using Marathon Training Plans! We've generated your custom ${formData.trainingWeeks}-week training plan to help you achieve your ${formData.goalTime} marathon goal.

YOUR PLAN DETAILS:
- Marathon Date: ${new Date(formData.marathonDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
- Training Duration: ${formData.trainingWeeks} weeks
- Running Days: ${formData.daysPerWeek} days per week
- Starting Weekly Mileage: ${formData.currentWeeklyMiles} miles
- Peak Weekly Mileage: ${formData.maxWeeklyMiles} miles

YOUR TRAINING SCHEDULE:
${planText}

IMPORTANT TRAINING NOTES:
- Pace Key: E=Easy, T=Tempo/Threshold, I=Interval, M=Marathon, WU=Warmup, CD=Cooldown
- Easy Runs: These should feel comfortable. You should be able to hold a conversation.
- Long Runs: Critical for building endurance. Start slow and maintain steady effort.
- Workouts: Interval and tempo runs improve speed and lactate threshold. Follow the prescribed paces.
- Rest Days: Essential for recovery and adaptation. Don't skip them!
- Listen to Your Body: If you're overly fatigued or injured, adjust the plan accordingly.

Good luck with your training! 🏃‍♂️💪

Visit marathontrainingplans.com for more training resources and guides.

---
This is an automated email. Please do not reply.
  `;
}
