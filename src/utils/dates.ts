import dayjs from "dayjs";
import hijri from "dayjs-hijri";

dayjs.extend(hijri);

/**
 * Convert a Hijri date (year, month, day) to Gregorian Dayjs
 */
export function toGregorian(hYear: number, hMonth: number, hDay: number) {
  // Create a new Dayjs instance for today, then set the Hijri date
  const d = dayjs();
  return d
    .calendar("hijri")       // switch to Hijri calendar for this instance
    .year(hYear)             // set Hijri year
    .month(hMonth - 1)       // set Hijri month (0-indexed in Dayjs)
    .date(hDay)              // set Hijri day
    .calendar("gregory");    // switch back to Gregorian
}

/**
 * Format a Dayjs date in Hijri calendar
 */
export function formatHijri(date: dayjs.Dayjs, format = "D MMMM YYYY") {
  return date.calendar("hijri").format(format);
}

/**
 * Format a Dayjs date in Gregorian calendar
 */
export function formatGregorian(date: dayjs.Dayjs, format = "MMM D") {
  return date.format(format);
}

/**
 * Find the next upcoming event from a list
 */
export function findNextEvent(events: { gregDate: dayjs.Dayjs }[]) {
  const now = dayjs();
  return events.find(e => e.gregDate.isAfter(now)) ?? events[0];
}