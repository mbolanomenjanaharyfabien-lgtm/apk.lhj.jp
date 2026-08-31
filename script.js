function btn_menu(){
    let logo_menu = document.getElementById("menu_barre").textContent;
    if (logo_menu === "="){
        let menu_bar = document.getElementById("header_resposive");
        menu_bar.style.display = "block";
        let logo_menu = document.getElementById("menu_barre");
        logo_menu.innerHTML = "x";
    }
    else if(logo_menu === "x"){
        let menu_bar = document.getElementById("header_resposive");
        menu_bar.style.display = "none"; 
        let logo_menu = document.getElementById("menu_barre");
        logo_menu.innerHTML = "=";
    }
}
