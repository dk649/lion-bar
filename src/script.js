window.onload = () => {
  const carouselEl = document.getElementById("carousel");

  const previousEl = document.getElementById("previous");

  const nextEl = document.getElementById("next");

  previousEl.addEventListener("click", () => {
    const itemWidth = carouselEl.getElementsByTagName("div")[0].clientWidth;
    carouselEl.scrollLeft = carouselEl.scrollLeft - itemWidth;
  });

  nextEl.addEventListener("click", () => {
    const itemWidth = carouselEl.getElementsByTagName("div")[0].clientWidth;
    carouselEl.scrollLeft = carouselEl.scrollLeft + itemWidth;
  });

  console.log(previousEl);
};
