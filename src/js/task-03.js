const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryItemEl = document.querySelector(".gallery");

const makeGallery = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery__item"><img src="${url}" alt="${alt}" class="gallery__image"/></li>`
  )
  .join("");

galleryItemEl.insertAdjacentHTML("afterbegin", makeGallery);

galleryItemEl.classList.add("gallery__list", "list");
