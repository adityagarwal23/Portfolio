import { useEffect, useState, useRef } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@700&display=swap');

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  @keyframes scanline {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
  }
  @keyframes glitch1 {
    0%, 88%, 100% { clip-path: inset(0 0 100% 0); transform: translateX(0); }
    90% { clip-path: inset(20% 0 55% 0); transform: translateX(-3px); color: #93c5fd; }
    93% { clip-path: inset(65% 0 15% 0); transform: translateX(3px); color: #60a5fa; }
    95% { clip-path: inset(40% 0 40% 0); transform: translateX(-2px); }
  }
  @keyframes glitch2 {
    0%, 88%, 100% { clip-path: inset(0 0 100% 0); transform: translateX(0); }
    89% { clip-path: inset(50% 0 30% 0); transform: translateX(3px); color: #1d4ed8; }
    92% { clip-path: inset(10% 0 70% 0); transform: translateX(-3px); color: #2563eb; }
    94% { clip-path: inset(75% 0 5% 0);  transform: translateX(2px); }
  }
  @keyframes flicker {
    0%, 94%, 100% { opacity: 1; }
    95% { opacity: 0.88; }
    97% { opacity: 0.96; }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(5px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes progressGlow {
    0%, 100% { box-shadow: 0 0 6px #3b82f6, 0 0 14px #3b82f6; }
    50%       { box-shadow: 0 0 14px #3b82f6, 0 0 32px #3b82f6, 0 0 52px #3b82f622; }
  }
  @keyframes cornerPulse {
    0%, 100% { opacity: 0.25; }
    50%       { opacity: 0.85; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-5px); }
  }

  .mono  { font-family: 'Share Tech Mono', monospace; }
  .orbit { font-family: 'Orbitron', sans-serif; }

  .animate-blink   { animation: blink 1s step-end infinite; }
  .animate-scan    { animation: scanline 7s linear infinite; }
  .animate-flicker { animation: flicker 7s infinite; }
  .animate-corner  { animation: cornerPulse 2.5s ease-in-out infinite; }
  .animate-float   { animation: float 4.5s ease-in-out infinite; }

  .glitch { position: relative; display: inline-block; }
  .glitch::before,
  .glitch::after {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    opacity: 0.8;
  }
  .glitch::before { animation: glitch1 5s infinite linear; }
  .glitch::after  { animation: glitch2 5s infinite linear; }

  .crt {
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,0,0,0.08) 2px,
      rgba(0,0,0,0.08) 4px
    );
    pointer-events: none;
  }

  .bar-fill { animation: progressGlow 1.5s ease-in-out infinite; }
  .log-line { animation: fadeInUp 0.2s ease-out forwards; }
`;

const BOOT_LOGS = [
  { text: "INITIALIZING SESSION...",                delay: 150  },
  { text: "LOADING USER PROFILE............... OK", delay: 500  },
  { text: "ESTABLISHING SECURE CONNECTION..... OK", delay: 880  },
  { text: "DECRYPTING DATA STREAMS............ OK", delay: 1230 },
  { text: "MOUNTING INTERFACE MODULES......... OK", delay: 1580 },
  { text: "READY.",                                 delay: 2000 },
];

function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const fontSize = 13;
    const cols  = Math.floor(canvas.width / fontSize);
    const drops = Array.from({ length: cols }, () => Math.random() * -60);
    const chars = "01アイウエカキ10ABCDEF01クケコ";

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const b = Math.random();
        ctx.fillStyle = b > 0.93
          ? `rgba(147, 197, 253, ${b})`
          : `rgba(30, ${80 + Math.floor(b * 55)}, ${175 + Math.floor(b * 80)}, ${0.2 + b * 0.45})`;
        ctx.fillText(char, i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };

    const id = setInterval(draw, 50);
    return () => { clearInterval(id); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, opacity: 0.28 }} />;
}

export const LoadingScreen = ({ onComplete }) => {
  const [typed,    setTyped]    = useState("");
  const [logs,     setLogs]     = useState([]);
  const [progress, setProgress] = useState(0);
  const [phase,    setPhase]    = useState("typing");
  const fullText = "Greetings";

  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      setTyped(fullText.substring(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(iv);
        setTimeout(() => setPhase("logging"), 480);
      }
    }, 100);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    if (phase !== "logging") return;
    BOOT_LOGS.forEach(({ text, delay }, i) => {
      setTimeout(() => {
        setLogs(prev => [...prev, text]);
        setProgress(Math.round(((i + 1) / BOOT_LOGS.length) * 100));
        if (i === BOOT_LOGS.length - 1) {
          setTimeout(() => {
            setPhase("done");
            setTimeout(() => onComplete?.(), 700);
          }, 550);
        }
      }, delay);
    });
  }, [phase]);

  return (
    <>
      <style>{styles}</style>
      <div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden animate-flicker"
        style={{ background: "#000000" }}
      >
        <MatrixRain />
        <div className="crt absolute inset-0 z-10" />

        {/* Scanline sweep */}
        <div
          className="animate-scan absolute left-0 right-0 z-10 pointer-events-none"
          style={{ height: "2px", background: "rgba(59,130,246,0.08)" }}
        />

        {/* Corner brackets */}
        {[
          ["top-6 left-6",     "border-t-2 border-l-2", "0s"  ],
          ["top-6 right-6",    "border-t-2 border-r-2", "0.6s"],
          ["bottom-6 left-6",  "border-b-2 border-l-2", "1.2s"],
          ["bottom-6 right-6", "border-b-2 border-r-2", "1.8s"],
        ].map(([pos, border, delay], i) => (
          <div
            key={i}
            className={`absolute ${pos} ${border} animate-corner`}
            style={{ width: 20, height: 20, borderColor: "#3b82f6", animationDelay: delay }}
          />
        ))}

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center w-full max-w-md px-8">

          {/* Glitchy title */}
          <div className="animate-float mb-1">
            <span
              className="glitch orbit select-none"
              data-text={typed || " "}
              style={{
                color: "#3b82f6",
                fontSize: "3.75rem",
                letterSpacing: "0.07em",
                textShadow: "0 0 25px #3b82f6bb, 0 0 60px #3b82f644",
              }}
            >
              {typed || " "}
              {phase === "typing" && (
                <span className="animate-blink" style={{ color: "#3b82f6" }}>|</span>
              )}
            </span>
          </div>

          {/* Subtitle */}
          <p
            className="mono mb-7"
            style={{ color: "#3b82f644", fontSize: "0.58rem", letterSpacing: "0.42em" }}
          >
            ── SECURE PORTAL v3.1 ──
          </p>

          {/* Terminal box */}
          <div
            className="w-full mono mb-5 p-4 rounded-sm"
            style={{
              background: "rgba(0, 0, 0, 0.85)",
              border: "1px solid #3b82f633",
              boxShadow: "0 0 30px #3b82f611, inset 0 0 20px #00000050",
              minHeight: 162,
              fontSize: "0.7rem",
              color: "#3b82f6",
              lineHeight: 1.85,
            }}
          >
            <div style={{ color: "#3b82f644", marginBottom: 6, fontSize: "0.61rem" }}>
              user@portal:~$ connect --secure
            </div>
            {logs.map((log, i) => (
              <div
                key={i}
                className="log-line"
                style={{
                  color: log === "READY." ? "#93c5fd" : "#3b82f6",
                  textShadow: log === "READY." ? "0 0 12px #3b82f6cc" : "none",
                  fontWeight: log === "READY." ? "bold" : "normal",
                }}
              >
                <span style={{ color: "#3b82f633" }}>&gt; </span>{log}
              </div>
            ))}
            {phase === "logging" && (
              <span className="animate-blink" style={{ color: "#3b82f6" }}>█</span>
            )}
          </div>

          {/* Progress bar */}
          <div className="w-full mb-2">
            <div
              className="w-full rounded-sm overflow-hidden"
              style={{ height: "2px", background: "#0a0a0a", border: "1px solid #3b82f622" }}
            >
              <div
                className="h-full rounded-sm bar-fill"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #1d4ed8, #3b82f6, #60a5fa)",
                  transition: "width 0.45s ease",
                }}
              />
            </div>
          </div>

          <div
            className="mono flex justify-between w-full"
            style={{ color: "#3b82f644", fontSize: "0.57rem", letterSpacing: "0.2em" }}
          >
            <span>ESTABLISHING</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default function App() {
  const [done, setDone] = useState(false);
  if (done) return (
    <div style={{
      background: "#000000",
      color: "#3b82f6",
      fontFamily: "'Orbitron', sans-serif",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.8rem",
      letterSpacing: "0.12em",
      textShadow: "0 0 20px #3b82f6",
    }}>
      WELCOME ✦
    </div>
  );
  return <LoadingScreen onComplete={() => setDone(true)} />;
}