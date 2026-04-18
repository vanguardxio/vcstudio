// src/lib/cookie.client.ts

/**
 * ELITE CLIENT-SIDE COOKIE MATRIX
 * Strictly for non-sensitive UI state persistence (e.g., sidebar toggles).
 * DO NOT use for authentication, session tokens, or cryptographic keys.
 */

export function setClientCookie(key: string, value: string, days = 7) {
  // Enforce maximum client-side security flags
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${key}=${value}; expires=${expires}; path=/; Secure; SameSite=Strict`;
}

export function getClientCookie(key: string): string | undefined {
  if (typeof document === "undefined") return undefined; // Prevent SSR crashes
  
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${key}=`))
    ?.split("=")[1];
}

export function deleteClientCookie(key: string) {
  // Must match the exact path and security flags to successfully delete
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; Secure; SameSite=Strict`;
}
