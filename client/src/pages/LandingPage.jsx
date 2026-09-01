import { useEffect, useState } from "react";
import "./landing.css";
import synergyLogo from "../assets/synergy-logo.png";

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const sections = document.querySelectorAll("header[id], section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="synergy-page">

      {/* ================= NAVBAR ================= */}

      <nav className="nav">
        <div className="wrap nav-wrap">

          <a href="#top" className="mark" onClick={closeMenu}>
            <img
              src={synergyLogo}
              alt="Synergy"
              className="logo-img"
            />
          </a>

          <div className="nav-links">
            <a
              href="#how"
              className={activeSection === "how" ? "active" : ""}
            >
              How it works
            </a>

            <a
              href="#pillars"
              className={activeSection === "pillars" ? "active" : ""}
            >
              Ask for anything
            </a>

            <a
              href="#trust"
              className={activeSection === "trust" ? "active" : ""}
            >
              Trust score
            </a>

            <a
              href="#impact"
              className={activeSection === "impact" ? "active" : ""}
            >
              Community wins
            </a>
          </div>

          <div className="nav-actions">
            <a href="#join" className="btn btn-primary">
              Join free
            </a>

            <button
              className="menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

        </div>

        {/* MOBILE MENU */}

        <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
          <a href="#how" onClick={closeMenu}>
            How it works
          </a>

          <a href="#pillars" onClick={closeMenu}>
            Ask for anything
          </a>

          <a href="#trust" onClick={closeMenu}>
            Trust score
          </a>

          <a href="#impact" onClick={closeMenu}>
            Community wins
          </a>

          <a href="#join" onClick={closeMenu}>
            Join free
          </a>
        </div>
      </nav>


      {/* ================= HERO ================= */}

      <header className="hero" id="top">

        <div className="wrap hero-grid">

          <div className="hero-copy">

            <span className="chip">
              🎒 made for campus life
            </span>

            <h1>
              Ask.
              <br />
              Get <span className="hl">helped</span>.
              <br />
              Repeat.
            </h1>

            <p className="lede">
              Notes, a charger, a hand moving boxes, fifteen minutes
              of someone's brain for your bug — post it, and someone
              on your campus shows up.
            </p>

            <div className="hero-actions">

              <a href="#join" className="btn btn-primary">
                Post a request
              </a>

              <a href="#how" className="btn btn-outline">
                See how it works
              </a>

            </div>

          </div>


          {/* RIBBON + STICKERS */}

          <div className="ribbon-stage">

            <svg
              className="ribbon-svg"
              viewBox="0 0 620 560"
              aria-hidden="true"
            >

              <defs>

                <linearGradient
                  id="ribbonGradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#f4c542"
                  />

                  <stop
                    offset="100%"
                    stopColor="#e77b3c"
                  />
                </linearGradient>

              </defs>

              <path
                className="ribbon-path"
                d="M85 75 C260 15 455 90 505 205 C555 320 400 430 205 405 C95 390 80 300 180 255 C290 205 440 255 480 390"
              />

            </svg>


            <div className="sticker st-1">

              <span className="tag">
                BORROW
              </span>

              <p>
                Need a calculator for 2 hours,
                exam at 3
              </p>

              <span className="who">
                — Aria, Block C
              </span>

            </div>


            <div className="sticker st-2">

              <span className="match">
                matched
              </span>

              <span className="tag">
                STUDY DROP
              </span>

              <p>
                Got Unit 3 DS notes,
                sending now
              </p>

              <span className="who">
                Rohan's got you
              </span>

            </div>


            <div className="sticker st-3">

              <span className="tag">
                HELP
              </span>

              <p>
                Anyone free to help me carry
                boxes up 4 floors?
              </p>

              <span className="who">
                — Divya, Hostel B
              </span>

            </div>


            <div className="sticker st-4">

              <span className="tag">
                SKILL
              </span>

              <p>
                Stuck on a recursion bug,
                15 min?
              </p>

              <span className="who">
                — Kevin
              </span>

            </div>

          </div>

        </div>

      </header>


      {/* ================= STATEMENT ================= */}

      <section className="statement">

        <div className="wrap statement-wrap">

          <div className="not-row">

            <span className="not-chip">
              a marketplace
            </span>

            <span className="not-chip">
              a notes drive
            </span>

            <span className="not-chip">
              a tutoring app
            </span>

          </div>

          <h2>
            Synergy is the group chat where someone
            always says{" "}
            <span className="hl2">
              "I got you."
            </span>
          </h2>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section
        className="how dots-dark"
        id="how"
      >

        <div className="wrap">

          <div className="section-head">

            <h2>
              From ask to answer in four moves
            </h2>

            <p>
              Every request, big or tiny,
              follows the same simple path.
            </p>

          </div>


          <div className="steps">

            <div className="step">

              <div className="num">
                1
              </div>

              <h3>
                Post it
              </h3>

              <p>
                Say what you need, how urgent,
                how long you need it for.
              </p>

            </div>


            <div className="step">

              <div className="num">
                2
              </div>

              <h3>
                Get matched
              </h3>

              <p>
                People nearby with the notes,
                item, or time see it land.
              </p>

            </div>


            <div className="step">

              <div className="num">
                3
              </div>

              <h3>
                Link up
              </h3>

              <p>
                Message, meet up, or send the
                file — whatever's easiest.
              </p>

            </div>


            <div className="step">

              <div className="num">
                4
              </div>

              <h3>
                Confirm it
              </h3>

              <p>
                Both sides confirm. Borrowed
                stuff gets a return reminder.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOUR PILLARS ================= */}

      <section
        className="pillars"
        id="pillars"
      >

        <div className="wrap">

          <div className="section-head">

            <h2>
              Whatever you're short on, ask
            </h2>

            <p>
              Four kinds of requests,
              one feed to post them to.
            </p>

          </div>


          <div className="pillar-grid">

            <div className="pillar">

              <h3>
                A hand when you need one
              </h3>

              <ul>
                <li>Carrying something heavy</li>
                <li>Explaining a topic</li>
                <li>A teammate for one task</li>
                <li>Finding a spot on campus</li>
              </ul>

            </div>


            <div className="pillar">

              <h3>
                Study drops
              </h3>

              <ul>
                <li>Notes & reference material</li>
                <li>Old question papers</li>
                <li>Lab manuals & guides</li>
                <li>Shared, lent, or donated</li>
              </ul>

            </div>


            <div className="pillar">

              <h3>
                Borrow & return
              </h3>

              <ul>
                <li>Calculators, chargers, tripods</li>
                <li>Lab coats & sports gear</li>
                <li>Built-in return reminders</li>
                <li>Confirmed once it's back</li>
              </ul>

            </div>


            <div className="pillar">

              <h3>
                Community heads-up
              </h3>

              <ul>
                <li>"Found someone's ID card"</li>
                <li>Can-you-help-identify posts</li>
                <li>General campus alerts</li>
                <li>Neighbor-to-neighbor stuff</li>
              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* ================= TRUST ================= */}

      <section
        className="trust dots-dark"
        id="trust"
      >

        <div className="wrap trust-grid">

          <div>

            <h2>
              Trust that's earned,
              not bought
            </h2>

            <p className="body-text">
              Every exchange that actually happens —
              a returned calculator, a shared PDF,
              a carried box — adds to a person's
              Synergy record. It only grows when
              both sides show up.
            </p>

            <p className="body-text">
              That's what lets a stranger lend you
              their tripod for the afternoon.
            </p>

          </div>


          <div className="profile-card">

            <div className="ph-row">

              <div className="ph-avatar">
                R
              </div>

              <div>

                <div className="ph-name">
                  Rohan M.
                </div>

                <div className="ph-sub">
                  On Synergy since Jan 2026
                </div>

              </div>

            </div>


            <div className="stat-row">
              <span>People helped</span>
              <span>18</span>
            </div>

            <div className="stat-row">
              <span>Resources shared</span>
              <span>12</span>
            </div>

            <div className="stat-row">
              <span>Items returned on time</span>
              <span>7/7</span>
            </div>


            <div className="reliability">

              <span className="big">
                94%
              </span>

              <span className="label">
                community reliability
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ================= IMPACT ================= */}

      <section
        className="impact"
        id="impact"
      >

        <div className="wrap">

          <div className="section-head">

            <h2>
              Help doesn't stop at one exchange
            </h2>

            <p>
              People who get helped tend to help
              someone else next.
            </p>

          </div>


          <div className="impact-stat">

            126 acts of help

            <span>
              completed in your community
              this month
            </span>

          </div>


          <div className="chain">

            <div className="chain-group">

              <div className="chain-node">

                <div className="chain-avatar">
                  A
                </div>

                <p>
                  Lent lecture notes
                  to a stranger
                </p>

              </div>

              <div className="chain-arrow" />

            </div>


            <div className="chain-group">

              <div className="chain-node">

                <div className="chain-avatar">
                  B
                </div>

                <p>
                  Fixed a bug
                  the same week
                </p>

              </div>

              <div className="chain-arrow" />

            </div>


            <div className="chain-group">

              <div className="chain-node">

                <div className="chain-avatar">
                  C
                </div>

                <p>
                  Carried a package
                  up four floors
                </p>

              </div>

              <div className="chain-arrow" />

            </div>


            <div className="chain-group">

              <div className="chain-node">

                <div className="chain-avatar">
                  D
                </div>

                <p>
                  Paid it forward
                  to someone new
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section
        className="final-cta dots-dark"
        id="join"
      >

        <div className="wrap">

          <h2>
            Your campus already
            has what you need.
          </h2>

          <p>
            Takes thirty seconds
            to post a request.
          </p>

          <div className="hero-actions">

            <a
              href="#join"
              className="btn btn-secondary"
            >
              Join Synergy
            </a>

            <a
              href="#pillars"
              className="btn btn-outline"
            >
              Browse open requests
            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="wrap">

          <div className="footer-brand">
  <span className="footer-synergy">SYNERGY</span>
</div>

          <span>
            A mutual aid network for campuses
            that show up for each other.
          </span>

        </div>

      </footer>

    </div>
  );
}

export default LandingPage;