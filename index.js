document.addEventListener('keydown', (event) => {
    event.preventDefault();
    let key = event.key.toLowerCase()
    if ( event.ctrlKey && key === 'd' ) {
        document.body.style.background = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    }
});