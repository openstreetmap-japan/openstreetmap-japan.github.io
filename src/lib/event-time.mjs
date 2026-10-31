// Interpret timezone-less dates in Japan, consistently in CI and the browser.
export function eventTiming(value) {
  const dateOnly = /^\d{4}-\d{2}-\d{2}$/.test(value);
  const zoned = /(?:Z|[+-]\d{2}:?\d{2})$/i.test(value);
  const start = Date.parse(dateOnly ? `${value}T00:00:00+09:00` : zoned ? value : `${value}+09:00`);
  // Without a specified start time, retain the event throughout its calendar day.
  return { start, expires: dateOnly ? start + 86_400_000 : start };
}
