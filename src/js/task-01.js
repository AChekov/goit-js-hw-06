// // ======================= TASK 1 ====================
// // Посчитает и выведет в консоль количество элементов
// const ulEl = document.querySelector("#categories");
// const ulElLength = ulEl.children.length;
// console.log(`Number of categories: ${ulElLength}`);

// //найдет и выведет в консоль текст заголовка элемента и количество элементов

// // ==========first category==========
// const firstItemEl = ulEl.childNodes[1];
// const firstItemElChild = firstItemEl.childNodes[3];
// const firstChildQuantity = firstItemElChild.children.length;
// const firstTitleEl = firstItemEl.firstElementChild.textContent;
// console.log(
//   `Category: ${firstTitleEl}
// Elements: ${firstChildQuantity}`
// );

// // ==========second category==========
// const secondItemEl = ulEl.childNodes[3];
// const secondItemElChild = secondItemEl.childNodes[3];
// const secondChildQuantity = secondItemElChild.children.length;
// const secondTitleEl = secondItemEl.firstElementChild.textContent;
// console.log(
//   `Category: ${secondTitleEl}
// Elements: ${secondChildQuantity}
// `
// );

// // ==========third category==========
// const thirdItemEl = ulEl.childNodes[5];
// const thirdItemElChild = thirdItemEl.childNodes[3];
// const thirdChildQuantity = thirdItemElChild.children.length;
// const thirdTitleEl = thirdItemEl.firstElementChild.textContent;
// console.log(
//   `Category: ${thirdTitleEl}
// Elements: ${thirdChildQuantity}`
// );

// // ==========function==========
// const ulItemEl = ulEl.querySelectorAll(".item");

// function getCategories(ulItemsEl) {
//   ulItemsEl.forEach((item) => {
//     console.log("Category:", item.querySelector("h2").textContent);
//     console.log("Elements:", item.querySelectorAll("li").length);
//   });
// }
// console.log("%cFunction:", "color:tomato; font-size: 20px");
// getCategories(ulItemEl);

// const ulRefId = document.querySelector("#categories");
// const ulRefIdLength = ulRefId.children.length;
// console.log(`Number of  categories ${ulRefIdLength}`);

// ==================================================

// const firstItemRef = ulRefId.childNodes[1];
// const firstItemRefChild = firstItemRef.childNodes[3];
// const firstChildQuantity = firstItemRefChild.children.length;
// const firstTitleRef = firstItemRef.firstElementChild.textContent;
// console.log(`Category: ${firstTitleRef}
// Elements: ${firstChildQuantity}`);

// ==================================================

// const secondItemRef = ulRefId.childNodes[3];
// const secondItemRefChild = secondItemRef.childNodes[3];
// const secondChildQuantity = secondItemRef.children.length;
// const secondTitleRef = secondItemRef.firstElementChild.textContent;
// console.log(`Category: ${secondTitleRef}
// Elements: ${secondChildQuantity}`);

// ==================================================

// const thirdItemRef = ulRefId.childNodes[5];
// const thirdItemRefChild = thirdItemRef.childNodes[3];
// const thirdChildQuantity = thirdItemRefChild.children.length;
// const thirdTitleRef = thirdItemRef.firstElementChild.textContent;
// console.log(`Category: ${thirdTitleRef}
// Elements: ${thirdChildQuantity}`);

// ==================================================

// const ulEl = document.querySelectorAll(".item");

// function getCategories(ulEl) {
//   ulEl.forEach((item) => {
//     console.log("Category:", item.querySelector("h2").textContent);
//     console.log("Elements:", item.querySelectorAll("li").length);
//   });
// }
// console.log("%cFunction:", "color: red; font-size: 15px");
// getCategories(ulEl);
