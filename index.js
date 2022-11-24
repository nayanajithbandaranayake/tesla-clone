const slider = document.getElementById("slider");
const links = document.querySelectorAll(".header-link");

const sliderVertPadding = 20;
const sliderHorizPadding = 30;
const linkPadding = 6;

links.forEach((link) => {
  link.addEventListener("mouseover", (e) => {
    slider.style.opacity = "0.1";
    const { height, width, left, top } = link.getBoundingClientRect();
    slider.style.top = `${top - sliderVertPadding / 2 + linkPadding}px`;
    slider.style.left = `${left - sliderHorizPadding / 2 + linkPadding}px`;

    slider.style.height = `${height + sliderVertPadding - linkPadding * 2}px`;
    slider.style.width = `${width + sliderHorizPadding - linkPadding * 2}px`;
  });
  link.addEventListener("mouseout", (e) => {
    slider.style.opacity = `0`;
  });
});
