import type { ImageMetadata } from "astro";
import imgTimetable from "../assets/projects/nkust-course-timetable.png";
import imgPlate from "../assets/projects/license-plate-recognition.jpg";
import imgCityBus from "../assets/projects/city-bus.png";
import imgStudentId from "../assets/projects/student-id-ocr.png";
import imgEvote from "../assets/projects/evote.png";
import imgOwl from "../assets/projects/owl.jpg";

export type Project = {
  name: string;
  description: string;
  tech: string[];
  url: string;
  /** Cover image above the block — an imported asset or an https URL. */
  img?: ImageMetadata | string;
};

export const PROJECTS: Project[] = [
  {
    name: "Owl",
    description:
      "高科大 Discord 校園問答機器人。成員提問後先比對資料庫，必要時再帶入公務郵件或網路搜尋，交由 AI 整理成有出處的回答。也涵蓋公文與校務建言搜尋、實名驗證與社群輔助功能。",
    tech: ["Python", "discord.py", "PostgreSQL", "Gemini"],
    url: "https://github.com/JunTeng1113/Owl",
    img: imgOwl,
  },
  {
    name: "eVote",
    description:
      "用 Google 帳號登入後投票。管理員可建立選舉，投票後可確認並看結果。",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    url: "https://github.com/JunTeng1113/eVote",
    img: imgEvote,
  },
  {
    name: "高科大課表檢視",
    description:
      "在教務系統查出課程後，排成週課表，並可依上課節次篩掉撞堂的課。",
    tech: ["JavaScript", "Chrome Extension"],
    url: "https://github.com/JunTeng1113/nkust-course-timetable",
    img: imgTimetable,
  },
  {
    name: "車牌辨識系統",
    description: "從照片裡找出車牌位置，並辨識車牌號碼。",
    tech: ["Python", "OpenCV", "OCR"],
    url: "https://github.com/JunTeng1113/License-Plate-Recognition-System",
    img: imgPlate,
  },
  {
    name: "高雄市公車站牌分析",
    description:
      "輸入所在地與目的地，列出附近能坐的公車，並附站牌資料的分析圖。",
    tech: ["Python"],
    url: "https://github.com/JunTeng1113/CityBus",
    img: imgCityBus,
  },
  {
    name: "高科超棒租屋網",
    description: "瀏覽、篩選高科附近的租屋資訊。",
    tech: ["JavaScript", "React"],
    url: "https://github.com/JunTeng1113/Frontend_website",
  },
  {
    name: "學生證 OCR",
    description: "從高科大學生證照片讀出上面的文字。",
    tech: ["Python", "OCR"],
    url: "https://github.com/JunTeng1113/OCR-for-NKUST-Student-ID-Card",
    img: imgStudentId,
  },
  {
    name: "Firebase 第三方登入",
    description: "用 Google 等既有帳號完成註冊與登入。",
    tech: ["React", "Firebase"],
    url: "https://github.com/JunTeng1113/React-Firebase-Auth-master",
  },
  {
    name: "物聯網期末報告",
    description: "展示物聯網與感測器實作課程的成果。",
    tech: ["JavaScript"],
    url: "https://github.com/JunTeng1113/thinglinkweb.github.io",
  },
];
