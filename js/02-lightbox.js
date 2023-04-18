import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

const markup = galleryItems
  .map((item) => {
    const { preview, original, description } = item;
    return `<li class="gallery__item">
              <a class="gallery__link" href=${original}>
                <img class="gallery__image" src=${preview} alt=${description} />
              </a>
            </li>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

new SimpleLightbox(".gallery a", {
  overlayOpacity: 0.8,
  captionsData: "alt",
  captionDelay: 250,
});
