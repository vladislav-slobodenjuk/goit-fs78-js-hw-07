import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
// console.log(galleryEl);

console.log(galleryItems);

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

function onImgClick(e) {
  e.preventDefault();
  //
  console.log(e);
  console.dir(e.target);
  console.log(e.target.dataset.source);
}

galleryEl.addEventListener("click", onImgClick);
// ${}
