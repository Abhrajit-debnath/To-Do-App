const inputbox = document.getElementById("input");
const licontainer = document.getElementById("li-con");



function addtask() {
  if (inputbox.value === "") {
    alert("You Must Write Something");
  } else {
    let li = document.createElement("li");
    li.className =
      "check list-none text-lg pt-3 pr-2 pb-3 pl-12 select-none cursor-pointer";
    li.textContent = inputbox.value;
    licontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputbox.value = "";
  savedata();
}

function savedata() {
    localStorage.setItem("data", licontainer.innerHTML);
  }
  
licontainer.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("check");
    savedata();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    savedata();
  }
});
function showdata() {
    licontainer.innerHTML=localStorage.getItem("data");
}
showdata();