var lis = document.querySelectorAll(".pulites li");
var pbtn = document.getElementsByClassName("product")
lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        lis.forEach((li) => {
            li.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    });
});
function(){ pbtn.addEventListener("click",() => {
    console.log("hi from ls");
});}