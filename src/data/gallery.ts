// Drop photos into src/assets/gallery/, import them, and list them here —
// array order is display order (the masonry layout does not resort). An
// imported `src` ships through astro:assets (responsive sizes, webp); a
// full https:// URL string also works and is used as-is. `alt` is
// required: unlike the decorative avatar/hero images elsewhere, a gallery
// photo IS the content. `caption` is optional and renders under the image
// (and in the lightbox) when set.
import type { ImageMetadata } from "astro";

export type GalleryPhoto = {
  src: ImageMetadata | string;
  alt: string;
  caption?: string;
};

export const GALLERY: GalleryPhoto[] = [];
