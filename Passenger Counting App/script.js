const countEl = document.getElementById('count-el');
let count = 0;

function incrementCounter () {
  count = count + 1
  countEl.innerText = count
}
