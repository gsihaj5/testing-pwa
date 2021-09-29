
if('serviceWorker' in navigator){
    window.addEventListener('load', () =>{
        navigator.serviceWorker.register('./sw.js')
        .then(reg=>console.log("registered"))
        .catch(err => console.log("error :( -> ", err))
    })
}

let installPrompt;
window.addEventListener('beforeinstallprompt', (event)=> {
    event.preventDefault()
    installPrompt = event;
})
