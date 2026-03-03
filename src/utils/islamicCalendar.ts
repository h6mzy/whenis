import dayjs from "dayjs"
import hijri from "dayjs-hijri"
import { ISLAMIC_OCCASIONS } from "$lib/constants/islamicOccasions"

dayjs.extend(hijri)

export function getOccasionsForGregorianYear(gregYear: number) {
  const jan1 = dayjs(`${gregYear}-01-01`)
  const baseHijriYear = jan1.calendar("hijri").year()

  return ISLAMIC_OCCASIONS.map(o => {
    const hijriYear = baseHijriYear + (o.hYearOffset ?? 0)

    const gregDate = dayjs(
      `${hijriYear}-${o.hMonth}-${o.hDay}`,
      { hijri: true }
    )

    return {
      ...o,
      hijriYear,
      gregDate,
      gregFormatted: gregDate.format("MMM D, YYYY"),
      hijriFormatted: gregDate.calendar("hijri").format("D MMMM YYYY")
    }
  })
}