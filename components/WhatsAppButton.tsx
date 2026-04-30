"use client";
import { useLang } from "@/lib/LangContext";

const WP_NUMBER = "905523507807";

export default function WhatsAppButton() {
  const { lang } = useLang();
  const label = lang === "tr" ? "WhatsApp ile yaz" : "Chat on WhatsApp";

  return (
    <a
      href={`https://wa.me/${WP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="wp-btn"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 100,
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
      }}
    >
      {/* Official WhatsApp icon */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 2C8.268 2 2 8.268 2 16c0 2.476.652 4.797 1.793 6.804L2 30l7.374-1.77A13.936 13.936 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"
          fill="white"
        />
        <path
          d="M22.5 19.57c-.3-.15-1.77-.873-2.046-.972-.274-.1-.473-.15-.673.15-.199.3-.773.972-.948 1.172-.174.199-.349.224-.648.075-.3-.15-1.266-.467-2.412-1.488-.891-.795-1.493-1.776-1.668-2.076-.174-.3-.018-.462.13-.61.134-.135.3-.35.45-.524.15-.175.2-.3.3-.5.1-.2.05-.374-.025-.524-.075-.15-.673-1.623-.923-2.222-.242-.583-.489-.504-.673-.513l-.573-.01c-.2 0-.523.075-.797.374-.274.3-1.047 1.023-1.047 2.497 0 1.473 1.072 2.896 1.221 3.096.15.2 2.11 3.22 5.113 4.516.715.31 1.273.495 1.707.633.718.229 1.372.197 1.889.119.576-.086 1.773-.725 2.023-1.424.25-.7.25-1.298.175-1.423-.074-.124-.274-.2-.573-.35z"
          fill="#25D366"
        />
      </svg>
    </a>
  );
}
