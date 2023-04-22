import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  //
  return items
    .map(({ preview, original, description }) => {
      // const { preview, original, description } = item;
      return `<li class="gallery__item">
                <a class="gallery__link" href=${original}>
                  <img class="gallery__image" src=${preview} alt=${description} />
                </a>
              </li>`;
    })
    .join("");
}

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

new SimpleLightbox(".gallery a", {
  overlayOpacity: 0.8,
  captionsData: "alt",
  captionDelay: 250,
});
