const input_wrapper = document.querySelector("#top-bar > .input-wrapper");
const input_textarea = document.querySelector("#top-bar > .input-wrapper > input");
const search_icon = document.querySelector("#top-bar > .input-wrapper > .icon-wrapper > img");


input_wrapper.addEventListener("mouseover", (event) => {
    search_icon.src = "media/icons/search_light.png";
});

input_wrapper.addEventListener("mouseout", (event) => {
    search_icon.src = "media/icons/search_dark.png";
});