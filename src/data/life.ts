import type { Section } from "@/data/sections";

import avatarLife from "../assets/avatar-life.jpg";
/** Life-face avatar (the Work face has its own, see data/about.ts). */
export const AVATAR = avatarLife;

export const PROFILE_LIFE = {
  name: "林駿騰",
  headline: "高雄・待業中",
};

const INTRO = [
  "GT，我是彰化人，人在高雄。",
];

const INTERESTS = [
  "網頁開發",
  "學生自治",
  "社會議題",
  "新聞時事",
  "電影",
  "影劇",
  "動漫",
  "遊戲",
  "桌遊",
  "出門",
];

const MISC_BODY = `有些話沒有適合的區塊可以放，這一區就是留給那些內容的。

**最近在忙的事：**

- 找工作`;

export const PERSONAL_SECTIONS: Section[] = [
  { type: "text", title: "關於", paragraphs: INTRO },
  { type: "chips", title: "興趣", items: INTERESTS },
  {
    type: "kv",
    title: "目前",
    rows: [
      { label: "所在地", value: "高雄市" },
      { label: "學歷", value: "高科大智慧商務系碩士" },
      { label: "身分", value: "社會新鮮人・待業中" },
    ],
  },
  { type: "markdown", title: "其他", body: MISC_BODY },
];
