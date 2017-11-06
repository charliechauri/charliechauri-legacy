((win) => {
    'use strict'

    win.onload = () => {
        let avatar = document.getElementById('avatar')
        avatar.dataset.currentPointerPosition = 'out'
        
        const toggleCurrentPosition = nodeItem => {
            nodeItem.dataset.currentPointerPosition = nodeItem.dataset.currentPointerPosition === 'in' ? 'out' : 'in'
            nodeItem.className = 'hidden'
        }

        avatar.addEventListener('mouseover', () => toggleCurrentPosition(avatar))

        avatar.addEventListener('mouseleave', () => toggleCurrentPosition(avatar))

        avatar.addEventListener('transitionend', () => {
            avatar.src = avatar.dataset.currentPointerPosition === 'in' ? './images/logo.svg' : './images/avatar.jpeg'
            avatar.className = ''
        })

    }
})(window)
