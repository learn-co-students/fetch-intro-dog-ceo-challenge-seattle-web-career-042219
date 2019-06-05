function changeColorBasedOnDropdown(dropDown) {
  const options = dropDown.options;
  const selectedIndex = dropDown.selectedIndex;
  const selectedValue = options[selectedIndex].value;

  // alternatively just:
  // const selectedValue = dropDown.value;
  
  const h1 = document.querySelector('#page-header');
  h1.style.color = selectedValue;
}

document.addEventListener("DOMContentLoaded", () => {

  const dropDown = document.querySelector('#color-dropdown');
  dropDown.addEventListener("change", (event) => {
      changeColorBasedOnDropdown(event.target);
  })
});
