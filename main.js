const input = document.querySelector('.id')
const pshka = document.querySelector('.pshka')

input.addEventListener('input', oninput)
function oninput(e) {
  const user = input.value
  pshka.textContent = user
}
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => htmlCreator(json))
function htmlCreator(data) {
  console.log(data)
  const html = data
    .map((post) => {
      return `<li class="customna"><p class="pshka2">${post.title}</p></li>`
    })
    .join('')
  const ulka = document.querySelector('.ulka')
  ulka.innerHTML = html
  console.log(html)
}
htmlCreator(14)
