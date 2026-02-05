let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main=document.querySelector("#main")

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  let card = document.createElement("div");
  card.classList.add("card");

  let profile = document.createElement("div");
  profile.classList.add("profile");
  card.appendChild(profile);

  let img = document.createElement("img");
  img.setAttribute(
    "src",
    inputs[3].value
);
  profile.appendChild(img);

  let h3 = document.createElement("h3");
  h3.textContent=inputs[0].value;
  card.appendChild(h3);

  let h5 = document.createElement("h5");
  h5.textContent=inputs[1].value;
  card.appendChild(h5);

  let p = document.createElement("p");
  p.textContent=inputs[2].value;
  card.appendChild(p);

  main.appendChild(card);

  inputs.forEach(function(inp){
    if(inp.type!=="submit"){
        inp.value="";
    }
  })
});
