console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(res => res.json())
        .then((images) => {
            images.message.forEach((image) => {
                let img = document.createElement('img')
                img.src = image
                document.getElementById('dog-image-container').appendChild(img)
            })
        })
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
        .then(res => res.json())
        .then((breeds) => {
            // console.log(breeds)
            for (let key in breeds.message) {
                let list = document.createElement('li')
                list.textContent = breeds.message[key].length > 2 ? `${key} (${breeds.message[key]})` : key
                list.addEventListener('click', () => {
                    list.style.color = "#333399"
                })
                document.getElementById('dog-breeds').appendChild(list)
            }
            let listArray = Array.from(document.querySelectorAll('li'))
            document.getElementById('breed-dropdown').addEventListener('change', () => {
                let letter = document.getElementById('breed-dropdown').value
                listArray.forEach((li) => {
                    if (li.textContent.startsWith(letter)) {
                        li.style.display = ''
                    } else li.style.display = 'none'
                })
            })

        })
})
