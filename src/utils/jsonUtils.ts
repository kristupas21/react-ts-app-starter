export function safeParseJSON(obj: any) {
  try {
    return JSON.parse(obj);
  } catch (_) {
    return null;
  }
}
