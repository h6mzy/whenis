export type IslamicOccasion = {
  slug: string
  name: string
  hMonth: number
  hDay: number
  hYearOffset?: number
}

export const ISLAMIC_OCCASIONS: IslamicOccasion[] = [
  { slug: "start-of-ramadan", name: "Start of Ramadan", hMonth: 9, hDay: 1 },
  { slug: "laylat-al-qadr", name: "Laylat al-Qadr", hMonth: 9, hDay: 27 },
  { slug: "eid-al-fitr", name: "Eid al-Fitr", hMonth: 10, hDay: 1 },
  { slug: "day-of-arafah", name: "Day of Arafah", hMonth: 12, hDay: 9 },
  { slug: "eid-al-adha", name: "Eid al-Adha", hMonth: 12, hDay: 10 },
  { slug: "islamic-new-year", name: "Islamic New Year", hMonth: 1, hDay: 1, hYearOffset: 1 },
  { slug: "ashura", name: "Ashura", hMonth: 1, hDay: 10, hYearOffset: 1 },
  { slug: "mawlid-an-nabi", name: "Mawlid an-Nabi", hMonth: 3, hDay: 12, hYearOffset: 1 }
]