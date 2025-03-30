export type TrainingDay = {
  day: string;
  description: string;
  distance: number;
};

export type TrainingWeek = {
  week: number;
  days: TrainingDay[];
  totalMileage: number;
};

export type TrainingPlan = {
  goalTime: string;
  vdot: number;
  paces: {
    easy: string;
    marathon: string;
    threshold: string;
    interval: string;
    repetition: string;
  };
  weeks: TrainingWeek[];
};

export const threeHourPlan: TrainingPlan = {
  goalTime: "3:00:00",
  vdot: 54,
  paces: {
    easy: "7:45-8:15/mi",
    marathon: "6:50-7:00/mi",
    threshold: "6:25-6:35/mi",
    interval: "5:55-6:05/mi",
    repetition: "~5:40/mi",
  },
  weeks: [
    {
      week: 1,
      totalMileage: 54,
      days: [
        { day: "Monday", description: "6 miles easy", distance: 6 },
        { day: "Tuesday", description: "8 miles total - Workout: 3 x 10 min @ T pace (2 min jog recoveries)", distance: 8 },
        { day: "Wednesday", description: "7 miles easy", distance: 7 },
        { day: "Thursday", description: "8 miles easy", distance: 8 },
        { day: "Friday", description: "6 miles easy", distance: 6 },
        { day: "Saturday", description: "7 miles easy", distance: 7 },
        { day: "Sunday", description: "12 miles - Finish the last 3 miles at or near M pace", distance: 12 },
      ],
    },
    {
      week: 2,
      totalMileage: 55,
      days: [
        { day: "Monday", description: "7 miles easy", distance: 7 },
        { day: "Tuesday", description: "8 miles total - Workout: 5 x 1k @ I pace (90s recoveries)", distance: 8 },
        { day: "Wednesday", description: "7 miles easy", distance: 7 },
        { day: "Thursday", description: "8 miles easy", distance: 8 },
        { day: "Friday", description: "5 miles easy", distance: 5 },
        { day: "Saturday", description: "5 miles easy", distance: 5 },
        { day: "Sunday", description: "15 miles easy", distance: 15 },
      ],
    },
    {
      week: 3,
      totalMileage: 60,
      days: [
        { day: "Monday", description: "7 miles easy", distance: 7 },
        { day: "Tuesday", description: "8 miles total - Workout: 4 x 6 min @ T pace (90s jog recoveries)", distance: 8 },
        { day: "Wednesday", description: "7 miles easy", distance: 7 },
        { day: "Thursday", description: "8 miles easy", distance: 8 },
        { day: "Friday", description: "7 miles easy", distance: 7 },
        { day: "Saturday", description: "5 miles easy", distance: 5 },
        { day: "Sunday", description: "18 miles easy", distance: 18 },
      ],
    },
    {
      week: 4,
      totalMileage: 65,
      days: [
        { day: "Monday", description: "8 miles easy", distance: 8 },
        { day: "Tuesday", description: "10 miles total - Workout: Steady run at M pace", distance: 10 },
        { day: "Wednesday", description: "8 miles easy", distance: 8 },
        { day: "Thursday", description: "10 miles easy", distance: 10 },
        { day: "Friday", description: "9 miles total - Workout: 3 x 10 min @ T pace (2 min recoveries)", distance: 9 },
        { day: "Saturday", description: "7 miles easy", distance: 7 },
        { day: "Sunday", description: "13 miles easy", distance: 13 },
      ],
    },
    {
      week: 5,
      totalMileage: 68,
      days: [
        { day: "Monday", description: "8 miles easy", distance: 8 },
        { day: "Tuesday", description: "10 miles total - Workout: 3 x 2 miles @ T pace (2 min recoveries)", distance: 10 },
        { day: "Wednesday", description: "9 miles easy", distance: 9 },
        { day: "Thursday", description: "11 miles easy", distance: 11 },
        { day: "Friday", description: "8 miles steady @ M pace", distance: 8 },
        { day: "Saturday", description: "7 miles easy", distance: 7 },
        { day: "Sunday", description: "15 miles - Include 4-5 miles @ M pace in the middle", distance: 15 },
      ],
    },
    {
      week: 6,
      totalMileage: 70,
      days: [
        { day: "Monday", description: "7 miles easy", distance: 7 },
        { day: "Tuesday", description: "9 miles total - Workout: 8 x 800m @ I pace (90s recoveries)", distance: 9 },
        { day: "Wednesday", description: "7 miles easy", distance: 7 },
        { day: "Thursday", description: "8 miles easy", distance: 8 },
        { day: "Friday", description: "8 miles steady @ M pace", distance: 8 },
        { day: "Saturday", description: "9 miles easy", distance: 9 },
        { day: "Sunday", description: "22 miles easy", distance: 22 },
      ],
    },
    {
      week: 7,
      totalMileage: 70,
      days: [
        { day: "Monday", description: "9 miles easy", distance: 9 },
        { day: "Tuesday", description: "11 miles total - Workout: 3 x 3 miles @ T pace (2 min recoveries)", distance: 11 },
        { day: "Wednesday", description: "9 miles easy", distance: 9 },
        { day: "Thursday", description: "12 miles easy", distance: 12 },
        { day: "Friday", description: "12 miles - Include 8 miles @ M pace within the run", distance: 12 },
        { day: "Saturday", description: "8 miles easy", distance: 8 },
        { day: "Sunday", description: "9 miles easy", distance: 9 },
      ],
    },
    {
      week: 8,
      totalMileage: 70,
      days: [
        { day: "Monday", description: "8 miles easy", distance: 8 },
        { day: "Tuesday", description: "8 miles total - Workout: 10 x 1k @ I pace (90s recoveries)", distance: 8 },
        { day: "Wednesday", description: "8 miles easy", distance: 8 },
        { day: "Thursday", description: "8 miles easy", distance: 8 },
        { day: "Friday", description: "8 miles total - 4 miles @ M pace, 2 miles @ T pace, 2 miles @ M pace", distance: 8 },
        { day: "Saturday", description: "8 miles easy", distance: 8 },
        { day: "Sunday", description: "22 miles easy", distance: 22 },
      ],
    },
    {
      week: 9,
      totalMileage: 70,
      days: [
        { day: "Monday", description: "8 miles easy", distance: 8 },
        { day: "Tuesday", description: "10 miles total - Workout: 5 x 2k @ T pace (with recovery intervals)", distance: 10 },
        { day: "Wednesday", description: "8 miles easy", distance: 8 },
        { day: "Thursday", description: "8 miles easy", distance: 8 },
        { day: "Friday", description: "8 miles steady (with a quality segment @ M pace)", distance: 8 },
        { day: "Saturday", description: "6 miles easy", distance: 6 },
        { day: "Sunday", description: "22 miles easy", distance: 22 },
      ],
    },
    {
      week: 10,
      totalMileage: 65,
      days: [
        { day: "Monday", description: "8 miles easy", distance: 8 },
        { day: "Tuesday", description: "11 miles total - Workout: 4 x 2 miles @ T pace (2 min recoveries)", distance: 11 },
        { day: "Wednesday", description: "10 miles easy", distance: 10 },
        { day: "Thursday", description: "11 miles easy", distance: 11 },
        { day: "Friday", description: "10 miles - Include 8 miles @ M pace", distance: 10 },
        { day: "Saturday", description: "8 miles easy", distance: 8 },
        { day: "Sunday", description: "7 miles easy", distance: 7 },
      ],
    },
    {
      week: 11,
      totalMileage: 50,
      days: [
        { day: "Monday", description: "7 miles easy", distance: 7 },
        { day: "Tuesday", description: "8 miles total - Workout: 4 miles @ M pace, 1 mile @ T pace (plus warm up/cool down)", distance: 8 },
        { day: "Wednesday", description: "7 miles easy", distance: 7 },
        { day: "Thursday", description: "8 miles easy", distance: 8 },
        { day: "Friday", description: "7 miles @ M pace", distance: 7 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "13 miles - Include a few short pickups near race pace", distance: 13 },
      ],
    },
    {
      week: 12,
      totalMileage: 41.2,
      days: [
        { day: "Monday", description: "4 miles easy", distance: 4 },
        { day: "Tuesday", description: "4 miles easy with 4-6 strides at the end", distance: 4 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "4 miles easy", distance: 4 },
        { day: "Friday", description: "3 miles shakeout easy", distance: 3 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "Race Day – 26.2 miles!", distance: 26.2 },
      ],
    },
  ],
};

export const fourHourPlan: TrainingPlan = {
  goalTime: "4:00:00",
  vdot: 42,
  paces: {
    easy: "10:30-11:00/mi",
    marathon: "9:10-9:20/mi",
    threshold: "8:40-8:50/mi",
    interval: "~8:00/mi",
    repetition: "Slightly faster than I pace",
  },
  weeks: [
    {
      week: 1,
      totalMileage: 45,
      days: [
        { day: "Monday", description: "7 miles easy", distance: 7 },
        { day: "Tuesday", description: "8 miles total - Workout: 3 × 6 minutes at T pace (with 2‑minute jog recoveries)", distance: 8 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "7 miles easy", distance: 7 },
        { day: "Friday", description: "7 miles - Steady run incorporating 3 miles at M pace mid-run", distance: 7 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "16 miles at easy pace, with the final 2 miles picked up near M pace", distance: 16 },
      ],
    },
    {
      week: 2,
      totalMileage: 48,
      days: [
        { day: "Monday", description: "8 miles easy", distance: 8 },
        { day: "Tuesday", description: "8 miles total - Workout: 4 × 5 minutes at T pace (short recoveries)", distance: 8 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "7 miles easy", distance: 7 },
        { day: "Friday", description: "7 miles - Steady run including 3 miles at M pace", distance: 7 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "18 miles easy", distance: 18 },
      ],
    },
    {
      week: 3,
      totalMileage: 52,
      days: [
        { day: "Monday", description: "8 miles easy", distance: 8 },
        { day: "Tuesday", description: "9 miles total - Workout: 3 × 7 minutes at T pace (with 2‑minute recoveries)", distance: 9 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "7 miles easy", distance: 7 },
        { day: "Friday", description: "8 miles - Steady run including 3 miles at M pace", distance: 8 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "20 miles easy", distance: 20 },
      ],
    },
    {
      week: 4,
      totalMileage: 55,
      days: [
        { day: "Monday", description: "9 miles easy", distance: 9 },
        { day: "Tuesday", description: "9 miles total - Workout: 4 × 6 minutes at T pace", distance: 9 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "10 miles easy", distance: 10 },
        { day: "Friday", description: "10 miles - Steady run with 4 miles at M pace mid-run", distance: 10 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "17 miles easy", distance: 17 },
      ],
    },
    {
      week: 5,
      totalMileage: 58,
      days: [
        { day: "Monday", description: "10 miles easy", distance: 10 },
        { day: "Tuesday", description: "10 miles total - Workout: 3 × 8 minutes at T pace (with recovery jogs)", distance: 10 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "10 miles easy", distance: 10 },
        { day: "Friday", description: "10 miles - Steady run incorporating 4 miles at M pace", distance: 10 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "18 miles easy", distance: 18 },
      ],
    },
    {
      week: 6,
      totalMileage: 60,
      days: [
        { day: "Monday", description: "11 miles easy", distance: 11 },
        { day: "Tuesday", description: "11 miles total - Workout: 4 × 6 minutes at T pace (with recoveries)", distance: 11 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "9 miles easy", distance: 9 },
        { day: "Friday", description: "9 miles - Steady run featuring 5 miles at M pace", distance: 9 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "20 miles easy", distance: 20 },
      ],
    },
    {
      week: 7,
      totalMileage: 60,
      days: [
        { day: "Monday", description: "11 miles easy", distance: 11 },
        { day: "Tuesday", description: "11 miles total - Workout: 3 × 8 minutes at T pace (with recoveries)", distance: 11 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "11 miles easy", distance: 11 },
        { day: "Friday", description: "10 miles - Steady run with 5 miles at M pace", distance: 10 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "17 miles easy", distance: 17 },
      ],
    },
    {
      week: 8,
      totalMileage: 60,
      days: [
        { day: "Monday", description: "11 miles easy", distance: 11 },
        { day: "Tuesday", description: "10 miles total - Workout: 4 × 6 minutes at T pace", distance: 10 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "11 miles easy", distance: 11 },
        { day: "Friday", description: "10 miles - Steady run including 5 miles at M pace", distance: 10 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "18 miles with a quality block of 4-5 miles near M pace mid-run", distance: 18 },
      ],
    },
    {
      week: 9,
      totalMileage: 60,
      days: [
        { day: "Monday", description: "11 miles easy", distance: 11 },
        { day: "Tuesday", description: "10 miles total - Workout: 5 × 4 minutes at I pace (with 2‑minute recoveries)", distance: 10 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "11 miles easy", distance: 11 },
        { day: "Friday", description: "10 miles - Steady run incorporating 5 miles at M pace", distance: 10 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "18 miles easy", distance: 18 },
      ],
    },
    {
      week: 10,
      totalMileage: 55,
      days: [
        { day: "Monday", description: "10 miles easy", distance: 10 },
        { day: "Tuesday", description: "9 miles total - Workout: 3 × 6 minutes at T pace", distance: 9 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "9 miles easy", distance: 9 },
        { day: "Friday", description: "9 miles - Steady run with 4 miles at M pace", distance: 9 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "18 miles easy", distance: 18 },
      ],
    },
    {
      week: 11,
      totalMileage: 48,
      days: [
        { day: "Monday", description: "8 miles easy", distance: 8 },
        { day: "Tuesday", description: "8 miles total - Workout: 3 × 5 minutes at T pace", distance: 8 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "8 miles easy", distance: 8 },
        { day: "Friday", description: "8 miles - Steady run including 3 miles at M pace", distance: 8 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "16 miles easy", distance: 16 },
      ],
    },
    {
      week: 12,
      totalMileage: 42.2,
      days: [
        { day: "Monday", description: "4 miles easy", distance: 4 },
        { day: "Tuesday", description: "5 miles easy with 4-6 strides at the end", distance: 5 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "4 miles easy", distance: 4 },
        { day: "Friday", description: "3 miles easy (a short shakeout run)", distance: 3 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "Race Day – 26.2 miles!", distance: 26.2 },
      ],
    },
  ],
};

export const fiveHourPlan: TrainingPlan = {
  goalTime: "5:00:00",
  vdot: 35,
  paces: {
    easy: "12:15-12:45/mi",
    marathon: "11:30-11:45/mi",
    threshold: "11:00-11:10/mi",
    interval: "~10:30/mi",
    repetition: "Slightly faster than I pace",
  },
  weeks: [
    {
      week: 1,
      totalMileage: 45,
      days: [
        { day: "Monday", description: "8 miles easy", distance: 8 },
        { day: "Tuesday", description: "8 miles total - Workout: 3 × 6 minutes at T pace (with 2‑minute jog recoveries)", distance: 8 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "8 miles easy", distance: 8 },
        { day: "Friday", description: "8 miles - Steady run incorporating a 3‑mile block at M pace mid-run", distance: 8 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "13 miles at an easy, steady pace (finish the last 1–2 miles slightly faster if you feel good)", distance: 13 },
      ],
    },
    {
      week: 2,
      totalMileage: 48,
      days: [
        { day: "Monday", description: "8 miles easy", distance: 8 },
        { day: "Tuesday", description: "8 miles total - Workout: 4 × 5 minutes at T pace (with short recoveries)", distance: 8 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "8 miles easy", distance: 8 },
        { day: "Friday", description: "8 miles - Steady run including 3 miles at M pace", distance: 8 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "16 miles at an easy pace", distance: 16 },
      ],
    },
    {
      week: 3,
      totalMileage: 50,
      days: [
        { day: "Monday", description: "8 miles easy", distance: 8 },
        { day: "Tuesday", description: "9 miles total - Workout: 3 × 7 minutes at T pace (with 2‑minute recoveries)", distance: 9 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "9 miles easy", distance: 9 },
        { day: "Friday", description: "9 miles - Steady run including 3 miles at M pace", distance: 9 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "15 miles at an easy pace", distance: 15 },
      ],
    },
    {
      week: 4,
      totalMileage: 52,
      days: [
        { day: "Monday", description: "9 miles easy", distance: 9 },
        { day: "Tuesday", description: "9 miles total - Workout: 3 × 7 minutes at T pace", distance: 9 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "9 miles easy", distance: 9 },
        { day: "Friday", description: "9 miles - Steady run with a 3–4‑mile block at M pace", distance: 9 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "16 miles at an easy pace", distance: 16 },
      ],
    },
    {
      week: 5,
      totalMileage: 55,
      days: [
        { day: "Monday", description: "10 miles easy", distance: 10 },
        { day: "Tuesday", description: "10 miles total - Workout: 3 × 8 minutes at T pace (with recovery jogs)", distance: 10 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "10 miles easy", distance: 10 },
        { day: "Friday", description: "10 miles - Steady run incorporating a 4‑mile block at M pace", distance: 10 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "15 miles at an easy pace", distance: 15 },
      ],
    },
    {
      week: 6,
      totalMileage: 55,
      days: [
        { day: "Monday", description: "10 miles easy", distance: 10 },
        { day: "Tuesday", description: "10 miles total - Workout: 3 × 8 minutes at T pace", distance: 10 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "10 miles easy", distance: 10 },
        { day: "Friday", description: "10 miles - Steady run with a 4‑mile block at M pace", distance: 10 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "15 miles at an easy pace", distance: 15 },
      ],
    },
    {
      week: 7,
      totalMileage: 55,
      days: [
        { day: "Monday", description: "10 miles easy", distance: 10 },
        { day: "Tuesday", description: "10 miles total - Workout: 3 × 8 minutes at T pace", distance: 10 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "10 miles easy", distance: 10 },
        { day: "Friday", description: "11 miles - Steady run incorporating a 4‑mile block at M pace", distance: 11 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "14 miles at an easy pace", distance: 14 },
      ],
    },
    {
      week: 8,
      totalMileage: 55,
      days: [
        { day: "Monday", description: "10 miles easy", distance: 10 },
        { day: "Tuesday", description: "10 miles total - Workout: 4 × 6 minutes at T pace", distance: 10 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "10 miles easy", distance: 10 },
        { day: "Friday", description: "10 miles - Steady run including a 4–5‑mile block at M pace", distance: 10 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "15 miles at an easy pace", distance: 15 },
      ],
    },
    {
      week: 9,
      totalMileage: 55,
      days: [
        { day: "Monday", description: "9 miles easy", distance: 9 },
        { day: "Tuesday", description: "8 miles total - Workout: 3 × 8 minutes at T pace", distance: 8 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "9 miles easy", distance: 9 },
        { day: "Friday", description: "9 miles - Steady run including a 4‑mile block at M pace", distance: 9 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "20 miles at an easy, steady pace", distance: 20 },
      ],
    },
    {
      week: 10,
      totalMileage: 52,
      days: [
        { day: "Monday", description: "9 miles easy", distance: 9 },
        { day: "Tuesday", description: "10 miles total - Workout: 3 × 7 minutes at T pace", distance: 10 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "10 miles easy", distance: 10 },
        { day: "Friday", description: "9 miles - Steady run including a 3‑mile block at M pace", distance: 9 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "14 miles at an easy pace", distance: 14 },
      ],
    },
    {
      week: 11,
      totalMileage: 48,
      days: [
        { day: "Monday", description: "9 miles easy", distance: 9 },
        { day: "Tuesday", description: "8 miles total - Workout: 3 × 5 minutes at T pace", distance: 8 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "9 miles easy", distance: 9 },
        { day: "Friday", description: "8 miles - Steady run including a 3‑mile block at M pace", distance: 8 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "14 miles at an easy pace", distance: 14 },
      ],
    },
    {
      week: 12,
      totalMileage: 42.2,
      days: [
        { day: "Monday", description: "4 miles easy", distance: 4 },
        { day: "Tuesday", description: "5 miles easy with 4-6 strides (15-20 seconds each) at the end", distance: 5 },
        { day: "Wednesday", description: "Rest day", distance: 0 },
        { day: "Thursday", description: "4 miles easy", distance: 4 },
        { day: "Friday", description: "3 miles easy (a short shakeout run)", distance: 3 },
        { day: "Saturday", description: "Rest day", distance: 0 },
        { day: "Sunday", description: "Race Day – 26.2 miles!", distance: 26.2 },
      ],
    },
  ],
};

export const trainingPlans: TrainingPlan[] = [threeHourPlan, fourHourPlan, fiveHourPlan];

// All plans now available! 