((win) => {
    'use strict'

    win.onload = () => {
        let avatar = document.getElementById('avatar')
        avatar.dataSet.currentPointerPosition = 'out'
        
        const toggleCurrentPosition = nodeItem => {
            nodeItem.dataSet.currentPointerPosition = nodeItem.dataSet.currentPointerPosition === 'in' ? 'out' : 'in'
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
