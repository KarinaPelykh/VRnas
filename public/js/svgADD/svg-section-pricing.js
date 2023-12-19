const div = document.querySelectorAll(".svg-bg");
const li = document.querySelectorAll(".border");
const background = `
<svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="21"
                    cy="21"
                    r="20.25"
                    fill="#18181B"
                    stroke="url(#paint0_linear_43_1511)"
                    stroke-width="1.5"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_43_1511"
                      x1="0"
                      y1="21"
                      x2="42"
                      y2="21"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0CBAF1" />
                      <stop offset="1" stop-color="#E95CE9" />
                    </linearGradient>
                  </defs>
                </svg>
`;
div.forEach((div) => {
  div.insertAdjacentHTML("afterBegin", background);
});
li.forEach((li) => {
  li.insertAdjacentHTML("afterBegin", background);
});
