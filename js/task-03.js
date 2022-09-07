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

const galleryList = document.querySelector(".gallery");

const markup = images
  .map(({ url, alt }) => {
    return `<li><img src = "${url} alt = "${alt}" width = "300"></li>`;
  })
  .join("");

galleryList.insertAdjacentHTML("beforeend", markup);

galleryList.style.display = "flex";
galleryList.style.flexWrap = "column-reverse";
galleryList.style.listStyle = "none";
galleryList.style.gap = "20px";
galleryList.style.justifyContent = "center";

// galleryList.setAttribute(
//   "style",
//   "list-style-type:none; display: flex; gap: 10px;"
// );

// Друге рішення

// const list = images.map(
//   ({ url, alt }) => `<li><img src="${url}" alt="${alt}" width="300"></li>`
// );

// document
//   .querySelector(".gallery")
//   .insertAdjacentHTML("beforeend", list.join(""));
