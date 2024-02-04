let heading = document.createElement("div");
let body = document.querySelector("body").prepend(heading)
let options = document.querySelector(".options")
let rock = document.createElement("button");
let paper = document.createElement("button");
let scissors = document.createElement("button");
let acc = document.querySelector(".announcer")
let newg = document.querySelector(".newgame")
heading.innerText = "Rock Paper Scissors";
heading.style.width = "100vw";
heading.style.height = "10vh";
heading.style.textAlign = "center";
heading.style.fontSize = "5vh";
heading.style.backgroundColor = "rgb(28, 28, 49)";
heading.style.color = "salmon";
heading.style.lineHeight = heading.clientHeight = "10vh";
heading.style.fontFamily = "sans-serif"
let choose = document.querySelector(".txt")
choose.innerText = "Choose a object"
choose.style.fontFamily = "sans-serif"
choose.style.fontSize = "5vh";
choose.style.position = "relative"
choose.style.display = "flex"
choose.style.justifyContent = "center"
choose.style.marginTop = "5vh"
options.append(rock);
options.append(paper);
options.append(scissors);
rock.innerText = "Rock";
paper.innerText = "Paper";
scissors.innerText = "scissors";
options.style.display = "flex";
options.style.justifyContent = "center";
options.style.alignItems = "center"
options.style.gap = "10vw";
options.style.marginTop = "10vh";
rock.style.paddingTop = "5vh";
rock.style.paddingLeft = "5vh";
rock.style.paddingBottom = "5vh";
rock.style.paddingRight = "5vh";
rock.style.borderRadius = "8vh";
rock.style.backgroundColor = "rgb(202, 50, 88)"; 
rock.style.cursor = "pointer"
paper.style.cursor = "pointer"
paper.style.backgroundColor = "rgb(72, 117, 202)"
paper.style.paddingTop = "5vh";
paper.style.paddingLeft = "5vh";
paper.style.paddingBottom = "5vh";
paper.style.paddingRight = "5vh";
paper.style.borderRadius = "8vh";
scissors.style.cursor = "pointer"
scissors.style.paddingTop = "5vh";
scissors.style.paddingLeft = "4vh";
scissors.style.paddingBottom = "5vh";
scissors.style.paddingRight = "4vh";
scissors.style.borderRadius = "8vh";
scissors.style.backgroundColor = "rgb(93, 105, 128)"
acc.style.display = "flex"
acc.style.justifyContent = "center"
acc.style.fontSize = "5vh"
acc.style.fontFamily = "sans-serif"
acc.style.marginTop = "10vh"
newg.addEventListener("click",()=>{
   location.reload();
})
let input = [];
number = [];
let random = (Math.floor(Math.random() * 3))
rock.addEventListener("click", () => {
   input.push("0");
   console.log(input);
   number.push(random)
   console.log(number)

   if (input[0] == 0 && number[0] == 0) {
      acc.innerText="draw!!";
   } else if (input[0] == 0 && random == 1) {
      acc.innerText="you lose! computer chose paper.";
   } else if (input[0] == 0 && random == 2) {
      acc.innerText="you win! computer chose scissors.";
   }
   rock.disabled = true;
   paper.disabled = true;
   scissors.disabled = true;
   newg.style.display = "block"
}
);
paper.addEventListener("click", () => {
   input.push("1");
   console.log(input);
   number.push(random)
   console.log(number)
   if (input[0] == 1 && number[0] == 1) {
      acc.innerText="draw";
   } else if (input[0] == 1 && random == 2) {
      acc.innerText="you lose! computer chose scissors.";
   } else if (input[0] == 1 && random == 0) {
      acc.innerText="you win! computer chose rock";
   }
   rock.disabled = true;
   paper.disabled = true;
   scissors.disabled = true;
   newg.style.display = "block"
});
scissors.addEventListener("click", () => {
   input.push("2");
   console.log(input);
   number.push(random)
   console.log(number)
   if (input[0] == 2 && number[0] == 2) {
      acc.innerText="draw";
   } else if (input[0] == 2 && random == 0) {
      acc.innerText="you lose! computer chose rock";
   } else if (input[0] == 2 && random == 1) {
      acc.innerText="you win! computer chose paper.";
   }
   rock.disabled = true;
   paper.disabled = true;
   scissors.disabled = true; 
   newg.style.display = "block"
});