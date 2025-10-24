/**
 * Marathon Training Plan Generator
 * Based on Jack Daniels' methodology
 * Converted from Python to TypeScript
 */

import { getVDOTAndPaces } from './vdotCalculator';

export interface TrainingPaces {
  easy: string;
  marathon: string;
  threshold: string;
  interval: string;
  repetition: string;
}

export interface WorkoutDetails {
  type: string;
  warmup?: number;
  main?: string;
  main_distance?: number;
  recovery?: string;
  recovery_distance?: number;
  cooldown?: number;
  distance?: number;
  pace?: string;
  purpose: string;
}

export interface DailyWorkout {
  day: string;
  miles: number;
  workoutType: string;
  description: string;
}

export interface WeeklyPlan {
  week: number;
  totalMileage: number;
  days: DailyWorkout[];
}

export interface GeneratedPlan {
  vdot: number;
  paces: TrainingPaces;
  goalTime: string;
  weeks: WeeklyPlan[];
}

export interface PlanInputs {
  marathonDate: string; // YYYY-MM-DD format
  trainingWeeks: number;
  currentWeeklyMiles: number;
  maxWeeklyMiles: number;
  daysPerWeek: number;
  goalTime: string; // HH:MM:SS format
}

function roundToHalf(value: number): number {
  return Math.round(value * 2) / 2;
}

export class MarathonTrainingPlanGenerator {
  private marathonDate: Date;
  private trainingWeeks: number;
  private currentWeeklyMiles: number;
  private maxWeeklyMiles: number;
  private daysPerWeek: number;
  private goalTime: string;
  private runningDays: boolean[];

  constructor(inputs: PlanInputs) {
    this.marathonDate = new Date(inputs.marathonDate);
    this.trainingWeeks = inputs.trainingWeeks;
    this.currentWeeklyMiles = inputs.currentWeeklyMiles;
    this.maxWeeklyMiles = inputs.maxWeeklyMiles;
    this.daysPerWeek = inputs.daysPerWeek;
    this.goalTime = inputs.goalTime;
    this.runningDays = this.determineRunningDays();
  }

  private determineRunningDays(): boolean[] {
    // Default pattern: prioritize spreading days with key workouts on Tue, Thu, and weekend
    const patterns: { [key: number]: boolean[] } = {
      7: [true, true, true, true, true, true, true],
      6: [false, true, true, true, true, true, true], // Rest Monday
      5: [false, true, false, true, true, true, true], // Rest Mon, Wed
      4: [false, true, false, true, false, true, true], // Rest Mon, Wed, Fri
      3: [false, true, false, false, false, true, true], // Tue, Sat, Sun only
    };

    return patterns[this.daysPerWeek] || patterns[5];
  }

  private calculateWeeklyMileage(weekNum: number): number {
    if (weekNum === this.trainingWeeks) {
      // Race week - should include the marathon (26.2) plus light easy runs
      // Typically 30-35 miles total for race week
      return Math.floor(26.2 + Math.min(12, this.currentWeeklyMiles * 0.3));
    } else if (weekNum >= this.trainingWeeks - 2) {
      // Taper weeks
      const progress = (this.trainingWeeks - weekNum) / 3;
      return Math.floor(this.maxWeeklyMiles * (0.6 + 0.2 * progress));
    } else {
      // Progressive buildup
      const weeksToBuild = this.trainingWeeks - 3;
      const progress = (weekNum - 1) / weeksToBuild;
      const mileage =
        this.currentWeeklyMiles +
        (this.maxWeeklyMiles - this.currentWeeklyMiles) * progress;
      return Math.floor(mileage);
    }
  }

  private createIntervalWorkout(totalMiles: number): [WorkoutDetails, number] {
    const warmup = 1.5;
    let cooldown = 1.5;
    const remaining = roundToHalf(totalMiles - warmup - cooldown);

    let workout: WorkoutDetails;

    if (remaining >= 5) {
      // 1000m (0.62 miles) intervals with 400m (0.25 miles) recovery
      const intervalDistance = 0.62;
      const recoveryDistance = 0.25;
      const segmentDistance = intervalDistance + recoveryDistance;
      const numRepeats = Math.floor(remaining / segmentDistance);
      const workoutDistance = numRepeats * intervalDistance;
      const recoveryTotal = (numRepeats - 1) * recoveryDistance;
      const actualRemaining = workoutDistance + recoveryTotal;

      cooldown = totalMiles - warmup - actualRemaining;

      workout = {
        type: "Interval Workout",
        warmup,
        main: `${numRepeats}x1000m at I pace`,
        main_distance: workoutDistance,
        recovery: "400m jog between intervals",
        recovery_distance: recoveryTotal,
        cooldown,
        purpose: "Improve VO2max and running economy",
      };
    } else {
      // Shorter workout - 400m repeats
      const intervalDistance = 0.25;
      const recoveryDistance = 0.25;
      const segmentDistance = intervalDistance + recoveryDistance;
      const numRepeats = Math.floor(remaining / segmentDistance);
      const workoutDistance = numRepeats * intervalDistance;
      const recoveryTotal = (numRepeats - 1) * recoveryDistance;
      const actualRemaining = workoutDistance + recoveryTotal;

      cooldown = totalMiles - warmup - actualRemaining;

      workout = {
        type: "Interval Workout",
        warmup,
        main: `${numRepeats}x400m at I pace`,
        main_distance: workoutDistance,
        recovery: "400m jog between intervals",
        recovery_distance: recoveryTotal,
        cooldown,
        purpose: "Improve speed and VO2max",
      };
    }

    const totalCalculated =
      warmup +
      (workout.main_distance || 0) +
      (workout.recovery_distance || 0) +
      (workout.cooldown || 0);

    return [workout, totalCalculated];
  }

  private createTempoWorkout(
    totalMiles: number,
    inLongRun: boolean = false
  ): [WorkoutDetails, number] {
    let workout: WorkoutDetails;

    if (inLongRun) {
      // Long run with marathon pace segment
      const warmup = 2.0;
      const cooldown = 2.0;
      const mpSegment = roundToHalf(totalMiles - warmup - cooldown);

      workout = {
        type: "Long Run with Marathon Pace",
        warmup,
        main: `${mpSegment} miles at M pace`,
        main_distance: mpSegment,
        cooldown,
        purpose: "Build endurance and practice goal marathon pace",
      };
    } else {
      // Midweek tempo run
      const warmup = 1.5;
      const cooldown = 1.5;
      const tempoDistance = roundToHalf(totalMiles - warmup - cooldown);

      workout = {
        type: "Tempo Run",
        warmup,
        main: `${tempoDistance} miles at T pace`,
        main_distance: tempoDistance,
        cooldown,
        purpose: "Improve lactate threshold and tempo endurance",
      };
    }

    const totalCalculated =
      (workout.warmup || 0) + (workout.main_distance || 0) + (workout.cooldown || 0);

    return [workout, totalCalculated];
  }

  private createEasyRun(miles: number): WorkoutDetails {
    return {
      type: "Easy Run",
      distance: miles,
      pace: "E pace",
      purpose: "Recovery and base building",
    };
  }

  private distributeWeeklyMileage(weeklyTotal: number, weekNum: number): number[] {
    const runningDayIndices = this.runningDays
      .map((isRunning, idx) => (isRunning ? idx : -1))
      .filter((idx) => idx !== -1);
    const numRunningDays = runningDayIndices.length;

    const dailyMiles: number[] = [0, 0, 0, 0, 0, 0, 0];

    if (weekNum === this.trainingWeeks) {
      // Race week - distribute easy runs throughout the week before race day
      const easyMiles = weeklyTotal - 26.2;
      const numEasyDays = runningDayIndices.length - 1; // All days except race day
      
      if (numEasyDays > 0 && easyMiles > 0) {
        // Distribute easy miles across the week
        // First day gets a bit more (shakeout), others get equal distribution
        const firstDayMiles = Math.min(4.0, easyMiles * 0.3);
        const remainingMiles = easyMiles - firstDayMiles;
        const milesPerDay = numEasyDays > 1 ? remainingMiles / (numEasyDays - 1) : 0;
        
        for (let i = 0; i < numEasyDays; i++) {
          const idx = runningDayIndices[i];
          if (i === 0) {
            dailyMiles[idx] = roundToHalf(firstDayMiles);
          } else {
            dailyMiles[idx] = roundToHalf(milesPerDay);
          }
        }
      }
      
      // Race day (last running day of the week)
      dailyMiles[runningDayIndices[runningDayIndices.length - 1]] = 26.2;
    } else {
      // Regular training week
      const longRunMiles = roundToHalf(weeklyTotal * 0.28);
      const workoutMiles1 = roundToHalf(Math.min(10, weeklyTotal * 0.18));
      const workoutMiles2 = roundToHalf(Math.min(12, weeklyTotal * 0.2));

      const remainingMiles =
        weeklyTotal - longRunMiles - workoutMiles1 - workoutMiles2;
      const otherRunningDays = numRunningDays - 3;

      const easyRunMiles =
        otherRunningDays > 0
          ? roundToHalf(remainingMiles / otherRunningDays)
          : 0;

      let workoutAssigned = 0;

      for (const idx of runningDayIndices) {
        if (idx === 6) {
          // Sunday - long run
          dailyMiles[idx] = longRunMiles;
        } else if (idx === 1 && workoutAssigned === 0) {
          // Tuesday - first workout
          dailyMiles[idx] = workoutMiles1;
          workoutAssigned++;
        } else if (idx === 3 && workoutAssigned === 1) {
          // Thursday - second workout
          dailyMiles[idx] = workoutMiles2;
          workoutAssigned++;
        } else {
          // Easy run days
          dailyMiles[idx] = easyRunMiles;
        }
      }

      // Adjust for rounding errors
      const currentTotal = dailyMiles.reduce((sum, miles) => sum + miles, 0);
      const diff = roundToHalf(weeklyTotal - currentTotal);
      if (diff !== 0) {
        // Add difference to long run
        dailyMiles[runningDayIndices[runningDayIndices.length - 1]] = roundToHalf(
          dailyMiles[runningDayIndices[runningDayIndices.length - 1]] + diff
        );
      }
    }

    return dailyMiles;
  }

  public getVDOTAndPaces(): { vdot: number; paces: TrainingPaces } {
    return getVDOTAndPaces(this.goalTime);
  }

  public generatePlan(): WeeklyPlan[] {
    const plan: WeeklyPlan[] = [];
    const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    for (let week = 1; week <= this.trainingWeeks; week++) {
      const weeklyMileage = this.calculateWeeklyMileage(week);
      const dailyMileages = this.distributeWeeklyMileage(weeklyMileage, week);
      const actualWeeklyTotal = dailyMileages.reduce((sum, miles) => sum + miles, 0);

      const tempoInLongRun = week % 3 === 0;
      const days: DailyWorkout[] = [];

      for (let dayIdx = 0; dayIdx < 7; dayIdx++) {
        const dayName = dayNames[dayIdx];
        const miles = dailyMileages[dayIdx];

        let workoutType = "";
        let description = "";

        if (miles === 0) {
          workoutType = "Rest Day";
          description = "Recovery day";
        } else if (week === this.trainingWeeks && dayIdx === 6) {
          // Race day
          workoutType = "RACE DAY 🏁";
          description = "Marathon Race - Give it your all!";
        } else if (week === this.trainingWeeks) {
          // Race week easy run
          workoutType = "Easy Run";
          description = "Easy shakeout at E pace";
        } else if (dayIdx === 1 && miles > 5) {
          // Tuesday workout (interval)
          const [workout] = this.createIntervalWorkout(miles);
          workoutType = workout.type;
          description = `${workout.warmup}mi WU + ${workout.main} (${workout.recovery}) + ${workout.cooldown}mi CD`;
        } else if (dayIdx === 3 && miles > 5 && !tempoInLongRun) {
          // Thursday tempo
          const [workout] = this.createTempoWorkout(miles, false);
          workoutType = workout.type;
          description = `${workout.warmup}mi WU + ${workout.main} + ${workout.cooldown}mi CD`;
        } else if (dayIdx === 6 && tempoInLongRun && miles > 8) {
          // Sunday long run with tempo
          const [workout] = this.createTempoWorkout(miles, true);
          workoutType = workout.type;
          description = `${workout.warmup}mi easy + ${workout.main} + ${workout.cooldown}mi easy CD`;
        } else {
          // Easy run or regular long run
          if (dayIdx === 6) {
            workoutType = "Long Run";
            description = "Easy long run at E pace - Build endurance";
          } else {
            workoutType = "Easy Run";
            description = "Recovery run at E pace";
          }
        }

        days.push({
          day: dayName,
          miles,
          workoutType,
          description,
        });
      }

      plan.push({
        week,
        totalMileage: actualWeeklyTotal,
        days,
      });
    }

    return plan;
  }

  public generateCompletePlan(): GeneratedPlan {
    const { vdot, paces } = this.getVDOTAndPaces();
    const weeks = this.generatePlan();
    
    return {
      vdot,
      paces,
      goalTime: this.goalTime,
      weeks,
    };
  }

  public generatePlanText(): string {
    const plan = this.generatePlan();
    const { vdot, paces } = this.getVDOTAndPaces();
    const output: string[] = [];

    // Header
    output.push("MARATHON TRAINING PLAN");
    output.push(
      `Goal Time: ${this.goalTime} | Race Date: ${this.marathonDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} | Duration: ${this.trainingWeeks} weeks | Days/Week: ${this.daysPerWeek}`
    );
    output.push(`VDOT: ${vdot} | Training Paces Below`);
    output.push("\n" + "=".repeat(120) + "\n");
    
    // Training Paces
    output.push("TRAINING PACES:");
    output.push(`  Easy (E):        ${paces.easy}`);
    output.push(`  Marathon (M):    ${paces.marathon}`);
    output.push(`  Threshold (T):   ${paces.threshold}`);
    output.push(`  Interval (I):    ${paces.interval}`);
    output.push(`  Repetition (R):  ${paces.repetition}`);
    output.push("\n" + "=".repeat(120) + "\n");

    // Weekly details
    for (const weekPlan of plan) {
      output.push(`WEEK ${weekPlan.week} - Total: ${weekPlan.totalMileage} miles`);
      output.push("-".repeat(120));
      output.push(
        `${"Day".padEnd(10)}${"Miles".padEnd(10)}${"Workout Type".padEnd(30)}${"Description".padEnd(70)}`
      );
      output.push("-".repeat(120));

      for (const day of weekPlan.days) {
        const milesStr = day.miles > 0 ? day.miles.toString() : "REST";
        output.push(
          `${day.day.padEnd(10)}${milesStr.padEnd(10)}${day.workoutType.padEnd(30)}${day.description.padEnd(70)}`
        );
      }

      output.push("");
    }

    // Footer
    output.push("=".repeat(120));
    output.push(
      "PACE KEY: E=Easy | T=Tempo/Threshold | I=Interval | M=Marathon | WU=Warmup | CD=Cooldown"
    );

    return output.join("\n");
  }
}
