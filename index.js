const sidebarToggle = document.querySelector(".ai-three-line-horizontal");
const sidebar = document.querySelector("#sidebar");

const submenuContainer = document.querySelectorAll(".sub-container");

const reset = function () {
    submenuContainer.forEach((container) => {
        const submenu = container.nextElementSibling;
        submenu.style.height = 0;
    });
}

const openSubmenu = function(element) {
    reset();

    element.classList.add("open");
}   

const openSidebar = function () { 
        reset();
        if (sidebarToggle.classList.contains("closed")) {
            sidebarToggle.classList.remove("closed");
            sidebar.classList.remove("collapsed");
        } else {
            sidebarToggle.classList.add("closed");
            sidebar.classList.add("collapsed")
        }
}

sidebarToggle.addEventListener("click", openSidebar);

submenuContainer.forEach((menuButton) => {
    menuButton.addEventListener("click", function() {
        const submenu = menuButton.nextElementSibling;
        const ul = submenu.querySelector("ul");
        const isOpen = submenu.clientHeight > 0;


        console.log(submenu);
        console.log(ul);
        console.log(isOpen);

        reset();    

        if (!sidebar.classList.contains("collapsed")) {
            if (isOpen) {
                submenu.style.height = 0;
            } else {
                submenu.style.height = `${ul.clientHeight}px`;
            }
        }

    
    })
})



