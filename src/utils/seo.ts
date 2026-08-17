import { product } from "../data/product";
import { SITE_URL, siteKeywords } from "../data/seo";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let link = document.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

export function setPageMeta(title?: string, description?: string) {
  const t = title || product.seoTitle;
  const d = description || product.seoDescription;
  const canonical = `${SITE_URL}${window.location.pathname}`;

  document.title = t;
  upsertMeta("name", "description", d);
  upsertMeta("name", "keywords", siteKeywords);
  upsertLink("canonical", canonical);

  upsertMeta("property", "og:title", t);
  upsertMeta("property", "og:description", d);
  upsertMeta("property", "og:url", canonical);
  upsertMeta("property", "og:site_name", product.name);
  upsertMeta("property", "og:type", "website");

  upsertMeta("name", "twitter:title", t);
  upsertMeta("name", "twitter:description", d);
}