const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

  let value = searchInput.value.toLowerCase();

  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    let title = card.querySelector("h3").innerText.toLowerCase();

    if(title.includes(value)){
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

});