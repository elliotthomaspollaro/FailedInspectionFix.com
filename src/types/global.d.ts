/* ═══════════════════════════════════════════════════════════════════
 * global.d.ts — Window type extensions
 * ═══════════════════════════════════════════════════════════════════ */

interface Window {
  gtag: (...args: unknown[]) => void;
  dataLayer: unknown[];
}
