let li = document.querySelectorAll("li");
let lastClickedItem = null;

li.forEach(function (elem) {
  elem.addEventListener("click", function (event) {
    let currentItem = event.target;

    if (event.shiftKey && lastClickedItem) {
      let start = Array.from(li).indexOf(lastClickedItem);
      let end = Array.from(li).indexOf(currentItem);

      li.forEach(function (item) {
        item.classList.remove("active");
      });

      for (let i = Math.min(start, end); i <= Math.max(start, end); i++) {
        li[i].classList.add("active");
      }
    } else if (event.ctrlKey || event.metaKey) {
      currentItem.classList.toggle("active");
    } else {
      li.forEach(function (item) {
        item.classList.remove("active");
      });
      currentItem.classList.add("active");
    }

    lastClickedItem = currentItem;
  });
});
