const toggeleBtn = document.querySelector(".toggel-btn");
const toggeleIcon = document.querySelector(".toggle-btn i");
const dropdownMenue = document.querySelector(".dropdown");
toggeleBtn.onclick = function () {
    dropdownMenue.classList.toggle('open');
    const isOpen = dropdownMenue.classList.contains('open');
    toggeleIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}