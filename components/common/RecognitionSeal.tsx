export type RecognitionSealKind =
  | "cbse"
  | "art-of-living"
  | "legacy"
  | "iso"
  | "aicte"
  | "awards";

type RecognitionSealProps = {
  kind: RecognitionSealKind;
};

const rayAngles = Array.from({ length: 11 }, (_, index) => -70 + index * 14);

export function RecognitionSeal({ kind }: RecognitionSealProps) {
  if (kind === "cbse") {
    return (
      <svg viewBox="0 0 96 96" aria-hidden="true" className="h-full w-full">
        <circle cx="48" cy="48" r="40" fill="#f7fcfd" stroke="#5fa9b7" strokeWidth="1.6" />
        <circle cx="48" cy="48" r="33.5" fill="none" stroke="#5fa9b7" strokeDasharray="1.5 2.8" />
        <path d="M48 25v9M34 31l6 7M62 31l-6 7M29 42h10M67 42H57" fill="none" stroke="#5fa9b7" strokeLinecap="round" strokeWidth="1.6" />
        <path d="M31 51c7-3 12-2 17 2v18c-5-4-10-5-17-2V51Zm34 0c-7-3-12-2-17 2v18c5-4 10-5 17-2V51Z" fill="#fff" stroke="#5fa9b7" strokeLinejoin="round" strokeWidth="1.7" />
        <path d="M48 53v18M35 57c4-.5 7 .2 10 2M61 57c-4-.5-7 .2-10 2M35 62c4-.5 7 .2 10 2M61 62c-4-.5-7 .2-10 2" fill="none" stroke="#5fa9b7" strokeLinecap="round" strokeWidth="1.15" />
        <path d="M20 73c7 6 16 10 28 10s21-4 28-10l-4-4c-7 5-14 8-24 8s-17-3-24-8l-4 4Z" fill="#5fa9b7" />
        <text x="48" y="19" textAnchor="middle" fill="#397d8c" fontSize="5.5" fontWeight="700" letterSpacing="1">CBSE</text>
      </svg>
    );
  }

  if (kind === "art-of-living") {
    return (
      <svg viewBox="0 0 96 96" aria-hidden="true" className="h-full w-full">
        <circle cx="48" cy="48" r="40" fill="#fffdf8" stroke="#e2b356" strokeWidth="1.4" />
        <circle cx="48" cy="48" r="34" fill="none" stroke="#e2b356" strokeDasharray="1.4 2.5" />
        {rayAngles.map((angle) => (
          <path
            key={angle}
            d="M48 21v12"
            fill="none"
            stroke="#d19a2c"
            strokeLinecap="round"
            strokeWidth="1.25"
            transform={`rotate(${angle} 48 48)`}
          />
        ))}
        <path d="M29 50a19 19 0 0 1 38 0H29Z" fill="#e8ad35" />
        <path d="M26 51h44" fill="none" stroke="#263e3a" strokeWidth="1.4" />
        <path d="M30 56h36" fill="none" stroke="#d19a2c" strokeLinecap="round" strokeWidth="1.3" />
        <text x="48" y="65" textAnchor="middle" fill="#263e3a" fontSize="5.1" fontWeight="800" letterSpacing=".45">ART OF LIVING</text>
        <text x="48" y="72" textAnchor="middle" fill="#986f1f" fontSize="4.2" fontWeight="700" letterSpacing="1">EDUCATION</text>
      </svg>
    );
  }

  if (kind === "legacy") {
    return (
      <svg viewBox="0 0 96 96" aria-hidden="true" className="h-full w-full">
        <circle cx="48" cy="48" r="40" fill="#fbfcff" stroke="#344d88" strokeWidth="1.5" />
        <circle cx="48" cy="48" r="34" fill="none" stroke="#7185b5" strokeDasharray="1.5 2.6" />
        <path d="M48 21c-4 4-4 8 0 12 4-4 4-8 0-12Z" fill="#d7a845" stroke="#344d88" strokeWidth="1" />
        <path d="M48 32v22M48 40c-8-9-15-8-18-3 7 1 11 5 12 12M48 42c8-9 15-8 18-3-7 1-11 5-12 12M48 48c-8-6-14-4-16 1 6 0 9 3 11 8M48 48c8-6 14-4 16 1-6 0-9 3-11 8" fill="none" stroke="#344d88" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
        <path d="M30 59c7-2 13-1 18 3 5-4 11-5 18-3v11c-7-2-13-1-18 3-5-4-11-5-18-3V59Z" fill="#fff" stroke="#344d88" strokeLinejoin="round" strokeWidth="1.4" />
        <text x="48" y="83" textAnchor="middle" fill="#344d88" fontSize="5" fontWeight="800" letterSpacing=".85">SSRVM</text>
      </svg>
    );
  }

  if (kind === "iso") {
    return (
      <svg viewBox="0 0 96 96" aria-hidden="true" className="h-full w-full">
        <circle cx="48" cy="48" r="40" fill="#fff" stroke="#355197" strokeWidth="1.6" />
        <circle cx="48" cy="48" r="34" fill="none" stroke="#355197" strokeWidth="1" />
        <path d="M31 37h34M31 57h34M48 29c-7 5-11 12-11 19s4 14 11 19M48 29c7 5 11 12 11 19s-4 14-11 19M28 47h40" fill="none" stroke="#7c8fbd" strokeWidth="1" />
        <text x="48" y="53" textAnchor="middle" fill="#253f87" fontFamily="Georgia, serif" fontSize="22" fontWeight="700">ISO</text>
        <text x="48" y="65" textAnchor="middle" fill="#253f87" fontSize="7" fontWeight="800" letterSpacing=".8">9001</text>
        <path d="M28 71c6 6 12 9 20 9s14-3 20-9" fill="none" stroke="#d2a13d" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    );
  }

  if (kind === "aicte") {
    return (
      <svg viewBox="0 0 96 96" aria-hidden="true" className="h-full w-full">
        <circle cx="48" cy="48" r="40" fill="#fffaf6" stroke="#c84b35" strokeWidth="1.5" />
        <circle cx="48" cy="48" r="34" fill="#b93c2a" />
        <path d="M48 22c8 7 15 9 23 10v19c0 15-10 24-23 30-13-6-23-15-23-30V32c8-1 15-3 23-10Z" fill="#c54a32" stroke="#f3c76d" strokeWidth="1.4" />
        <path d="M48 35c5 5 6 9 2 14l-2 3-2-3c-4-5-3-9 2-14Z" fill="#ffe29a" />
        <path d="M44 51h8v14h-8zM39 65h18" fill="#ffe29a" />
        <path d="M31 38c-5 8-5 17 0 26M65 38c5 8 5 17 0 26" fill="none" stroke="#f3c76d" strokeLinecap="round" strokeWidth="1.6" />
        <text x="48" y="75" textAnchor="middle" fill="#fff7dd" fontSize="6.5" fontWeight="800" letterSpacing=".8">AICTE</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 96 96" aria-hidden="true" className="h-full w-full">
      <circle cx="48" cy="48" r="40" fill="#fdfaff" stroke="#8f6fa7" strokeWidth="1.5" />
      <circle cx="48" cy="48" r="34" fill="none" stroke="#b59ac7" strokeDasharray="1.5 2.5" />
      <path d="m48 25 3.2 7.2 7.8.8-5.8 5.3 1.7 7.7-6.9-4-6.9 4 1.7-7.7L37 33l7.8-.8L48 25Z" fill="#d9a441" />
      <path d="M48 46v17M37 58c4 0 8 2 11 5 3-3 7-5 11-5M34 65c5 0 10 2 14 6 4-4 9-6 14-6" fill="none" stroke="#6c5182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      <circle cx="30" cy="44" r="4" fill="#db496f" />
      <circle cx="66" cy="44" r="4" fill="#ec9e2d" />
      <circle cx="30" cy="56" r="4" fill="#7854a8" />
      <circle cx="66" cy="56" r="4" fill="#2b98a5" />
      <path d="M24 70c7 8 14 12 24 12s17-4 24-12" fill="none" stroke="#b59ac7" strokeLinecap="round" strokeWidth="1.3" />
    </svg>
  );
}
