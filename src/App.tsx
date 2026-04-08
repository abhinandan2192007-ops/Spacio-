import { useState } from "react";

const ACCENT = "#00e5ff";
const ACCENT2 = "#ff6b35";
const PURPLE = "#b388ff";

const pages = [
  {
    id: "home",
    label: "01 — Home",
    icon: "🏠",
    color: "#00e5ff",
    tagline: "Hero & First Impression",
    sections: [
      {
        name: "Hero Section",
        type: "CONVERSION",
        desc: "Full-viewport animated space scene. Headline: 'Discover the Universe with AI'. Sub-headline powered by Gemini live text generation. Primary CTA: 'Start Exploring' → AI Chat. Secondary CTA: 'Watch Research Demo'.",
        ai: "Gemini 2.0 Pro generates rotating taglines & personalized welcome messages",
        tags: ["Hero", "CTA", "Animation", "Gemini Live"],
      },
      {
        name: "Mission Statement Strip",
        type: "TRUST",
        desc: "3-column animated counters: Galaxies Mapped / Research Papers / Active Missions. Bold numbers animate on scroll.",
        ai: "Real-time data fetched via Gemini grounding tool from NASA/ESA APIs",
        tags: ["Social Proof", "Counter", "Grounding"],
      },
      {
        name: "AI Research Assistant Preview",
        type: "ENGAGEMENT",
        desc: "Live embedded Gemini chat widget. Pre-seeded with space Q&A. Shows 3 suggested questions. Draws users into the product immediately.",
        ai: "Gemini 2.0 Pro multimodal — accepts text + images of space objects",
        tags: ["AI Widget", "Gemini Chat", "Lead Magnet"],
      },
      {
        name: "Featured Research Cards",
        type: "CONTENT",
        desc: "Horizontal scroll of 6 latest research topics with glowing card UI. Each card has an AI-generated summary badge.",
        ai: "Gemini summarizes full papers into 2-sentence highlights",
        tags: ["Cards", "AI Summary", "Research"],
      },
      {
        name: "Anti-Gravity Tech Spotlight",
        type: "FLAGSHIP",
        desc: "Full-bleed cinematic section dedicated to anti-gravity research. Parallax star layers. Interactive 3D model toggle via canvas.",
        ai: "Gemini 2.0 explains concepts dynamically based on user expertise level",
        tags: ["Flagship", "3D", "Parallax", "Gemini"],
      },
      {
        name: "Newsletter + Early Access",
        type: "CONVERSION",
        desc: "Email capture with animated orbit ring. Offer: 'Get AI-curated space digest weekly'. Connects to Gemini for personalized onboarding email draft.",
        ai: "Gemini drafts personalized welcome email on signup",
        tags: ["Email Capture", "Lead Gen", "Gemini Draft"],
      },
    ],
  },
  {
    id: "research",
    label: "02 — Research Hub",
    icon: "🔭",
    color: "#b388ff",
    tagline: "AI-Powered Discovery Engine",
    sections: [
      {
        name: "Smart Search Bar",
        type: "CORE",
        desc: "Gemini-powered semantic search across all research. Understands natural language: 'Show me black hole studies from 2023 with gravitational lensing'.",
        ai: "Gemini 2.0 Pro with grounding + vector search over research database",
        tags: ["Search", "Semantic AI", "Core Feature"],
      },
      {
        name: "Research Categories Grid",
        type: "NAVIGATION",
        desc: "12-tile animated grid: Black Holes / Exoplanets / Anti-Gravity / Dark Matter / Wormholes / Mars Colonization / Deep Space / Quantum Propulsion / etc.",
        ai: "Gemini auto-tags and categorizes new research submissions",
        tags: ["Grid", "Categories", "Auto-Tag"],
      },
      {
        name: "Paper Deep-Dive Reader",
        type: "ENGAGEMENT",
        desc: "Upload or select a research PDF. Gemini generates: Executive Summary / Key Findings / Methodology / Plain-English explanation / Related Papers.",
        ai: "Gemini 2.0 Pro Document Understanding — full PDF analysis",
        tags: ["PDF", "Document AI", "Deep Dive"],
      },
      {
        name: "Research Timeline",
        type: "VISUAL",
        desc: "Interactive horizontal timeline of space research breakthroughs. Click any node to get AI-narrated explanation of significance.",
        ai: "Gemini narrates timeline events in chosen detail level",
        tags: ["Timeline", "Interactive", "Narration"],
      },
      {
        name: "Collaboration Board",
        type: "COMMUNITY",
        desc: "Researchers can post hypotheses. Gemini fact-checks, suggests related evidence, and scores plausibility.",
        ai: "Gemini 2.0 acts as peer reviewer — scores and suggests improvements",
        tags: ["Community", "Peer Review AI", "Collaboration"],
      },
    ],
  },
  {
    id: "antigravity",
    label: "03 — Anti-Gravity Lab",
    icon: "⚡",
    color: "#ff6b35",
    tagline: "Flagship Research Vertical",
    sections: [
      {
        name: "Concept Explainer",
        type: "EDUCATION",
        desc: "Three-level explainer: Kid / Scientist / Expert. Toggle between depths. Gemini rewrites content in real-time for each level.",
        ai: "Gemini 2.0 Pro real-time content adaptation by expertise",
        tags: ["Education", "Adaptive AI", "Content"],
      },
      {
        name: "Live Simulation Canvas",
        type: "INTERACTIVE",
        desc: "WebGL canvas simulating gravitational field manipulation. Users adjust parameters; Gemini narrates what would happen physically.",
        ai: "Gemini provides real-time physics commentary as parameters change",
        tags: ["WebGL", "Simulation", "Real-time AI"],
      },
      {
        name: "Experiment Database",
        type: "DATA",
        desc: "Searchable table of anti-gravity experiments worldwide. Each row links to full paper + AI summary.",
        ai: "Gemini synthesizes cross-experiment findings on demand",
        tags: ["Database", "Search", "Synthesis"],
      },
      {
        name: "Hypothesis Generator",
        type: "TOOL",
        desc: "Input known variables; Gemini generates 5 testable hypotheses with methodology suggestions and risk analysis.",
        ai: "Gemini 2.0 Pro scientific reasoning mode",
        tags: ["AI Tool", "Hypothesis", "Research Aid"],
      },
      {
        name: "Expert Interview Videos",
        type: "TRUST",
        desc: "Embedded video interviews with researchers. Gemini generates real-time transcript + AI summary sidebar.",
        ai: "Gemini Live audio transcription + key point extraction",
        tags: ["Video", "Transcript AI", "Trust"],
      },
    ],
  },
  {
    id: "missions",
    label: "04 — Active Missions",
    icon: "🚀",
    color: "#34d399",
    tagline: "Live Space Mission Tracker",
    sections: [
      {
        name: "Mission Map",
        type: "VISUAL",
        desc: "Interactive 3D solar system map showing active spacecraft positions in real time. Hover to get AI-generated mission briefing.",
        ai: "Gemini grounding pulls live NASA/ESA telemetry data",
        tags: ["3D Map", "Real-time", "Grounding"],
      },
      {
        name: "Mission Status Dashboard",
        type: "DATA",
        desc: "Card grid: Mission Name / Launch Date / Status / Distance / Last Contact / Key Objective. Live-updated.",
        ai: "Gemini summarizes latest mission dispatches into one-line status",
        tags: ["Dashboard", "Live Data", "Status"],
      },
      {
        name: "Mission Deep Dive",
        type: "CONTENT",
        desc: "Individual mission pages: history, science goals, team, timeline, discoveries so far. AI-narrated audio option.",
        ai: "Gemini generates audio narration of mission briefs",
        tags: ["Detail Page", "Audio AI", "Deep Dive"],
      },
      {
        name: "Upcoming Launches",
        type: "ENGAGEMENT",
        desc: "Countdown timers for next 5 launches. 'Set Reminder' + AI pre-brief delivered on launch day.",
        ai: "Gemini drafts personalized launch-day briefing email",
        tags: ["Countdown", "Reminder", "Email AI"],
      },
    ],
  },
  {
    id: "ai-lab",
    label: "05 — AI Lab",
    icon: "🤖",
    color: "#f472b6",
    tagline: "Gemini-Powered Research Tools",
    sections: [
      {
        name: "Space Image Analyzer",
        type: "TOOL",
        desc: "Upload any space image (telescope photo, satellite image). Gemini identifies objects, estimates distances, names formations, and links to research.",
        ai: "Gemini 2.0 Pro Vision — multimodal image understanding",
        tags: ["Image AI", "Vision", "Multimodal"],
      },
      {
        name: "Research Assistant Chat",
        type: "CORE",
        desc: "Full-page AI chat interface. Persistent conversation history. Can answer questions, summarize papers, generate citations, suggest experiments.",
        ai: "Gemini 2.0 Pro with system prompt tuned to space research domain",
        tags: ["Chat", "Core Feature", "Domain AI"],
      },
      {
        name: "Data Visualizer",
        type: "TOOL",
        desc: "Paste raw space data (CSV, JSON). Gemini interprets it, suggests best chart type, generates visualization, and writes findings summary.",
        ai: "Gemini code execution + data interpretation",
        tags: ["Data Viz", "Code Execution", "Analysis"],
      },
      {
        name: "Citation Generator",
        type: "UTILITY",
        desc: "Input a topic; Gemini finds relevant papers (grounded search) and formats citations in APA/MLA/Chicago.",
        ai: "Gemini grounding + formatting",
        tags: ["Citation", "Academic", "Grounding"],
      },
      {
        name: "Grant Writing Assistant",
        type: "PREMIUM",
        desc: "Input research goals; Gemini drafts a grant proposal outline, abstract, and budget justification. Premium feature.",
        ai: "Gemini 2.0 Pro long-form generation + document output",
        tags: ["Premium", "Grant", "Long-form AI"],
      },
    ],
  },
  {
    id: "community",
    label: "06 — Community",
    icon: "🌐",
    color: "#fbbf24",
    tagline: "Global Researcher Network",
    sections: [
      {
        name: "Researcher Profiles",
        type: "SOCIAL",
        desc: "Public profiles: bio, institution, research interests, publications. Gemini generates a 'Research DNA' summary card.",
        ai: "Gemini synthesizes profile into shareable summary",
        tags: ["Profiles", "Social", "AI Summary"],
      },
      {
        name: "Discussion Forums",
        type: "COMMUNITY",
        desc: "Topic-threaded forums. Gemini moderates content, surfaces best answers, and links discussions to relevant papers.",
        ai: "Gemini moderation + knowledge linking",
        tags: ["Forum", "Moderation AI", "Community"],
      },
      {
        name: "Weekly AI Digest",
        type: "RETENTION",
        desc: "Personalized weekly email of top research, missions, and discussions — curated by Gemini based on user interests.",
        ai: "Gemini personalization engine",
        tags: ["Email", "Personalization", "Retention"],
      },
      {
        name: "Live Events & Webinars",
        type: "ENGAGEMENT",
        desc: "Calendar of upcoming talks. AI-generated pre-read and post-summary for each event.",
        ai: "Gemini event prep + recap generation",
        tags: ["Events", "Calendar", "AI Recap"],
      },
    ],
  },
];

const techStack = [
  { name: "React + Vite", role: "Frontend Framework", color: "#61dafb", icon: "⚛️" },
  { name: "Gemini 2.0 Pro", role: "AI Core Engine", color: "#4285f4", icon: "✨" },
  { name: "Gemini Vision", role: "Image Analysis", color: "#34a853", icon: "👁️" },
  { name: "Gemini Grounding", role: "Real-time Data", color: "#fbbc04", icon: "🌐" },
  { name: "Tailwind CSS", role: "Styling", color: "#06b6d4", icon: "🎨" },
  { name: "Three.js / WebGL", role: "3D Visuals", color: "#ff6b35", icon: "🌌" },
  { name: "Firebase", role: "Auth + Database", color: "#ff9800", icon: "🔥" },
  { name: "Framer Motion", role: "Animations", color: "#b388ff", icon: "🎬" },
  { name: "NASA/ESA APIs", role: "Space Data", color: "#00e5ff", icon: "🚀" },
  { name: "Recharts / D3", role: "Data Visualization", color: "#ff6b6b", icon: "📊" },
];

const conversionPlan = [
  { step: "01", action: "Land on Hero", goal: "Awe + Curiosity", metric: "Bounce Rate < 30%", color: "#00e5ff" },
  { step: "02", action: "Try AI Chat Widget", goal: "First Value Moment", metric: "Engagement > 60%", color: "#b388ff" },
  { step: "03", action: "Explore Research Hub", goal: "Deep Engagement", metric: "Session > 4 min", color: "#ff6b35" },
  { step: "04", action: "Use AI Lab Tool", goal: "Product Experience", metric: "Tool Use > 40%", color: "#34d399" },
  { step: "05", action: "Sign Up / Email", goal: "Lead Captured", metric: "Conversion > 12%", color: "#f472b6" },
  { step: "06", action: "Return via Digest", goal: "Retention", metric: "Weekly Return > 35%", color: "#fbbf24" },
];

const typeColors: Record<string, string> = {
  CONVERSION: "#ff6b35",
  TRUST: "#34d399",
  ENGAGEMENT: "#00e5ff",
  CONTENT: "#b388ff",
  FLAGSHIP: "#fbbf24",
  CORE: "#f472b6",
  NAVIGATION: "#7dd3fc",
  VISUAL: "#a78bfa",
  COMMUNITY: "#fb923c",
  EDUCATION: "#4ade80",
  INTERACTIVE: "#38bdf8",
  DATA: "#f9a8d4",
  TOOL: "#fde68a",
  UTILITY: "#86efac",
  PREMIUM: "#ff6b35",
  SOCIAL: "#c4b5fd",
  RETENTION: "#6ee7b7",
};

export default function SpacioWebsitePlan() {
  const [activePage, setActivePage] = useState(pages[0]);
  const [activeSection, setActiveSection] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("structure"); // structure | conversion | tech | files

  return (
    <div style={{
      minHeight: "100vh",
      background: "#04040f",
      color: "#e8e8f0",
      fontFamily: "'Georgia', serif",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300&display=swap');

        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a1a; }
        ::-webkit-scrollbar-thumb { background: #00e5ff44; border-radius: 2px; }

        @keyframes starFloat {
          0%,100% { opacity:0.2; transform:translateY(0); }
          50% { opacity:0.8; transform:translateY(-3px); }
        }
        @keyframes pulseGlow {
          0%,100% { box-shadow: 0 0 8px currentColor; }
          50% { box-shadow: 0 0 20px currentColor, 0 0 40px currentColor; }
        }
        @keyframes slideIn {
          from { opacity:0; transform:translateX(-12px); }
          to { opacity:1; transform:translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(10px); }
          to { opacity:1; transform:translateY(0); }
        }
        .page-btn {
          transition: all 0.2s ease;
          cursor: pointer;
          border: none;
          background: transparent;
          text-align: left;
          width: 100%;
        }
        .page-btn:hover { background: rgba(255,255,255,0.04) !important; }
        .section-card {
          transition: all 0.25s ease;
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.07);
        }
        .section-card:hover {
          border-color: rgba(0,229,255,0.3);
          background: rgba(0,229,255,0.04) !important;
          transform: translateY(-2px);
        }
        .tab-btn {
          transition: all 0.2s ease;
          cursor: pointer;
          border: none;
        }
        .tech-chip {
          transition: all 0.2s ease;
        }
        .tech-chip:hover { transform: scale(1.04); }
        .conv-step {
          transition: all 0.2s ease;
        }
        .conv-step:hover { transform: translateX(4px); }
      `}</style>

      {/* Star background */}
      <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:0 }}>
        {Array.from({length:80}).map((_,i) => (
          <div key={i} style={{
            position:"absolute",
            left:`${(i*137.5)%100}%`,
            top:`${(i*97.3)%100}%`,
            width: i%5===0 ? 2 : 1,
            height: i%5===0 ? 2 : 1,
            borderRadius:"50%",
            background:"white",
            animation:`starFloat ${2+i%4}s ease-in-out ${i%3}s infinite`,
            opacity: 0.3,
          }} />
        ))}
      </div>

      <div style={{ position:"relative", zIndex:1, display:"flex", flexDirection:"column", minHeight:"100vh" }}>

        {/* ── HEADER ── */}
        <header style={{
          padding:"24px 32px 20px",
          borderBottom:"1px solid rgba(0,229,255,0.12)",
          background:"rgba(4,4,15,0.9)",
          backdropFilter:"blur(12px)",
          position:"sticky", top:0, zIndex:100,
        }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
            <div>
              <div style={{
                fontFamily:"'Cinzel',serif", fontSize:22, fontWeight:700,
                color:"#fff", letterSpacing:"0.3em",
                textShadow:`0 0 30px ${ACCENT}88`,
              }}>
                SPACIO
              </div>
              <div style={{
                fontFamily:"'Crimson Pro',serif", fontSize:12, color:`${ACCENT}99`,
                letterSpacing:"0.2em", marginTop:2,
              }}>
                WEBSITE ARCHITECTURE PLAN · GEMINI 2.0 PRO
              </div>
            </div>
            <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
              {["structure","conversion","tech","files"].map(tab => (
                <button key={tab} className="tab-btn"
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding:"7px 16px",
                    borderRadius:20,
                    fontSize:11,
                    letterSpacing:"0.12em",
                    fontFamily:"'Cinzel',serif",
                    textTransform:"uppercase",
                    background: activeTab===tab ? ACCENT : "transparent",
                    color: activeTab===tab ? "#04040f" : `${ACCENT}88`,
                    border: `1px solid ${activeTab===tab ? ACCENT : ACCENT+"33"}`,
                    fontWeight: activeTab===tab ? 700 : 400,
                  }}>
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* ── MAIN CONTENT ── */}
        <main style={{ flex: 1, display: "flex", overflow: "hidden" }}>
          {activeTab === "structure" && (
            <>
              {/* Sidebar — pages */}
              <aside style={{
                width:230, flexShrink:0,
                borderRight:"1px solid rgba(0,229,255,0.1)",
                background:"rgba(4,4,15,0.7)",
                backdropFilter:"blur(8px)",
                padding:"20px 0",
                overflowY:"auto",
              }}>
                <div style={{ padding:"0 16px 12px", fontSize:9, letterSpacing:"0.2em",
                  color:`${ACCENT}55`, fontFamily:"'Cinzel',serif", textTransform:"uppercase" }}>
                  Pages · {pages.length} total
                </div>
                {pages.map(p => (
                  <button key={p.id} className="page-btn"
                    onClick={() => { setActivePage(p); setActiveSection(null); }}
                    style={{
                      padding:"12px 16px",
                      borderLeft: activePage.id===p.id ? `3px solid ${p.color}` : "3px solid transparent",
                      background: activePage.id===p.id ? `${p.color}11` : "transparent",
                    }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                      <span style={{ fontSize:16 }}>{p.icon}</span>
                      <div>
                        <div style={{
                          fontFamily:"'Cinzel',serif", fontSize:10, fontWeight:600,
                          color: activePage.id===p.id ? p.color : "#888",
                          letterSpacing:"0.1em",
                        }}>{p.label}</div>
                        <div style={{ fontSize:9, color:"#555", marginTop:2, fontFamily:"'Crimson Pro',serif" }}>
                          {p.tagline}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </aside>

              {/* Main Content - Sections */}
              <div style={{ flex: 1, padding: "32px", overflowY: "auto" }}>
                <div style={{ maxWidth: 800, margin: "0 auto" }}>
                  <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 24, color: activePage.color, marginBottom: 8 }}>
                    {activePage.label}
                  </h2>
                  <p style={{ color: "#aaa", marginBottom: 32 }}>{activePage.tagline}</p>

                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {activePage.sections.map((section, idx) => (
                      <div key={idx} className="section-card" style={{
                        padding: 20,
                        borderRadius: 8,
                        background: "rgba(255,255,255,0.02)",
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                          <h3 style={{ fontSize: 18, color: "#fff", margin: 0 }}>{section.name}</h3>
                          <span style={{
                            fontSize: 10,
                            padding: "4px 8px",
                            borderRadius: 4,
                            background: `${typeColors[section.type]}22`,
                            color: typeColors[section.type],
                            border: `1px solid ${typeColors[section.type]}55`,
                            letterSpacing: "0.1em"
                          }}>{section.type}</span>
                        </div>
                        <p style={{ color: "#ccc", fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{section.desc}</p>
                        
                        <div style={{ background: "rgba(0,229,255,0.05)", padding: 12, borderRadius: 6, borderLeft: `2px solid ${ACCENT}`, marginBottom: 16 }}>
                          <div style={{ fontSize: 10, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>AI Integration</div>
                          <div style={{ fontSize: 13, color: "#e8e8f0" }}>{section.ai}</div>
                        </div>

                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                          {section.tags.map(tag => (
                            <span key={tag} style={{
                              fontSize: 10,
                              padding: "2px 8px",
                              borderRadius: 12,
                              background: "rgba(255,255,255,0.1)",
                              color: "#888"
                            }}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "conversion" && (
            <div style={{ flex: 1, padding: "40px", overflowY: "auto", display: "flex", justifyContent: "center" }}>
              <div style={{ maxWidth: 600, width: "100%" }}>
                <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 24, color: "#fff", marginBottom: 32, textAlign: "center" }}>
                  User Journey & Conversion Plan
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {conversionPlan.map((step, idx) => (
                    <div key={idx} className="conv-step" style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 20,
                      padding: 20,
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: 8,
                      position: "relative"
                    }}>
                      <div style={{
                        fontSize: 24,
                        fontFamily: "'Cinzel', serif",
                        color: step.color,
                        opacity: 0.5,
                        fontWeight: 700
                      }}>{step.step}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 16, color: "#fff", fontWeight: 600, marginBottom: 4 }}>{step.action}</div>
                        <div style={{ fontSize: 13, color: "#888" }}>Goal: {step.goal}</div>
                      </div>
                      <div style={{
                        fontSize: 12,
                        color: step.color,
                        padding: "4px 12px",
                        background: `${step.color}11`,
                        borderRadius: 12,
                        border: `1px solid ${step.color}33`
                      }}>
                        {step.metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "tech" && (
            <div style={{ flex: 1, padding: "40px", overflowY: "auto", display: "flex", justifyContent: "center" }}>
              <div style={{ maxWidth: 800, width: "100%" }}>
                <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 24, color: "#fff", marginBottom: 32, textAlign: "center" }}>
                  Technology Stack
                </h2>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                  gap: 20
                }}>
                  {techStack.map((tech, idx) => (
                    <div key={idx} className="tech-chip" style={{
                      padding: 20,
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      gap: 16
                    }}>
                      <div style={{ fontSize: 28 }}>{tech.icon}</div>
                      <div>
                        <div style={{ fontSize: 15, color: "#fff", fontWeight: 600, marginBottom: 4 }}>{tech.name}</div>
                        <div style={{ fontSize: 12, color: tech.color }}>{tech.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "files" && (
            <div style={{ flex: 1, padding: "40px", overflowY: "auto", display: "flex", justifyContent: "center" }}>
              <div style={{ maxWidth: 600, width: "100%", textAlign: "center" }}>
                <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 24, color: "#fff", marginBottom: 16 }}>
                  File Structure
                </h2>
                <p style={{ color: "#888", marginBottom: 32 }}>
                  The project follows a standard Vite + React structure with Tailwind CSS.
                </p>
                <div style={{
                  background: "rgba(0,0,0,0.5)",
                  padding: 24,
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.1)",
                  textAlign: "left",
                  fontFamily: "monospace",
                  color: "#ccc",
                  lineHeight: 1.8
                }}>
                  <div>📁 src/</div>
                  <div style={{ paddingLeft: 20 }}>📄 App.tsx <span style={{ color: "#666" }}>// Main application</span></div>
                  <div style={{ paddingLeft: 20 }}>📄 main.tsx <span style={{ color: "#666" }}>// Entry point</span></div>
                  <div style={{ paddingLeft: 20 }}>📄 index.css <span style={{ color: "#666" }}>// Tailwind imports</span></div>
                  <div style={{ paddingLeft: 20 }}>📁 components/ <span style={{ color: "#666" }}>// Reusable UI</span></div>
                  <div style={{ paddingLeft: 20 }}>📁 pages/ <span style={{ color: "#666" }}>// Route components</span></div>
                  <div style={{ paddingLeft: 20 }}>📁 lib/ <span style={{ color: "#666" }}>// Utilities & API</span></div>
                  <div>📄 package.json</div>
                  <div>📄 vite.config.ts</div>
                  <div>📄 .env.example</div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
