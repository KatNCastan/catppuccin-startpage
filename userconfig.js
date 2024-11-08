// latte / frappe / macchiato / mocha
const palette = frappe;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Torrance",
    scale: "F",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://github.com/KatNCastan/catppuccin-startpage/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "frequent",
          links: [
            {
              name: "amazon",
              url: "https://amazon.com",
              icon: "brand-amazon",
              icon_color: palette.peach,
            },
            
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "sso",
              url: "https://myapps.microsoft.com/",
              icon: "school",
              icon_color: palette.blue,
            },
            {
              name: "canvas",
              url: "https://csulb.instructure.com/",
              icon: "circle-dashed",
              icon_color: palette.red,
            },
            {
              name: "zybooks",
              url: "https://learn.zybooks.com/zybook/CSULBCECS326LamFall2024",
              icon: "square-letter-z",
              icon_color: palette.peach,
            },
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "youtube",
              url: "https://youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "lofi cafe",
              url: "https://www.lofi.cafe/",
              icon: "headphones",
              icon_color: palette.peach
            },
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "resources",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "neptune",
              url: "https://ui.neptune.ai",
              icon: "circle-triangle",
              icon_color: palette.peach,
            },
            {
              name: "wakatime",
              url: "https://wakatime.com",
              icon: "24-hours",
              icon_color: palette.red,
            },
            {
              name: "chatgpt",
              url: "https://chatgpt.com/",
              icon: "circle-triangle",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "codesignal",
              url: "https://codesignal.com",
              icon: "dog",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "blogs",
          links: [
            {
              name: "dou",
              url: "https://dou.ua",
              icon: "brand-prisma",
              icon_color: palette.green,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "uber research",
              url: "https://eng.uber.com/category/articles",
              icon: "brand-uber",
              icon_color: palette.red,
            },
            {
              name: "google research",
              url: "https://blog.research.google",
              icon: "hexagon-letter-g",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-4.gif",
      categories: [
        {
          name: "social medias",
          links: [
            {
              name: "tumblr",
              url: "https://www.tumblr.com/",
              icon: "brand-tumblr",
              icon_color: palette.blue,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "hobby",
          links: [
            {
              name: "drawabox",
              url: "https://drawabox.com/",
              icon: "box",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "misc",
          links: [
            {
              name: "patreon",
              url: "https://www.patreon.com",
              icon: "brand-patreon",
              icon_color: palette.peach,
            },
            {
              name: "infinite backlog",
              url: "https://infinitebacklog.net/",
              icon: "infinity",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
