console.log("Time to get started...");

let userName: string;

//relying on the DOM api which is all included in the libraries default options.
//the ! is so that it passes the strict null check - this basically tells compiler that you
//are sure that it exists

const button = document.querySelector("button")!;
//could also just do an if check  
if (button) {
  button.addEventListener("click", () => {
    console.log("Clicked");
  });
}

//default values 
const add = (a:number, b:number = 1) => {return a+b};  

let funnyAnswer = add(3) // is allowed because b has a default value of 1
