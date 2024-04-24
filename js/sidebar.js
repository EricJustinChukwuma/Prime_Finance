const dropDownMenu1 = document.querySelector(".sidebar-dropdown1");
const dropDownMenu2 = document.querySelector(".sidebar-dropdown2");
const dropDownMenu3 = document.querySelector(".sidebar-dropdown3");

const dropDownIcon = document.querySelectorAll(".up-down-icon")

function showDropDownFunds() {
    dropDownMenu1.classList.toggle("dropdown-open");
    dropDownMenu2.classList.remove("dropdown-open");
    dropDownMenu3.classList.remove("dropdown-open");

    dropDownIcon[0].classList.toggle("opened");
    dropDownIcon[1].classList.remove("opened");
    dropDownIcon[2].classList.remove("opened");

}

function showDropDownCryptoAssets() {
    dropDownMenu2.classList.toggle("dropdown-open");
    dropDownMenu1.classList.remove("dropdown-open");
    dropDownMenu3.classList.remove("dropdown-open");

    dropDownIcon[1].classList.toggle("opened");
    dropDownIcon[0].classList.remove("opened");
    dropDownIcon[2].classList.remove("opened");
}

function showDropDownAbout() {
    dropDownMenu3.classList.toggle("dropdown-open");
    dropDownMenu1.classList.remove("dropdown-open");
    dropDownMenu2.classList.remove("dropdown-open");

    dropDownIcon[2].classList.toggle("opened");
    dropDownIcon[0].classList.remove("opened");
    dropDownIcon[1].classList.remove("opened");
}


const openSidebar = document.getElementById("open-menu");
const closeSidebar = document.getElementById("close-sidebar");
const sidebar = document.querySelector(".sidebar");

openSidebar.addEventListener("click", function() {
    sidebar.classList.add("open-sidebar");
});

closeSidebar.addEventListener("click", function() {
    sidebar.classList.remove("open-sidebar");
});



const sidebar2 = document.getElementById("faqs-nav-links-sm");

function showNavbar() {
    sidebar.classList.add("isOpened")
};





// window.addEventListener("click", ()=> {
//     sidebar.classList.remove("open-sidebar")
// })