import { product } from "../data/product";

export function setPageMeta(title?: string, description?: string) {
  document.title = title || product.seoTitle;

  const desc = description || product.seoDescription;
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", "description");
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", desc);
}
