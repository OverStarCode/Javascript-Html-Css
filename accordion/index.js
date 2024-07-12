var accordion_list = document.querySelectorAll(".accordion .accordion-item");

console.log(accordion_list);


accordion_list.forEach(function(accordion_item) {

    var btn = accordion_item.querySelector(".accordion-header");

    btn.addEventListener("click", function() {

        accordion_list.forEach(function(item) {
            if (item!== accordion_item) {
                item.classList.remove("active");
            }
        });
        
        accordion_item.classList.toggle("active");

        // make window to scroll to that element view 

        window.scrollTo({
            top: accordion_item.offsetTop - 60,
            behavior: "smooth"
        });

    })
    

});