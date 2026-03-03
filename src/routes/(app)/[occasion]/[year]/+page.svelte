<script lang="ts">
  import dayjs from "dayjs"
  import hijri from "dayjs-hijri"

  dayjs.extend(hijri)

  const gregYear = 2026

  const events = [
    { slug: "start-of-ramadan", name: "Start of Ramadan", hYear: 1447, hMonth: 9, hDay: 1 },
    { slug: "laylat-al-qadr", name: "Laylat al-Qadr", hYear: 1447, hMonth: 9, hDay: 27 },
    { slug: "eid-al-fitr", name: "Eid al-Fitr", hYear: 1447, hMonth: 10, hDay: 1 },
    { slug: "day-of-arafah", name: "Day of Arafah", hYear: 1447, hMonth: 12, hDay: 9 },
    { slug: "eid-al-adha", name: "Eid al-Adha", hYear: 1447, hMonth: 12, hDay: 10 },
    { slug: "islamic-new-year", name: "Islamic New Year", hYear: 1448, hMonth: 1, hDay: 1 },
    { slug: "ashura", name: "Ashura", hYear: 1448, hMonth: 1, hDay: 10 },
    { slug: "mawlid-an-nabi", name: "Mawlid an-Nabi", hYear: 1448, hMonth: 3, hDay: 12 }
  ]

  function toGregorian(hYear: number, hMonth: number, hDay: number) {
    return dayjs(`${hYear}-${hMonth}-${hDay}`, { hijri: true } as any)
  }

  const computed = events.map(e => {
    const g = toGregorian(e.hYear, e.hMonth, e.hDay)

    return {
      ...e,
      gregDate: g,
      gregFormatted: g.format("MMM D"),
      hijriFormatted: g.calendar("hijri").format("D MMMM YYYY")
    }
  })

  // find next upcoming event
  const now = dayjs()
  const nextEvent =
    computed.find(e => e.gregDate.isAfter(now)) ?? computed[0]
</script>

<div class="min-h-screen p-6 max-w-3xl mx-auto">
  <h1 class="text-3xl font-bold mb-6">Islamic Holidays {gregYear}</h1>

  <div class="space-y-3">
    {#each computed as event}
      <a
        class="block p-4 rounded-xl border hover:bg-gray-50 transition"
        href={`/${event.slug}/${gregYear}`}
      >
        <div class="font-semibold text-lg">{event.name}</div>
        <div class="text-gray-600">{event.hijriFormatted}</div>
        <div class="text-gray-800 font-medium">{event.gregFormatted}</div>
      </a>
    {/each}
  </div>

  <div class="mt-10 p-6 rounded-xl bg-gray-100 text-center">
    <div class="text-sm text-gray-500">Next Event</div>
    <div class="text-2xl font-bold">{nextEvent.name}</div>
    <div class="mt-2">
      {nextEvent.gregDate.diff(now, "day")} days remaining
    </div>
  </div>
</div>