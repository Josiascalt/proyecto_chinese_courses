const input_wrapper = document.querySelector("#top-bar > .input-wrapper");
const input_textarea = document.querySelector("#top-bar > .input-wrapper > input");
const search_icon = document.querySelector("#top-bar > .input-wrapper > .icon-wrapper > img");


input_wrapper.addEventListener("mouseover", (event) => {
    search_icon.src = "media/icons/search_light.png";
});

input_wrapper.addEventListener("mouseout", (event) => {
    search_icon.src = "media/icons/search_dark.png";
});



const home_slide_show = document.querySelector("#home > .slide-show");
const home_slide_show_content = ["https://aws.cricketmedia.com/media/20210614151026/learning-chinese-1.jpg", "https://static.wixstatic.com/media/102188_3e016d9a08144c909a35370f2a3544ed~mv2.jpg/v1/fill/w_612,h_452,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_613195298.jpg", "https://images.ctfassets.net/pl05rcmbdryr/5yXBLtfH05yS6Fif66MsYA/3a6a9dea9a40f8c8f3ee1e157ea04bdc/teacher_and_child_in_chinese_classroom__2_.jpg?w=750&q=75&fm=webp"];

for (let i = 0; i < home_slide_show_content; i++) {

}

