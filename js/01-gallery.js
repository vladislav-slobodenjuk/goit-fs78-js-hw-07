import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      // const { preview, original, description } = item;
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
}

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

let instance = {};

function onImgClick(e) {
  e.preventDefault();

  // const isImage = e.target.nodeName === "IMG";
  const isImage = e.target.classList.contains("gallery__image");
  if (!isImage) return;

  const source = e.target.dataset.source;
  instance = createInstance(source);
  instance.show();
}

function createInstance(src) {
  return basicLightbox.create(`<img src=${src}>`, {
    onShow: () => document.addEventListener("keydown", onEscPress),
    onClose: () => document.removeEventListener("keydown", onEscPress),
  });
}

function onEscPress(e) {
  console.log(e.code); // to check is key listener present
  if (e.code === "Escape") instance.close();
}

galleryEl.addEventListener("click", onImgClick);
