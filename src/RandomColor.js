// import React, {useState} from 'react'

 
const random = () => {
      const change = document.querySelectorAll('.change');
      const textColor = document.querySelectorAll('.text-color')

    const randomColor = `rgb(
        ${Math.floor(Math.random() * 155)},
        ${Math.floor(Math.random() * 155)},
        ${Math.floor(Math.random() * 155)})`;
    
       change.forEach(colorChange => {
           colorChange.style.backgroundColor = randomColor;
            colorChange.classList.add("fadeInBack");
            setTimeout(function(){colorChange.classList.remove("fadeInBack");}, 100);
       });
    
      textColor.forEach(colorText=> {
         colorText.style.color=  randomColor
         colorText.classList.add("fadeIn");
         setTimeout(function(){colorText.classList.remove("fadeIn");}, 1000);
      })

}

export default random




























// function random() {
//     const elem = document.getElementsByTagName("p","button")
//     return elem.style.backgroundColor = `rgb(
//         ${Math.floor(Math.random() * 155)},
//         ${Math.floor(Math.random() * 155)},
//         ${Math.floor(Math.random() * 155)})`
// }

// export default random