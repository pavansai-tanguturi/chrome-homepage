let myEmojis =[
        "🐥",
        "💕",
        "👻",
        "🐥💕",
        "💕👻",
        "🐥👻",
        "👻🐥",
        "🐥💕👻",
        "👻💕🐥",
];

let urlAnimate = () =>{
    window.location.hash = myEmojis[Math.floor((Date.now()/100)% myEmojis.length)];
    setTimeout(urlAnimate,1000);
};
console.log(myEmojis);
console.log(Math.floor((Date.now()/100)% myEmojis.length));
console.log(setTimeout(urlAnimate,1000));
urlAnimate();
