<script lang="ts">
  import { toGregorian, formatHijri, formatGregorian, findNextEvent } from "$utils/dates"

  const events = [
    { slug: "start-of-ramadan", name: "Start of Ramadan", hYear: 1447, hMonth: 9, hDay: 1 },
    { slug: "laylat-al-qadr", name: "Laylat al-Qadr", hYear: 1447, hMonth: 9, hDay: 27 },
    { slug: "eid-al-fitr", name: "Eid al-Fitr", hYear: 1447, hMonth: 10, hDay: 1 },
    { slug: "day-of-arafah", name: "Day of Arafah", hYear: 1447, hMonth: 12, hDay: 9 },
    { slug: "eid-al-adha", name: "Eid al-Adha", hYear: 1447, hMonth: 12, hDay: 10 },
    { slug: "islamic-new-year", name: "Islamic New Year", hYear: 1448, hMonth: 1, hDay: 1 },
    { slug: "ashura", name: "Ashura", hYear: 1448, hMonth: 1, hDay: 10 },
    { slug: "mawlid-an-nabi", name: "Mawlid an-Nabi", hYear: 1448, hMonth: 3, hDay: 12 }
  ];

  const computed = events.map(e => {
    const g = toGregorian(e.hYear, e.hMonth, e.hDay);

    return {
      ...e,
      gregDate: g,
      gregFormatted: formatGregorian(g),
      hijriFormatted: formatHijri(g)
    };
  });

  const nextEvent = findNextEvent(computed);
</script>