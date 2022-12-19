const elMain = document.querySelector(".main-card")
let films = [];


fetch(`https://www.omdbapi.com/?s=avengers&plot=full&apikey=20295c63`)
.then(res => res.json())
.then(data => {
        films = data.Search;
        renderObj(films); 
    })
  function  renderObj(films){
    const fragment = document.createDocumentFragment();
    films.forEach(element => {
        const card = document.createElement("div")
        card.className = "card bg-secondary bg-opacity-50 mb-5"
        card.innerHTML = `
      <img class="rounded-2" src="${element.Poster}" alt="img" style="height: 550px;  ">
      <h3 class= "text-center mt-1 mb-2 text-info p-3">  ${element.Title}</h3>
            <h4 class="text-center mb-2 pb-2 text-info " > ${element.Type} . ${element.Year}</h4>
 `
 card.appendChild(fragment)
 elMain.appendChild(card)
});
    }

