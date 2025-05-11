document.querySelectorAll(".carousel-container").forEach((container) => {
  const imageElement = container.querySelector(".carouselImage");
  const prevBtn = container.querySelector(".prevBtn");
  const nextBtn = container.querySelector(".nextBtn");
  const imageList = JSON.parse(container.getAttribute("data-images"));
  let currentIndex = 0;

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    imageElement.src = imageList[currentIndex];
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imageList.length;
    imageElement.src = imageList[currentIndex];
  });
});
