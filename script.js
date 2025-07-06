document.addEventListener("DOMContentLoaded", ()=> {
    function scrollbar(parent,child){
        let hidetime;
        parent.addEventListener("mouseenter",()=> {
            clearTimeout(hidetime);
            child.style.backgroundColor = "rgb(101, 101, 101)";
            child.style.pointerEvents = "auto";
        });
        parent.addEventListener("mouseleave", ()=> {
            hidetime = setTimeout(()=> {
                child.style.backgroundColor = "transparent";
                child.style.pointerEvents = "none";
            },850);
        })
    }
    scrollbar(document.querySelector(".playlistwrapper"),document.querySelector(".scrollbar1"));
    scrollbar(document.querySelector(".rightpartwrapper"),document.querySelector(".scrollbar2"));
});