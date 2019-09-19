console.clear();

const elInput = document.querySelector('#inputpassword');
const elDisplay = document.querySelector('#displaypassword');

Splitting({ whitespace: true });
elInput.addEventListener('inputpassword',()=>{
  elDisplay.innerHTML = Splitting.html({ content: elInput.value, whitespace: true });
});

window.setTimeout(()=>{ document.querySelector('#revealpassword').click() }, 99999);
