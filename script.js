// document.onload(document.documentElement.dataset.scroll = window.scrollY);
document.addEventListener('scroll', () => {
  // if (window.scrollY > 0){
  //   document.querySelector(".navbar").querySelector(".middle").appendChild(document.querySelector(".title").querySelector("span"));
  //   console.log("hey!")
  // }
  // else{
  //   document.querySelector(".title").appendChild(document.querySelector(".navbar").querySelector(".middle").querySelector("span"));
  // }
  // if (window.scrollY >= 20){
  //   //document.querySelector(".title").querySelector("span").style.position = "fixed";
  //   document.querySelector(".title").querySelector("span").style += ";position: fixed;transform: translateY(-46px); font-size: 1.5em; height: 40px;";
  //   document.querySelector(".title").style += ";height: 0; padding: 0; margin: 0; position: fixed; top: 40px; border-bottom: none;";
  // }
  // else{
  //   document.querySelector(".title").querySelector("span").style -= ";position: fixed;transform: translateY(-46px); font-size: 1.5em; height: 40px;";
  //   document.querySelector(".title").style -= ";height: 0; padding: 0; margin: 0; position: fixed; top: 40px; border-bottom: none;";
  // }

  // if (window.scrollY >= 202){
  //   document.querySelector(".navbar").style += ";height: 44px; border-bottom: 4px solid; border-image: linear-gradient(to right, #FEA490, #B66BBD 60%, #25076E) 1;";
  // }
  document.documentElement.dataset.scroll = window.scrollY;
});
