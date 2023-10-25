var divElements = document.querySelectorAll(".price");
      divElements.forEach(function(divElement) {
        divElement.addEventListener("mouseenter", function() {
          divElement.style.backgroundColor = "#00b8f1";
          divElement.style.color = "black"
        });
      
        divElement.addEventListener("mouseleave", function() {
          divElement.style.backgroundColor = "#6aa84f";
          divElement.style.color = "white"
        });
      });
    function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
        const menuIcon = document.querySelector('.menu-icon');
const navbarNav = document.querySelector('.navbar-nav');
const menuItems = navbarNav.querySelectorAll('.nav-item');

menuIcon.addEventListener('click', function () {
    if (navbarNav.classList.contains('active')) {
        navbarNav.classList.remove('active');
    } else {
        navbarNav.classList.add('active');
    }
});

menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
        navbarNav.classList.remove('active');
    });
});


        function openPage(pageName, elmnt) {
    var i, tabcontent, tablinks;
    var currentSection = elmnt.getAttribute("data-section");

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(currentSection).style.display = "block";
}

function openPage1(pageName, elmnt) {
    var i, tabcontent1, tablinks;
    var currentSection = elmnt.getAttribute("data-section");

    tabcontent1 = document.getElementsByClassName("tabcontent1");
    for (i = 0; i < tabcontent1.length; i++) {
        tabcontent1[i].style.display = "none";
    }
    document.getElementById(currentSection).style.display = "block";
}

function openPage2(pageName, elmnt) {
    var i, tabcontent2, tablinks;
    var currentSection = elmnt.getAttribute("data-section");

    tabcontent2 = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent2.length; i++) {
        tabcontent2[i].style.display = "none";
    }
    document.getElementById(currentSection).style.display = "block";
}

      