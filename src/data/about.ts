import type {
  Section,
  TimelineEntry,
  HighlightEntry,
} from "@/data/sections";

export type Experience = {
  period: string;
  title: string;
  /** Focus areas, rendered in a tinted note block separated by rules. */
  duties: { name: string; text: string }[];
};

export type Education = {
  period: string;
  school: string;
  degree: string;
  /** Thesis title, for degrees that have one. */
  thesis?: string;
  /** Handle or landing page for the thesis. */
  thesisUrl?: string;
  /** What the thesis did, in a paragraph. */
  description?: string;
  /** Undergraduate capstone / 畢業專題. */
  project?: string;
  /** What the capstone did, in a paragraph. */
  projectDescription?: string;
};

/** A dated public achievement: awards, talks, community work. */
export type Highlight = {
  date: string;
  title: string;
  detail?: string;
  /** An extra line, e.g. a project's one-line pitch. */
  note?: string;
};

import avatarWork from "../assets/avatar-work.jpg";
/** Work-face avatar (the Life face keeps data/life.ts's AVATAR). */
export const AVATAR_WORK = avatarWork;

export const PROFILE = {
  name: "林駿騰",
  headline: "社會新鮮人・待業中",
  bio: [
    "我是駿騰，2026 年 6 月自國立高雄科技大學智慧商務系碩士班畢業。做前端，也碰後端和一點資料分析。",
    "目前待業中。學期間做過車牌辨識、公車站牌分析、租屋網等課程專題。",
  ],
};

export const PROJECTS_WORK: Experience[] = [
  {
    period: "2025.04 – 2025.08",
    title: "線上銷售與內容管理平台 · 業界委託",
    duties: [
      {
        name: "付款後開通",
        text: "學員完成付款後，系統自動開通對應課程的觀看權限。",
      },
      {
        name: "權限",
        text: "依角色控管後台與內容，避免未授權的人看到課程或管理功能。",
      },
      {
        name: "課程內容",
        text: "課程可分章節，支援影片、嵌入頁面與長文，方便放教材。",
      },
    ],
  },
  {
    period: "2024.07 – 2025.03",
    title: "POS 管理平台 · 業界委託",
    duties: [
      {
        name: "進銷存",
        text: "管理商品與供應商，並處理進貨、銷貨單據。",
      },
      {
        name: "櫃台與結帳",
        text: "監看 POS 機台狀態、設定發票與支付方式，並留下開關帳紀錄。",
      },
      {
        name: "會員與促銷",
        text: "員工權限、會員分群，以及促銷折扣規則。",
      },
    ],
  },
  {
    period: "2023.05 – 2023.12",
    title: "CodeCourse 程式線上學習平台 · 畢業專題",
    duties: [
      {
        name: "即時評測",
        text: "學習者在瀏覽器寫程式，系統立刻執行並回傳結果，支援多種語言。",
      },
      {
        name: "學習方式",
        text: "有學習路徑，題型包含選擇題、克漏字與實際寫程式。",
      },
      {
        name: "教學端",
        text: "可看作答紀錄，學習者能對照錯誤訊息與教師詳解。",
      },
    ],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    period: "2025.08 – 2026.07",
    title: "應屆畢業生聯合會 · 會長",
    duties: [
      {
        name: "創會",
        text: "推動校級畢業組織成立，擔任第一屆會長。",
      },
      {
        name: "畢業事務",
        text: "統籌建工、燕巢兩校區學位服發放與畢業照，服務 47 個班級、972 名應屆畢業生。",
      },
    ],
  },
  {
    period: "2024.08 – 2026.07",
    title: "學生會 · 商業智慧學院學生議員",
    duties: [
      {
        name: "走出校園",
        text: "與地方民意代表針對創新路交通問題進行現場會勘。",
      },
      {
        name: "選舉改革",
        text: "推動選舉改革，學生會正副會長由一正四副四校區制改為一正二副不分校區制。",
      },
    ],
  },
  {
    period: "2023.08 – 2024.07",
    title: "學生會 · 行政中心副秘書長",
    duties: [],
  },
  {
    period: "2023.11 – 2024.04",
    title: "學生會 · 選舉委員會主任委員",
    duties: [
      {
        name: "選舉改革",
        text: "推動選舉改革，學生議員由系選舉區制改為院選舉區制，並增設法定當選門檻。",
      },
    ],
  },
  {
    period: "2022.08 – 2023.07",
    title: "學生會 · 行政中心學術組長",
    duties: [
      {
        name: "文書規範",
        text: "管理內部文書作業規範，並擔任內部課程講師指導，確保運作符合規範。",
      },
      {
        name: "全校制服日",
        text: "擔任學生會第一屆「全校制服日」總召集人，負責企劃發想、跨校區資源調度與現場管控，與 24 個科系學生會合作，領導 252 人執行團隊，成功吸引全校逾 1500 人參與。",
      },
    ],
  },
  {
    period: "2020.09 – 2024.06",
    title: "國立高雄科技大學 智慧商務系",
    duties: [
      {
        name: "系學會",
        text: "服務副組長，執行系上活動並統籌系級畢業典禮。",
      },
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    period: "2024.09 – 2026.06",
    school: "國立高雄科技大學",
    degree: "智慧商務系碩士",
    thesis:
      "基於Transformer編碼器與圖卷積神經網路之繁體中文假新聞檢測：雙字形增強與少樣本閾值校準的跨資料集研究",
    description:
      "本研究結合 Transformer 編碼器與圖卷積神經網路，做繁體中文假新聞檢測，並用雙字形增強與少樣本閾值校準，在不同資料集上驗證。結論是結合雙字形增強與少樣本閾值校準優於基準表現，但圖卷積神經網路則需視情境使用。",
  },
  {
    period: "2020.09 – 2024.06",
    school: "國立高雄科技大學",
    degree: "智慧商務系學士",
    project: "CodeCourse程式線上學習平台",
    projectDescription:
      "線上寫程式並立刻看到執行結果。有學習路徑、選擇題、克漏字，教師端可看作答紀錄。",
  },
  {
    period: "2017.09 – 2020.06",
    school: "國立員林崇實高工",
    degree: "資訊科",
  },
];

export const SKILLS: string[] = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Vite",
  "Tailwind CSS",
  "shadcn/ui",
  "React Hook Form",
  "Zod",
  "Node.js",
  "Express",
  "PayloadCMS",
  "PostgreSQL",
  "GraphQL",
  "REST API",
  "Git",
  "ESLint",
  "Python",
  "PyTorch",
  "Pandas",
  "NumPy",
  "NLP",
  "GNN",
];

export const PUBLICATIONS: Highlight[] = [
  {
    date: "2026.06",
    title: "碩士論文",
    detail:
      "基於 Transformer 編碼器與圖卷積神經網路之繁體中文假新聞檢測：雙字形增強與少樣本閾值校準的跨資料集研究",
  },
  {
    date: "2026.05",
    title: "ICIM 2026",
    detail:
      "基於官方新聞與群眾查核資料之繁體中文假新聞檢測研究：結合 Transformer 與圖卷積神經網路",
    note: "林駿騰、廖奕雯、林孝忠、賴谷鑫",
  },
  {
    date: "2025.12",
    title: "IMP 2025",
    detail: "結合大型語言模型與圖神經網路混合架構於假新聞偵測之研究",
    note: "林駿騰、廖奕雯、林孝忠",
  },
];

export const HIGHLIGHTS: Highlight[] = [
  {
    date: "2024",
    title: "書卷獎",
    detail: "大學期間兩次",
    note: "學業班排名第 5、操行班排名第 1",
  },
  {
    date: "2022",
    title: "資訊應用服務創新創業新秀選拔",
    detail: "潛力商品組銀獎",
    note: "兒童元宇宙童書平台，負責前端",
  },
];

export const CERTS: string[] = [
  "金融科技力知識檢定",
  "乙級電腦硬體裝修技術士",
  "丙級電腦軟體應用技術士",
  "丙級電腦軟體設計技術士",
];

const splitPeriod = (period: string): { start: string; end?: string } => {
  const [start, end] = period.split(" – ");
  return { start, end };
};

const joinDetail = (...parts: (string | undefined)[]): string | undefined =>
  parts.filter(Boolean).join(" · ") || undefined;

const toTimeline = (items: Experience[]): TimelineEntry[] =>
  items.map((e) => ({
    title: e.title,
    ...splitPeriod(e.period),
    duties: e.duties,
  }));

const educationDuties = (e: Education): TimelineEntry["duties"] => {
  const duties: NonNullable<TimelineEntry["duties"]> = [];
  if (e.thesis) {
    duties.push({
      name: `碩士論文：${e.thesis}`,
      text: e.description ?? "",
    });
  }
  if (e.project) {
    duties.push({
      name: `畢業專題：${e.project}`,
      text: e.projectDescription ?? "",
    });
  }
  return duties.length > 0 ? duties : undefined;
};

const PROJECT_ENTRIES: TimelineEntry[] = toTimeline(PROJECTS_WORK);
const EXPERIENCE_ENTRIES: TimelineEntry[] = toTimeline(EXPERIENCE);

const EDUCATION_ENTRIES: TimelineEntry[] = EDUCATION.map((e) => ({
  title: e.school,
  subtitle: e.degree,
  ...splitPeriod(e.period),
  duties: educationDuties(e),
}));

const PUBLICATION_ENTRIES: HighlightEntry[] = PUBLICATIONS.map((h) => ({
  title: h.title,
  subtitle: joinDetail(h.detail, h.note),
  date: h.date,
}));

const HIGHLIGHTS_ENTRIES: HighlightEntry[] = HIGHLIGHTS.map((h) => ({
  title: h.title,
  subtitle: joinDetail(h.detail, h.note),
  date: h.date,
}));

const LINKS: { label: string; url: string; note?: string }[] = [
  {
    label: "E-mail",
    url: "mailto:junteng.1113@gmail.com",
    note: "junteng.1113@gmail.com",
  },
  {
    label: "GitHub",
    url: "https://github.com/JunTeng1113",
    note: "程式與專案",
  },
  {
    label: "碩士論文",
    url: "https://hdl.handle.net/11296/pdrk2d",
    note: "臺灣博碩士論文知識加值系統",
  },
];

export const PROFESSIONAL_SECTIONS: Section[] = [
  { type: "text", title: "關於", paragraphs: PROFILE.bio },
  { type: "timeline", title: "專案", entries: PROJECT_ENTRIES },
  { type: "timeline", title: "經歷", entries: EXPERIENCE_ENTRIES },
  { type: "timeline", title: "學歷", entries: EDUCATION_ENTRIES },
  { type: "chips", title: "技能", items: SKILLS },
  {
    type: "highlights",
    title: "學術發表",
    icon: "book",
    entries: PUBLICATION_ENTRIES,
  },
  { type: "highlights", title: "榮譽", entries: HIGHLIGHTS_ENTRIES },
  { type: "chips", title: "證照", items: CERTS },
  { type: "links", title: "連結", links: LINKS },
];
