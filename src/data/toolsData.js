const tools = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    link: "https://chat.openai.com",
    icon: "https://cdn-icons-png.flaticon.com/512/4895/4895160.png",
    desc: "General-purpose conversational AI by OpenAI.",
    category: "Chat",
    trending: true
  },
  {
    id: "bard",
    name: "Google Bard",
    link: "https://bard.google.com",
    icon: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
    desc: "Google's conversational AI for search and content.",
    category: "Chat",
    trending: false
  },
  {
    id: "dall-e",
    name: "DALL·E 3",
    link: "https://platform.openai.com/examples",
    icon: "https://cdn-icons-png.flaticon.com/512/595/595067.png",
    desc: "AI image generation for creative visuals.",
    category: "Image & Design",
    trending: true
  },
  {
    id: "midjourney",
    name: "Midjourney",
    link: "https://www.midjourney.com",
    icon: "https://cdn-icons-png.flaticon.com/512/919/919849.png",
    desc: "Popular community-driven AI image generator.",
    category: "Image & Design",
    trending: true
  },
  {
    id: "canva-ai",
    name: "Canva Magic",
    link: "https://www.canva.com/magic",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732025.png",
    desc: "Design UI and automatic image tools inside Canva.",
    category: "Image & Design",
    trending: false
  },
  {
    id: "runway",
    name: "Runway",
    link: "https://runwayml.com",
    icon: "https://cdn-icons-png.flaticon.com/512/2163/2163350.png",
    desc: "AI video editing and generation suite.",
    category: "Video",
    trending: true
  },
  {
    id: "descript",
    name: "Descript",
    link: "https://www.descript.com",
    icon: "https://cdn-icons-png.flaticon.com/512/813/813674.png",
    desc: "Audio & video editing with AI-driven tools.",
    category: "Video",
    trending: false
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    link: "https://www.notion.so/product/ai",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968706.png",
    desc: "Write, summarize and plan with AI inside Notion.",
    category: "Writing",
    trending: false
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    link: "https://www.copy.ai",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968743.png",
    desc: "AI writer for marketing copy, ads & social posts.",
    category: "Writing",
    trending: true
  },
  {
    id: "jasper",
    name: "Jasper",
    link: "https://www.jasper.ai",
    icon: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
    desc: "AI content platform for long-form and SEO.",
    category: "Writing",
    trending: false
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    link: "https://github.com/features/copilot",
    icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    desc: "AI pair programmer inside your editor.",
    category: "Coding",
    trending: true
  },
  {
    id: "replit",
    name: "Replit Ghostwriter",
    link: "https://replit.com",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732245.png",
    desc: "In-browser coding with AI assistance.",
    category: "Coding",
    trending: false
  },
  {
    id: "removebg",
    name: "Remove.bg",
    link: "https://www.remove.bg",
    icon: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
    desc: "Instant background removal for images.",
    category: "Image & Design",
    trending: false
  },
  {
    id: "synthesia",
    name: "Synthesia",
    link: "https://www.synthesia.io",
    icon: "https://cdn-icons-png.flaticon.com/512/3046/3046124.png",
    desc: "AI avatars & video generation for training content.",
    category: "Video",
    trending: false
  },
  {
    id: "tome",
    name: "Tome",
    link: "https://beta.tome.app",
    icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    desc: "AI storytelling & presentation builder.",
    category: "Productivity",
    trending: true
  },
  {
    id: "play.ht",
    name: "Play.ht",
    link: "https://play.ht",
    icon: "https://cdn-icons-png.flaticon.com/512/3771/3771327.png",
    desc: "AI voice generation & text-to-speech.",
    category: "Audio",
    trending: false
  },
  {
    id: "synthesys",
    name: "Krisp / Noise Removal",
    link: "https://krisp.ai",
    icon: "https://cdn-icons-png.flaticon.com/512/3039/3039379.png",
    desc: "Real-time noise cancelling with AI.",
    category: "Audio",
    trending: false
  },
  {
    id: "vizcom",
    name: "Vizcom",
    link: "https://vizcom.co",
    icon: "https://cdn-icons-png.flaticon.com/512/2527/2527268.png",
    desc: "AI design assistant for rapid iterations.",
    category: "Image & Design",
    trending: false
  },
  {
    id: "hotpot",
    name: "Hotpot.ai",
    link: "https://hotpot.ai",
    icon: "https://cdn-icons-png.flaticon.com/512/1049/1049165.png",
    desc: "AI image & writing tools for creators.",
    category: "Image & Design",
    trending: false
  },
  {
    id: "perplexity",
    name: "Perplexity.ai",
    link: "https://www.perplexity.ai",
    icon: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    desc: "AI-powered search and answers.",
    category: "Chat",
    trending: true
  }
];

export default tools;