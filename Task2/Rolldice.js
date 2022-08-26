document.getElementById('rollButton').addEventListener('Click', startGame);
function startGame(){
    var WinningCategories = [
        "Best Hackhathon solution",
        "Best Enterprise Solution",
        "Best Educational Solution",
        "Best Gaming Solution",
        "Best Health Solution",       
        "Best Campus Cup Solution",
    ]
    let Categories = WinningCategories[Math.floor(Math.random() * WinningCategories.length)]

    console.log(Categories)

}
