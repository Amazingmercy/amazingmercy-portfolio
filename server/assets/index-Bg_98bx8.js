import { jsxs, jsx } from "react/jsx-runtime";
import { Briefcase, User, Wrench, Mail } from "lucide-react";
const projBoardoverse = "/amazingmercy-portfolio/assets/project-boardoverse-916-dHty.jpg";
const projEdubuddy = "/amazingmercy-portfolio/assets/project-edubuddy-CQNv7W1g.jpg";
const projEtds = "/amazingmercy-portfolio/assets/project-etds-DwUc-OSY.jpg";
const projEcom = "/amazingmercy-portfolio/assets/project-ecommerce-1ZLI0AWx.jpg";
const image = "/amazingmercy-portfolio/assets/team-real-1-tUYUdy7k.jpg";
const cvFile = "/amazingmercy-portfolio/assets/Current%20Mercy%20Amaefule%20%20Resume-FW9HgWok.pdf";
const CV_URL = cvFile;
const EMAIL = "amaefulmercy499@gmail.com";
function Nav() {
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-foreground/10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 py-4 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("a", { href: "#top", className: "font-serif text-2xl tracking-tight", children: [
      "Amazingmercy",
      /* @__PURE__ */ jsx("span", { className: "align-super text-xs", children: "®" })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em]", children: [
      /* @__PURE__ */ jsx("a", { href: "#work", className: "hover:opacity-60 transition", children: "Work" }),
      /* @__PURE__ */ jsx("a", { href: "#about", className: "hover:opacity-60 transition", children: "About" }),
      /* @__PURE__ */ jsx("a", { href: "#skills", className: "hover:opacity-60 transition", children: "Skills" }),
      /* @__PURE__ */ jsx("a", { href: "#contact", className: "hover:opacity-60 transition", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsxs("a", { href: `mailto:${EMAIL}`, className: "hidden md:inline-flex group items-center gap-2 text-xs uppercase tracking-[0.2em] border border-foreground rounded-full px-4 py-2 hover:bg-foreground hover:text-background transition", children: [
      "Let's talk",
      /* @__PURE__ */ jsx("span", { className: "inline-block transition-transform group-hover:translate-x-1", children: "↗" })
    ] })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsx("section", { id: "top", className: "relative pt-10 md:pt-16 pb-20 md:pb-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-12 gap-6 items-end", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-12 md:col-span-7", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6", children: "Portfolio — 2026 ©" }),
        /* @__PURE__ */ jsxs("h1", { className: "font-serif leading-[0.85] text-foreground text-[15vw] sm:text-[14vw] md:text-[12vw] lg:text-[9.3vw]", children: [
          "Amazing",
          /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: "mercy" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap items-baseline gap-x-6 md:gap-x-8 gap-y-3 font-serif text-xl sm:text-2xl md:text-4xl", children: [
          /* @__PURE__ */ jsx("span", { children: "Backend Architecture" }),
          /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: "API Design" }),
          /* @__PURE__ */ jsx("span", { children: "Database Engineering" }),
          /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: "Payments" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-5 flex md:justify-end mt-12 md:mt-0", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-[280px] sm:max-w-md mx-auto md:mx-0", children: [
        /* @__PURE__ */ jsx("img", { src: image, alt: "Portrait of Amazingmercy", width: 1024, height: 1024, className: "w-full h-auto grayscale" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -left-4 md:-top-6 md:-left-6 w-20 h-20 md:w-28 md:h-28 rounded-full bg-foreground text-background flex items-center justify-center animate-spin-slow ring-1 md:ring-2 ring-accent", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 100 100", className: "w-full h-full p-1.5 md:p-2", children: [
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("path", { id: "circle", d: "M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" }) }),
          /* @__PURE__ */ jsx("text", { className: "text-[11px] md:text-[10.5px] uppercase tracking-[0.2em] fill-background font-sans", children: /* @__PURE__ */ jsx("textPath", { href: "#circle", children: "Available for hire · Backend · API ·" }) })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-14 md:mt-20 grid grid-cols-12 gap-y-8 gap-x-6 items-start md:items-end border-t border-foreground/15 pt-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-12 sm:col-span-6 md:col-span-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3", children: "Based in" }),
        /* @__PURE__ */ jsx("p", { className: "font-serif text-2xl md:text-3xl", children: "Nigeria — Remote worldwide" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "col-span-12 sm:col-span-6 md:col-span-5", children: /* @__PURE__ */ jsx("p", { className: "font-sans text-base md:text-lg text-foreground/80 max-w-xl", children: "A backend developer building scalable APIs, payment integrations, and resilient data layers — turning messy requirements into clean, shippable software." }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-3 flex md:justify-end", children: /* @__PURE__ */ jsx("a", { href: CV_URL, target: "_blank", rel: "noopener noreferrer", className: "w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-4 md:py-3 text-xs uppercase tracking-[0.2em] hover:opacity-90 transition", children: "Download CV ↓" }) })
    ] })
  ] }) });
}
function About() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 grid grid-cols-12 gap-6", children: [
    /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-3", children: /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground sticky top-28", children: "(01) About" }) }),
    /* @__PURE__ */ jsxs("div", { className: "col-span-12 md:col-span-9", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95]", children: [
        "Resourceful, solution-driven, and quietly obsessed with",
        " ",
        /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: "systems that scale." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 text-foreground/80", children: [
        /* @__PURE__ */ jsx("p", { children: "I build the parts of products people never see — the APIs, databases, queues and integrations that quietly make everything else feel fast and reliable. My focus is backend engineering with Node.js and TypeScript, and I care a lot about clean contracts between services." }),
        /* @__PURE__ */ jsx("p", { children: "Beyond shipping code, I've led teams, taught juniors, and collaborated across time zones. I'm currently open to roles where I can grow alongside a serious engineering culture and contribute to products that matter." })
      ] }),
      /* @__PURE__ */ jsx("dl", { className: "mt-14 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 border-t border-foreground/15 pt-8", children: [["12+", "Projects shipped"], ["4+", "Years coding"], ["20+", "APIs designed"], ["∞", "Bugs squashed"]].map(([n, l]) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("dt", { className: "font-serif text-5xl md:text-6xl text-accent", children: n }),
        /* @__PURE__ */ jsx("dd", { className: "mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: l })
      ] }, l)) })
    ] })
  ] }) });
}
function Skills() {
  const groups = [{
    title: "Languages & Frameworks",
    items: ["TypeScript", "JavaScript", "Node.js", "Express.js"]
  }, {
    title: "Databases",
    items: ["MySQL", "MongoDB", "Sequelize ORM", "Mongoose ODM"]
  }, {
    title: "Tools & DevOps",
    items: ["Git", "GitHub", "Postman", "Docker", "CI/CD", "REST APIs"]
  }, {
    title: "Soft Skills",
    items: ["Communication", "Leadership", "Team Collaboration", "Problem Solving"]
  }];
  return /* @__PURE__ */ jsx("section", { id: "skills", className: "py-24 md:py-32 border-t border-foreground/15", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 grid grid-cols-12 gap-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "col-span-12 md:col-span-3 mb-10 md:mb-0", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "(02) Capabilities" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-6 font-serif text-5xl md:text-6xl leading-[0.95]", children: [
        "What I bring ",
        /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: "to the table." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-10", children: groups.map((g, i) => /* @__PURE__ */ jsxs("div", { className: `py-8 border-t border-foreground/15 ${i < 2 ? "md:border-t" : ""}`, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between gap-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-3xl md:text-4xl", children: g.title }),
        /* @__PURE__ */ jsxs("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
          "0",
          i + 1
        ] })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "mt-5 flex flex-wrap gap-2", children: g.items.map((it) => /* @__PURE__ */ jsx("li", { className: "border border-foreground/30 rounded-full px-4 py-1.5 text-sm", children: it }, it)) })
    ] }, g.title)) })
  ] }) });
}
const projects = [{
  index: "01",
  title: "Boardoverse",
  year: "2025",
  role: "Backend / Realtime",
  stack: ["Node.js", "Socket.IO", "TypeScript"],
  blurb: "A real-time multiplayer board game platform. Built the game logic engine, socket communication layer and state synchronization across rooms.",
  image: projBoardoverse,
  links: [{
    label: "GitHub",
    href: "https://github.com/Amazingmercy/boardoverse_backend"
  }]
}, {
  index: "02",
  title: "EduBuddy",
  year: "2025",
  role: "AI Agent / Backend",
  stack: ["Node.js", "LLM", "REST"],
  blurb: "An AI agent guiding kids through interactive STEM learning. Integrates real-time chat, natural language understanding and study-support flows.",
  image: projEdubuddy,
  links: [{
    label: "GitHub",
    href: "https://github.com/Amazingmercy/HNG-stage3"
  }]
}, {
  index: "03",
  title: "ETDS",
  year: "2024",
  role: "Full-stack / Workflow",
  stack: ["Node.js", "MySQL", "Multi-role auth"],
  blurb: "An electronic thesis and dissertation management platform with multi-role access, scoring workflows, document tracking and approval pipelines.",
  image: projEtds,
  links: [{
    label: "GitHub",
    href: "https://github.com/Mimieamichy/FULafia-Electronic-Tracking-and-documentation-system"
  }, {
    label: "Live",
    href: "https://fulafia-electronic-tracking-and-8x35.onrender.com/"
  }]
}, {
  index: "04",
  title: "JustVkey",
  year: "2024",
  role: "Full-stack E-Commerce",
  stack: ["EJS", "Node.js", "MongoDB", "Payments"],
  blurb: "A modern fashion e-commerce platform with product management, authentication and an integrated payment gateway, now live in production.",
  image: projEcom,
  links: [{
    label: "GitHub",
    href: "https://github.com/Amazingmercy/justVkey-main-"
  }, {
    label: "Live",
    href: "https://justvkeyluxuries.com.ng/"
  }]
}];
function Work() {
  return /* @__PURE__ */ jsx("section", { id: "work", className: "py-24 md:py-32 border-t border-foreground/15", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-12 md:mb-20 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "(03) Selected Work" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-6 font-serif text-6xl md:text-8xl leading-[0.9]", children: [
          "Things I've ",
          /* @__PURE__ */ jsx("span", { className: "italic", children: "built." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "hidden md:block text-xs uppercase tracking-[0.2em] text-muted-foreground max-w-xs", children: "Four selected projects across realtime systems, AI agents, workflow tooling and commerce." })
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "border-t border-foreground/15", children: projects.map((p) => /* @__PURE__ */ jsx("li", { className: "group border-b border-foreground/15 py-8 md:py-12", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-12 gap-6 items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "col-span-2 md:col-span-1 font-serif text-2xl md:text-3xl text-accent", children: p.index }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-10 md:col-span-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-4xl md:text-6xl leading-none", children: p.title }),
        /* @__PURE__ */ jsxs("p", { className: "mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
          p.role,
          " · ",
          p.year
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-12 md:col-span-4 text-foreground/80", children: [
        /* @__PURE__ */ jsx("p", { children: p.blurb }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: p.stack.map((s) => /* @__PURE__ */ jsxs("span", { className: "text-[11px] uppercase tracking-[0.15em] text-muted-foreground", children: [
          s,
          " ·"
        ] }, s)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-12 md:col-span-3", children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: p.image, alt: p.title, width: 1200, height: 900, loading: "lazy", className: "w-full h-48 md:h-40 object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 flex gap-4 text-xs uppercase tracking-[0.2em]", children: p.links.map((l) => /* @__PURE__ */ jsxs("a", { href: l.href, target: "_blank", rel: "noopener noreferrer", className: "underline underline-offset-4 hover:no-underline", children: [
          l.label,
          " ↗"
        ] }, l.label)) })
      ] })
    ] }) }, p.title)) })
  ] }) });
}
function Contact() {
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-24 md:py-40 border-t border-foreground/15", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "(04) Contact" }),
    /* @__PURE__ */ jsxs("h2", { className: "mt-8 font-serif text-[16vw] md:text-[11vw] leading-[0.85]", children: [
      "Let's build ",
      /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: "something." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 grid grid-cols-12 gap-6 border-t border-foreground/15 pt-10", children: [
      /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-6", children: /* @__PURE__ */ jsx("a", { href: `mailto:${EMAIL}`, className: "font-serif text-2xl md:text-5xl underline decoration-foreground/30 underline-offset-8 hover:decoration-foreground transition", children: EMAIL }) }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-6 md:col-span-3", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4", children: "Elsewhere" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 font-serif text-2xl", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://github.com/Amazingmercy", target: "_blank", rel: "noopener noreferrer", className: "hover:italic", children: "GitHub ↗" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/amazing-mercy-1012133b5", className: "hover:italic", children: "LinkedIn ↗" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `mailto:${EMAIL}`, className: "hover:italic", children: "Email ↗" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: CV_URL, target: "_blank", rel: "noopener noreferrer", className: "hover:italic", children: "Résumé ↗" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-6 md:col-span-3", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4", children: "Availability" }),
        /* @__PURE__ */ jsx("p", { className: "font-serif text-2xl", children: "Open for full-time & contract roles, starting now." })
      ] })
    ] })
  ] }) });
}
function BottomNav() {
  const links = [{
    href: "#work",
    label: "Work",
    icon: Briefcase
  }, {
    href: "#about",
    label: "About",
    icon: User
  }, {
    href: "#skills",
    label: "Skills",
    icon: Wrench
  }, {
    href: "#contact",
    label: "Contact",
    icon: Mail
  }];
  return /* @__PURE__ */ jsx("nav", { className: "fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-t border-foreground/10 md:hidden", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-around py-3", children: links.map((l) => {
    const Icon = l.icon;
    return /* @__PURE__ */ jsxs("a", { href: l.href, className: "flex flex-col items-center gap-1 text-[10px] uppercase tracking-wider text-muted-foreground hover:text-accent transition", children: [
      /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5" }),
      /* @__PURE__ */ jsx("span", { children: l.label })
    ] }, l.label);
  }) }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-foreground/15 py-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1600px] px-6 md:px-10 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
    /* @__PURE__ */ jsxs("span", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Mercy Amaefule"
    ] }),
    /* @__PURE__ */ jsx("span", { children: "Made with care · Backend Developer" }),
    /* @__PURE__ */ jsx("a", { href: "#top", className: "hover:text-foreground", children: "Back to top ↑" })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { className: "bg-background text-foreground pb-20 md:pb-0", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Skills, {}),
    /* @__PURE__ */ jsx(Work, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(BottomNav, {})
  ] });
}
export {
  Index as component
};
