// types/dayjs-hijri.d.ts
import { PluginFunc } from "dayjs";

/**
 * Declare the module so TypeScript knows it exists
 */
declare module "dayjs-hijri" {
  const hijri: PluginFunc;
  export default hijri;
}

/**
 * Extend the Dayjs types to include .calendar()
 */
declare module "dayjs" {
  interface Dayjs {
    /**
     * Switch calendar system for this instance
     */
    calendar(calendar?: "hijri" | "gregory"): Dayjs;
  }

  namespace dayjs {
    /**
     * Set the default calendar for all new instances
     */
    function calendar(calendar: "hijri" | "gregory"): void;
  }
}