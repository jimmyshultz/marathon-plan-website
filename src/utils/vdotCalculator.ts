/**
 * VDOT Calculator based on Jack Daniels' Running Formula
 * Calculates VDOT from race time and provides training paces
 */

interface TrainingPaces {
  easy: string;
  marathon: string;
  threshold: string;
  interval: string;
  repetition: string;
}

/**
 * Convert time string (HH:MM:SS) to total seconds
 */
function timeToSeconds(timeStr: string): number {
  const parts = timeStr.split(':').map(Number);
  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }
  return 0;
}

/**
 * Convert seconds to pace per mile string (MM:SS/mi)
 */
function secondsToMinPerMile(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.round(seconds % 60);
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Calculate VDOT from marathon time using Jack Daniels' formula
 * Formula: VDOT = (-4.60 + 0.182258 * v + 0.000104 * v^2) / (0.8 + 0.1894393 * e^(-0.012778 * t) + 0.2989558 * e^(-0.1932605 * t))
 * Simplified approximation for marathon distance
 */
export function calculateVDOTFromMarathonTime(marathonTimeStr: string): number {
  const totalSeconds = timeToSeconds(marathonTimeStr);
  const totalMinutes = totalSeconds / 60;
  
  // Marathon distance in meters
  const distance = 42195;
  
  // Velocity in meters per minute
  const velocity = distance / totalMinutes;
  
  // Oxygen cost of running (simplified Jack Daniels formula)
  // VO2 = -4.60 + 0.182258 * v + 0.000104 * v^2
  const vo2 = -4.60 + 0.182258 * velocity + 0.000104 * Math.pow(velocity, 2);
  
  // Percent of VO2max (energy system fraction)
  // For marathon, approximately 0.85 of VO2max
  const percentMax = 0.8 + 0.1894393 * Math.exp(-0.012778 * totalMinutes) + 
                     0.2989558 * Math.exp(-0.1932605 * totalMinutes);
  
  // VDOT calculation
  const vdot = vo2 / percentMax;
  
  return Math.round(vdot * 10) / 10; // Round to 1 decimal
}

/**
 * Calculate training paces from VDOT
 * Based on Jack Daniels' VDOT tables
 */
export function calculateTrainingPaces(vdot: number): TrainingPaces {
  // Easy pace: approximately 65-78% of VDOT (we'll use 70-75%)
  const easyPaceSeconds = calculatePaceFromVDOT(vdot, 0.70);
  const easyPaceSlowSeconds = calculatePaceFromVDOT(vdot, 0.78);
  
  // Marathon pace: approximately 80-85% of VDOT
  const marathonPaceSeconds = calculatePaceFromVDOT(vdot, 0.82);
  const marathonPaceSlowSeconds = calculatePaceFromVDOT(vdot, 0.85);
  
  // Threshold pace: approximately 88% of VDOT
  const thresholdPaceSeconds = calculatePaceFromVDOT(vdot, 0.88);
  const thresholdPaceSlowSeconds = calculatePaceFromVDOT(vdot, 0.90);
  
  // Interval pace: approximately 98-100% of VDOT
  const intervalPaceSeconds = calculatePaceFromVDOT(vdot, 0.98);
  const intervalPaceSlowSeconds = calculatePaceFromVDOT(vdot, 1.00);
  
  // Repetition pace: approximately 105% of VDOT
  const repetitionPaceSeconds = calculatePaceFromVDOT(vdot, 1.05);
  
  return {
    easy: `${secondsToMinPerMile(easyPaceSeconds)}-${secondsToMinPerMile(easyPaceSlowSeconds)}/mi`,
    marathon: `${secondsToMinPerMile(marathonPaceSeconds)}-${secondsToMinPerMile(marathonPaceSlowSeconds)}/mi`,
    threshold: `${secondsToMinPerMile(thresholdPaceSeconds)}-${secondsToMinPerMile(thresholdPaceSlowSeconds)}/mi`,
    interval: `${secondsToMinPerMile(intervalPaceSeconds)}-${secondsToMinPerMile(intervalPaceSlowSeconds)}/mi`,
    repetition: `~${secondsToMinPerMile(repetitionPaceSeconds)}/mi`,
  };
}

/**
 * Calculate pace per mile from VDOT and intensity percentage
 */
function calculatePaceFromVDOT(vdot: number, intensityPercent: number): number {
  // Using Jack Daniels' velocity formula
  // v = (-4.60 + 0.182258 * VDOT + sqrt((0.182258 * VDOT + 4.6)^2 - 4 * 0.000104 * (VDOT - VO2))) / (2 * 0.000104)
  
  const targetVO2 = vdot * intensityPercent;
  
  // Solve quadratic equation for velocity
  const a = 0.000104;
  const b = 0.182258;
  const c = -4.60 - targetVO2;
  
  const discriminant = Math.pow(b, 2) - 4 * a * c;
  const velocity = (-b + Math.sqrt(discriminant)) / (2 * a);
  
  // Convert velocity (m/min) to pace (seconds/mile)
  const metersPerMile = 1609.344;
  const secondsPerMile = metersPerMile / velocity * 60;
  
  return secondsPerMile;
}

/**
 * Get VDOT and paces from marathon goal time
 */
export function getVDOTAndPaces(marathonTimeStr: string): { vdot: number; paces: TrainingPaces } {
  const vdot = calculateVDOTFromMarathonTime(marathonTimeStr);
  const paces = calculateTrainingPaces(vdot);
  
  return { vdot, paces };
}

/**
 * Format marathon time from seconds to HH:MM:SS
 */
export function formatMarathonTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.round(seconds % 60);
  
  return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Calculate marathon time from pace per mile
 */
export function calculateMarathonTimeFromPace(pacePerMileSeconds: number): string {
  const totalSeconds = pacePerMileSeconds * 26.2;
  return formatMarathonTime(totalSeconds);
}
