"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Backpack, CalendarDays, Check, Clock3, Droplets, Footprints, HeartPulse, MapPin, Medal, Menu, ShieldCheck, Shirt, Sparkles, Trophy, UserRound, X } from "lucide-react";

const registrationUrl = "https://registrations.indiarunning.com/kranti_jyoti_womens_run_2027_59904";
const slides = [
  { src: "/images/herosection1.jpeg", alt: "Krantijyoti Women’s Run 2027 event artwork" },
  { src: "/images/herosection2.jpeg", alt: "Krantijyoti Women’s Run 2027 Pune event artwork" },
  { src: "/images/herosection3.jpeg", alt: "Illustration celebrating women runners in Pune" },
  { src: "/images/herosection4.jpeg", alt: "Krantijyoti Women’s Run community artwork" },
];
const categories = [
  { name: "3 KM", kind: "Non-timed · Family fun run", inclusions: ["T-shirt", "Medal", "Timed bib", "Refreshments", "E-certificate", "Goodie bag", "Hydration support", "Zumba"] },
  { name: "5 KM", kind: "Timed · Competitive run", inclusions: ["T-shirt", "Medal", "Timed bib", "Refreshments", "E-certificate", "Goodie bag", "Hydration support", "Zumba"] },
  { name: "10 KM", kind: "Timed · Competitive run", inclusions: ["T-shirt", "Medal", "Timed bib", "Refreshments", "E-certificate", "Goodie bag", "Hydration support", "Zumba"] },
];
const reasons = [
  ["01", "A movement for women", "A landmark gathering celebrating strength, courage, unity and determination."],
  ["02", "Inspired by Savitribai Phule", "Honouring the pioneering educator and social reformer whose vision continues to inspire."],
  ["03", "Every step has a purpose", "Run for strength. Run for equality. Run for empowerment."],
];
const routes = [
  { name: "3 KM", type: "Non-timed run", points: ["Start & finish: Savitribai Phule Pune University", "SPPU Main Building Road", "Ganeshkhind Road"] },
  { name: "5 KM", type: "Timed run", points: ["Start & finish: Savitribai Phule Pune University", "SPPU Main Building Road", "Ganeshkhind Road"] },
  { name: "10 KM", type: "Timed run", points: ["Start & finish: Savitribai Phule Pune University", "SPPU Main Building Road", "Designated distance markers from 1 KM to 9 KM"] },
];
const kit = ["Dry-fit T-shirt", "Finisher medal", "Sling bag with goodies", "On-course hydration", "Snacks and refreshments", "Zumba and stretching sessions", "Personalised e-timing certificate", "Medical, ambulance and physiotherapy support", "Customised bib"];
const facilities = [
  { icon: HeartPulse, title: "Medical & physio", text: "Medical and physiotherapy support arrangements for participants." },
  { icon: ShieldCheck, title: "Ambulance & security", text: "Ambulance and security support at designated event locations." },
  { icon: Droplets, title: "Hydration", text: "Designated hydration stations along the running routes." },
  { icon: Footprints, title: "Warm-up & movement", text: "Zumba and stretching sessions as part of the event experience." },
  { icon: Sparkles, title: "Refreshments", text: "Snacks and refreshments for participants." },
  { icon: MapPin, title: "Participant facilities", text: "Toilet facilities and event support at the venue." },
];
const ageGroups = ["Kids (12–15 years)", "16–20 years", "21–40 years", "41–60+ years"];
const adultPrizes = { "3 KM": ["₹50,000", "₹25,000", "₹15,000"], "5 KM": ["₹1,00,000", "₹50,000", "₹25,000"], "10 KM": ["₹2,00,000", "₹1,00,000", "₹50,000"] };

export function Site() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 5500);
    return () => window.clearInterval(timer);
  }, []);

  const changeSlide = (direction: number) => setActiveSlide((current) => (current + direction + slides.length) % slides.length);
  const closeMenu = () => setMenuOpen(false);

  return <>
    <header className="event-header">
      <a className="event-logo" href="#home" aria-label="Krantijyoti Women’s Run home"><img src="/images/logo.jpeg" alt="Krantijyoti Women’s Run 2027"/></a>
      <nav className={menuOpen ? "main-nav main-nav-open" : "main-nav"} aria-label="Main navigation">
        <a href="#home" onClick={closeMenu}>Home</a><a href="#about" onClick={closeMenu}>About</a><a href="#categories" onClick={closeMenu}>Race Categories</a><a href="#routes" onClick={closeMenu}>Route Maps</a><a href="#prizes" onClick={closeMenu}>Prize Money</a><a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
      <a className="header-register" href={registrationUrl} target="_blank" rel="noreferrer">Register Now <ArrowRight size={16}/></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main className="event-page" id="home">
      <section className="event-hero" aria-label="Krantijyoti Women’s Run 2027">
        <p className="hero-kicker">INDIA’S FIRST &amp; LARGEST WOMEN’S MARATHON</p>
        <h1>KRANTI JYOTI WOMEN’S RUN 2027</h1>
        <p className="hero-subtitle">ONE RUN. 22,000+ WOMEN. ONE POWERFUL MOVEMENT.</p>
        <div className="poster-slider">
          <div className="poster-track" aria-live="off">{slides.map((slide, index) => <div className={index === activeSlide ? "poster-slide poster-active" : "poster-slide"} aria-hidden={index !== activeSlide} key={slide.src}><img src={slide.src} alt={slide.alt}/></div>)}</div>
          <button className="poster-arrow poster-prev" onClick={() => changeSlide(-1)} aria-label="Previous slide"><ArrowLeft/></button>
          <button className="poster-arrow poster-next" onClick={() => changeSlide(1)} aria-label="Next slide"><ArrowRight/></button>
          <div className="poster-dots">{slides.map((slide, index) => <button key={slide.src} className={index === activeSlide ? "poster-dot poster-dot-active" : "poster-dot"} onClick={() => setActiveSlide(index)} aria-label={`Show slide ${index + 1}`} aria-current={index === activeSlide}/>)}</div>
        </div>
        <a className="hero-register" href={registrationUrl} target="_blank" rel="noreferrer">Register Now — Free <ArrowRight size={18}/></a>
      </section>

      <section className="event-summary" aria-label="Event information">
        <div className="summary-item"><MapPin size={27}/><span className="summary-label">VENUE</span><strong>Savitribai Phule Pune University,<br/>Pune, Maharashtra</strong></div>
        <div className="summary-item"><CalendarDays size={27}/><span className="summary-label">RACE DAY</span><strong>3 January 2027</strong></div>
        <div className="summary-item"><Clock3 size={27}/><span className="summary-label">START TIME</span><strong>5:30 AM onwards</strong></div>
        <a className="summary-review" href={registrationUrl} target="_blank" rel="noreferrer">Register <ArrowRight size={19}/></a>
      </section>

      <section className="categories-section" id="categories">
        <div className="categories-heading"><p className="section-eyebrow">CHOOSE YOUR DISTANCE</p><h2>Select Category</h2><p>Three distances. One powerful movement.</p></div>
        <div className="category-list">{categories.map((category) => <article className="category-row" key={category.name}>
          <div className="category-name"><h3>{category.name} RUN</h3><p>{category.kind}</p><span className="registration-open">Registration is open · Free</span></div>
          <div className="category-inclusions"><span className="inclusive-label">Included with your registration</span><div className="inclusion-pills">{category.inclusions.map((item) => <span key={item}>{item}</span>)}</div></div>
          <div className="category-price"><strong>₹0</strong><span>Free registration</span></div>
          <a className="category-add" href={registrationUrl} target="_blank" rel="noreferrer" aria-label={`Register for ${category.name} run`}>+ Add</a>
        </article>)}</div>
      </section>

      <section className="content-section about-section" id="about">
        <div className="content-wrap two-column">
          <div><p className="section-eyebrow">01 · ABOUT THE EVENT</p><h2>A movement celebrating the power of women.</h2></div>
          <div className="section-copy"><p>Kranti Jyoti Women’s Run 2027 is a landmark initiative celebrating the strength, courage, unity and determination of women.</p><p>Inspired by the revolutionary legacy of Krantijyoti Savitribai Phule, this movement brings women together to promote fitness, equality, confidence and empowerment.</p><p>With 22,000+ women expected, every step represents a story, every stride reflects determination, and every participant becomes a symbol of strength and inspiration.</p><strong>Run for Strength. Run for Equality. Run for Empowerment.</strong></div>
        </div>
      </section>

      <section className="inspiration-section">
        <div className="content-wrap inspiration-card"><img src="/images/herosection3.jpeg" alt="Illustration celebrating Krantijyoti Savitribai Phule and women runners"/><div><p className="section-eyebrow">02 · THE INSPIRATION</p><h2>Inspired by Krantijyoti Savitribai Phule.</h2><p>Savitribai Phule was a pioneering educator and social reformer who transformed women’s education and social equality in India. Her courage and vision continue to inspire generations.</p><p>This run celebrates her legacy and the spirit of every woman who dares to dream, challenges limitations and moves forward with confidence.</p></div></div>
      </section>

      <section className="schedule-section content-section" id="schedule">
        <div className="content-wrap"><div className="center-heading"><p className="section-eyebrow">03 · EVENT SCHEDULE</p><h2>Mark your calendar.</h2></div><div className="schedule-grid">
          <article className="schedule-card"><span className="schedule-tag">02 JANUARY 2027</span><h3>Marathon Expo &amp; Kit Distribution</h3><p className="schedule-time"><Clock3 size={17}/> 11:00 AM – 5:00 PM</p><p className="schedule-time"><MapPin size={17}/> Savitribai Phule Pune University, Pune</p><p>Collect your official race kit at the Marathon Expo. Participants must collect their materials personally and bring their registration confirmation SMS or email.</p></article>
          <article className="schedule-card schedule-card-featured"><span className="schedule-tag">03 JANUARY 2027</span><h3>Race Day</h3><p className="schedule-time"><Clock3 size={17}/> 5:30 AM onwards</p><p className="schedule-time"><MapPin size={17}/> Savitribai Phule Pune University, Pune</p><p>Report to the venue in advance and follow the instructions provided by the event organisers.</p><a className="text-cta" href={registrationUrl} target="_blank" rel="noreferrer">Register free <ArrowRight size={16}/></a></article>
        </div></div>
      </section>

      <section className="routes-section content-section" id="routes">
        <div className="content-wrap"><div className="center-heading"><p className="section-eyebrow">04 · RUNNING ROUTE MAPS</p><h2>Know your route before you run.</h2><p>All categories start and finish at Savitribai Phule Pune University.</p></div><div className="route-grid">{routes.map((route) => <article className="route-card" key={route.name}><div className="route-card-top"><RouteIcon/><span>{route.type}</span></div><h3>{route.name} route</h3><ul>{route.points.map((point) => <li key={point}>{point}</li>)}</ul><div className="route-map-placeholder"><MapPin size={23}/><span>Official {route.name} route map</span><small>Route map image to be added</small></div></article>)}</div><p className="route-note">Water station locations may vary by approximately 100 metres depending on participant convenience and location feasibility.</p></div>
      </section>

      <section className="expo-section content-section" id="expo">
        <div className="content-wrap two-column"><div><p className="section-eyebrow">05 · MARATHON EXPO &amp; RACE MATERIAL</p><h2>Collect your race kit. Get ready for the run.</h2><p className="section-lead">Every registered participant receives official race materials as specified in the event kit.</p><div className="expo-details"><p><strong>Expo date</strong><span>2 January 2027</span></p><p><strong>Expo time</strong><span>11:00 AM – 5:00 PM</span></p><p><strong>Venue</strong><span>Savitribai Phule Pune University, Pune</span></p></div><div className="confirmation-note"><Check size={18}/> Bring your registration confirmation SMS or email. Personal collection at the Expo is required.</div></div><div className="kit-card"><p className="section-eyebrow">RUNNERS’ KIT HAMPER</p><h3>A special kit for every participant.</h3><div className="kit-list">{kit.map((item) => <span key={item}><Check size={15}/>{item}</span>)}</div><p className="kit-note">Final kit contents will be as per the official event distribution.</p></div></div>
      </section>

      <section className="facilities-section content-section">
        <div className="content-wrap"><div className="center-heading"><p className="section-eyebrow">06 · EVENT FACILITIES &amp; SUPPORT</p><h2>Your safety. Your comfort. Our priority.</h2><p>Support arrangements are planned to help participants throughout the event.</p></div><div className="facility-grid">{facilities.map(({icon:Icon,title,text}) => <article className="facility-card" key={title}><Icon size={26}/><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="prizes-section content-section" id="prizes">
        <div className="content-wrap"><div className="prize-heading"><div><p className="section-eyebrow">07 · PRIZE MONEY &amp; AWARDS</p><h2>Celebrate courage.<br/><em>Reward excellence.</em></h2></div><div className="prize-pool"><span>GRAND PRIZE POOL</span><strong>₹19,05,000</strong></div></div><div className="prize-table-wrap"><table className="prize-table"><thead><tr><th>Age category</th><th>3 KM</th><th>5 KM</th><th>10 KM</th></tr></thead><tbody>{ageGroups.map((age,index) => <tr key={age}><th>{age}</th>{index===0?<><td>Top 3 · gift hampers<br/>worth ₹20,000 each</td><td>Top 3 · gift hampers<br/>worth ₹20,000 each</td><td>Top 3 · gift hampers<br/>worth ₹20,000 each</td></>:(["3 KM","5 KM","10 KM"] as const).map((distance)=><td key={distance}><span>1st: {adultPrizes[distance][0]}</span><span>2nd: {adultPrizes[distance][1]}</span><span>3rd: {adultPrizes[distance][2]}</span></td>)}</tr>)}</tbody></table></div><p className="route-note">Prize distribution is based on the official event prize chart.</p></div>
      </section>

      <section className="experience-section content-section">
        <div className="content-wrap experience-inner"><div><p className="section-eyebrow">08 · EVENT BRANDING &amp; EXPERIENCE</p><h2>An unforgettable event experience.</h2><p>Dedicated event branding and visual installations will create an engaging experience throughout the venue and route.</p></div><div className="experience-tags">{["Route branding","Hydration point branding","Countdown installation","Start arch gate","Venue branding","Participant experience zones"].map((item)=><span key={item}>{item}</span>)}</div></div>
      </section>

      <section className="registration-section" id="registration"><div className="registration-inner"><p className="section-eyebrow light-eyebrow">ONE RUN. 22,000+ WOMEN. ONE POWERFUL MOVEMENT.</p><h2>Be part of the movement.</h2><p>Choose your race category and join a celebration of fitness, courage, unity and empowerment.</p><strong>3 KM&nbsp; · &nbsp;5 KM&nbsp; · &nbsp;10 KM <span>FREE REGISTRATION</span></strong><a href={registrationUrl} target="_blank" rel="noreferrer">Register Now <ArrowRight size={18}/></a><small>3 January 2027 · 5:30 AM onwards · Pune</small></div></section>

      <section className="contact-section content-section" id="contact"><div className="content-wrap contact-grid"><div><p className="section-eyebrow">09 · CONTACT US</p><h2>We’re here to help.</h2><p>For event-related enquiries and further information.</p></div><div className="contact-details"><p><span>PHONE</span><a href="tel:+919607526951">+91 96075 26951</a></p><p><span>REGISTRATION</span><a href={registrationUrl} target="_blank" rel="noreferrer">Official registration page <ArrowRight size={15}/></a></p><p><span>VENUE</span><strong>Savitribai Phule Pune University,<br/>Pune, Maharashtra, India</strong></p></div></div></section>
    </main>

    <footer className="site-footer"><div className="content-wrap footer-layout"><a className="footer-event-logo" href="#home"><img src="/images/logo.jpeg" alt="Krantijyoti Women’s Run 2027"/></a><div className="footer-tagline"><strong>KRANTI JYOTI WOMEN’S RUN 2027</strong><span>Inspired by Krantijyoti Savitribai Phule.</span><span>3 January 2027 · Pune, Maharashtra</span></div><nav className="footer-nav"><a href="#about">About</a><a href="#categories">Race Categories</a><a href="#routes">Route Maps</a><a href="#expo">Expo &amp; Kit</a><a href="#prizes">Prize Money</a><a href="#contact">Contact</a></nav><a className="footer-india-running" href={registrationUrl} target="_blank" rel="noreferrer"><img src="/images/ir-logo-white.svg" alt="India Running"/><span>Official Registration</span></a><small className="footer-copyright">© 2026 Kranti Jyoti Women’s Run</small></div></footer>
  </>;
}

function RouteIcon(){return <MapPin size={18}/>;}
