const e=document.querySelector(".breed-select");document.querySelector(".loader"),document.querySelector(".error"),document.querySelector(".cat-info");fetch("https://api.thecatapi.com/v1/breeds").then((e=>e.json())).then((t=>{t.forEach((function(t){let o=document.createElement("option");o.value=t.id,o.textContent=t.name,e.appendChild(o)}))})).catch((e=>{console.log(e)}));
//# sourceMappingURL=index.58a03825.js.map
