const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(element => {
    element.addEventListener("click", event => {
        const current = document.querySelector(".accordion-item-header.active")
        if(current && current!==element){
            current.classList.toggle("active")
            current.nextElementSibling.style.maxHeight = 0
        }

        element.classList.toggle("active")

        const accordionItemBody = element.nextElementSibling;
        if(element.classList.contains('active')){
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        }
        else{
            accordionItemBody.style.maxHeight = 0;
        }
    });
});