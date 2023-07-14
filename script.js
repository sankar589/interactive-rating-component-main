let currentNode;
      let ratingValue;
      let submit = document.getElementById("submit");
      let rating = document.getElementById("rating");
      let card = document.getElementById('card');
      let result = document.getElementById("result");

      card.style.display = "none";
      
      submit.addEventListener("click", (e) => {
        if (ratingValue == undefined){
          return
        }
        rating.style.display = "none";
        card.style.display = "flex";
        result.innerText = ratingValue;
      });
      document.querySelectorAll(".round").forEach(function clickRating(node) {
        node.onclick = function store() {
          if (currentNode != undefined) {
            currentNode.classList.remove("selected");
          }
          node.classList.add("selected");
          currentNode = node;
        };
      });

      document.querySelectorAll(".round").forEach((rate) =>{
        rate.addEventListener("click",()=>{
          ratingValue = rate.innerHTML;
        })
        
      });