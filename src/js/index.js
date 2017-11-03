((win) => {
    'use strict'

    win.onload = () => {
        let avatar = document.getElementById('avatar')

        avatar.addEventListener('mouseover', () => {
            avatar.dataset.currentPointerPosition = 'in'
            avatar.className = 'hidden'
        })

        avatar.addEventListener('mouseleave', () => {
            avatar.dataset.currentPointerPosition = 'out'
            avatar.className = 'hidden'
        })

        avatar.addEventListener('transitionend', () => {
            avatar.src = avatar.dataset.currentPointerPosition === 'in' ? './images/logo.svg' : './images/avatar.jpeg'
            avatar.className = ''
        })

    }
})(window)