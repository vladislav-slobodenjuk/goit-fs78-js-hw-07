import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

const markup = galleryItems
  .map((item) => {
    const { preview, original, description } = item;
    return `<li class="gallery__item">
              <a class="gallery__link" href=${original}>
                <img
                  class="gallery__image"
                  src=${preview}
                  data-source=${original}
                  alt=${description}
                />
              </a>
            </li>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

let instance = {};

function onImgClick(e) {
  e.preventDefault();
  if (e.target.tagName !== "IMG") return;

  const source = e.target.dataset.source;

  instance = basicLightbox.create(`<img src=${source}>`, {
    onShow: () => document.addEventListener("keydown", onEscPress),
    onClose: () => document.removeEventListener("keydown", onEscPress),
  });
  instance.show();
}

function onEscPress(e) {
  console.log(e.code); // to check is key listener present
  if (e.code === "Escape") instance.close();
}

galleryEl.addEventListener("click", onImgClick);
