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
              name: "coursera",
              url: "https://www.coursera.org/",
              icon: "circle-letter-c",
              icon_color: palette.blue,
            },
            {
              name: "udacity",
              url: "https://www.udacity.com/",
              icon: "letter-u",
              icon_color: palette.blue,
            },
            {
              name: "chatgpt",
              url: "https://chatgpt.com/",
              icon: "circle-triangle",
              icon_color: palette.blue,
            },
            {
              name: "edx",
              url: "https://www.edx.org/",
              icon: "square-letter-x",
              icon_color: palette.green,
            },
            {
              name: "codecademy",
              url: "https://www.codecademy.com/",
              icon: "terminal-2",
              icon_color: palette.green,
            },
            {
              name: "deepseek",
              url: "https://chat.deepseek.com/",
              icon: "fish",
              icon_color: palette.blue,
            },
            {
              name: "developer roadmaps",
              url: "https://roadmap.sh/",
              icon: "square-letter-r",
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
              name: "fireship",
              url: "https://www.youtube.com/@Fireship",
              icon: "flame",
              icon_color: palette.red,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "r/learnprogramming",
              url: "https://www.reddit.com/r/learnprogramming/",
              icon: "brand-reddit",
              icon_color: palette.red,
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
