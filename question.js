setTimeout(() => {
    document.getElementById('question').classList.add('gradient-half');
    setTimeout(() => { document.getElementById('question').classList.add('gradient'); }, 1000)
}, 3000)

setTimeout(() => {
    document.getElementById('question').innerHTML = '<div class="card"><img src="vite.svg" alt="Avatar" style="width:100vw;height:30vh"><div class="container"><h2><b>Enter Your Name</b></h2><input type="text" name="name" id="name" class="input" placeholder="Your name here"/><br><button onclick="startGame(`Player`,`blue`)">Select Blue</button><button onclick="startGame(`Player`,`red`)">Select Red</button></div></div>';
}, 6000)


setTimeout(() => {

})