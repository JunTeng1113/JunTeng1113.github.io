// The Life face's trophy wall. Drop screenshots into src/assets/trophies/,
// import them, and list them here — an entry without `src` renders a
// placeholder box.
import type { ImageMetadata } from "astro";

export type Trophy = {
  /** Imported image; omit it to render a placeholder box. */
  src?: ImageMetadata;
  caption: string;
};

export const TROPHIES: Trophy[] = [
  {
    caption: "114 學年度應屆畢業生聯合會，擔任會長、執行長與活動長。",
  },
  {
    caption: "智慧商務碩士班班代，一甲、二甲都當過。",
  },
];
