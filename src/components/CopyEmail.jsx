import { useEffect, useRef, useState } from "react";

export const CopyEmail = () => {
  const [status, setStatus] = useState("");
  const timer = useRef(null);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const copy = async () => {
    window.clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText("adityagarwal05@gmail.com");
      setStatus("Email copied to clipboard.");
    } catch {
      setStatus("Couldn't copy. Select the email address above, or use Email me.");
    }
    timer.current = window.setTimeout(() => setStatus(""), 5000);
  };
  return <div className="copy-email">
    <button type="button" className="copy-email-button" onClick={copy}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M15 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3" /></svg>
      {status === "Email copied to clipboard." ? "Copied!" : "Copy email address"}
    </button>
    <p role="status" className="copy-status">{status}</p>
  </div>;
};
