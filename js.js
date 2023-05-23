var elements = [];
window.onload = function() {

  if (JSON.parse(localStorage.getItem("elements")) != "")
    elements = JSON.parse(localStorage.getItem("elements"));
  display();
};
function AddElement() {
  if (document.getElementById("AddText").value != "") {
    elements.push(document.getElementById("AddText").value);
    document.getElementById('AddText').value='';
    
    if(localStorage.getItem("elements") == "") {
      localStorage.setItem("elements", JSON.stringify(elements));
    } else {
      localStorage.setItem("elements", JSON.stringify(elements));
    }
    display();
   
  }
}

function del(index) {
  elements.splice(index, 1);
  if (localStorage.getItem("elements") == "") {
    localStorage.setItem("elements", JSON.stringify(elements));
  } else {
    localStorage.setItem("elements", JSON.stringify(elements));
  }
  display();
}
