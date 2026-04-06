export const compactUrl = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export const splitSentences = (text: string) =>
  text
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
