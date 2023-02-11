let angelBtn = document.getElementById('s')
let categorysLinks = document.querySelectorAll('.categorys ul li')
let listBtn = document.getElementById('list')
let colseWindow = document.getElementById('close')
let opendWindow = document.querySelector('.list-swipe')
let overlay = document.querySelector('.over-lay')


onload = function () {
    overlay.style.display = 'block'
    document.querySelector('.parent').style.display = 'block'
    setTimeout(() => {
        overlay.style.display = 'none'
        document.querySelector('.parent').style.display = 'none'
    }, 3000)
}

angelBtn.addEventListener('click', function () {
    let arr = Array.from(categorysLinks)
    let s = document.querySelector('.categorys ul').children

    arr.forEach((element) => {
        element.classList.toggle('yes')
        if (element.classList.contains('yes')) {
            element.style.display = 'none'
            angelBtn.style.transform = 'rotate(180deg)'
        }
        else {
            element.style.display = 'block'
            angelBtn.style.transform = 'rotate(-180deg)'
            angelBtn.style.transition = '0.3s'
        }
    })

})
function ColseWindow() {
    if (opendWindow.classList.contains('done')) {
        opendWindow.style.left = '0'
        opendWindow.style.transition = '0.3s'
        overlay.style.display = 'block'
    } else {
        overlay.style.display = 'none'
    }

}
// colse opend swape

colseWindow.onclick = function () {
    opendWindow.classList.remove('done')
    opendWindow.style.left = '-80%'
    overlay.style.display = 'none'
}

listBtn.onclick = function () {
    opendWindow.classList.toggle('done')
    ColseWindow()
}

if (window.scrollY === 100) {
    let btn = document.createElement('button')
    btn.innerHTML = 'S'
    body.appendChild(btn)
}