if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/Encrypt-Password/sw.js', { scope: '/Encrypt-Password/' })})}