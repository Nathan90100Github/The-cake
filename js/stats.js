//    Main stats
window['player'] = {
    messages: {
        messages: OmegaNum(0),
        gain: OmegaNum(1),
        clicks: OmegaNum(0),
        upgs: [ 
            0,0,0,0,
            0,0,0,0,
        ],
        buyables: [
            0,0
        ],
    },
    argument: {
        heat: OmegaNum(0),
        friendship: OmegaNum(100),
        friendshipgain: OmegaNum(0.1),
        friendshipcap: OmegaNum(100),
        arguments: OmegaNum(0),
        upgs: [ 
            0,0,0,0,
            0,0,0,0,
            0,0,0,0,
        ],
    },
    candles: {
        candles: OmegaNum(0),
        total: OmegaNum(0),
        formed: OmegaNum(0),
        upgs: [
            0,0
        ],
        buyables: [
            0
        ],
    }
}
let upgscosts= {
    messages: [
        20,75,300,1000,
        1500,4500,25000,1e5
    ],
    argument: [
        1,2,3,5,
        12,20,50,1000,
        1750,3500,10000,30000,
    ],
    candles: [
        1,1
    ]
}
window['buyablecosts']={
    messages: [
        [10e6,10], [1e9,5]
    ],
    candles: [
        [1,2]
    ]
}
window['tabshown'] = "main"

window.incrementButton=()=>{
    player.messages.messages = OmegaNum.add(player.messages.messages, player.messages.gain)
    player.argument.friendship = OmegaNum.add(player.argument.friendship,player.argument.friendshipgain)
    player.messages.clicks = OmegaNum.add(player.messages.clicks,1)
    document.getElementById('messagecount').innerHTML = notation(player.messages.messages);
}
window.tab=(id)=>{
    tabshown=id
    if (tabshown=='main') {document.getElementById('main').style.display = "block"}
    else{document.getElementById('main').style.display = "none"}
    if (tabshown=='argument') {document.getElementById('argument').style.display = "block"}
    else{document.getElementById('argument').style.display = "none"}
    if (tabshown=='candles') {document.getElementById('candles').style.display = "block"}
    else{document.getElementById('candles').style.display = "none"}
    if (tabshown=='stats') {document.getElementById('stats').style.display = "block"}
    else{document.getElementById('stats').style.display = "none"}
}
window.upg=(number,type,currency)=>{
    console.log(player[type])
    if (OmegaNum.gte(player[type][currency],upgscosts[type][number]) && (player[type].upgs[number] == 0)) {
        player[type][currency] = OmegaNum.sub(player[type][currency],upgscosts[type][number])
        player[type].upgs[number] = 1
    } 
}
window.buyable=(number,type,currency)=>{
    let buyableamt = player[type].buyables[number]
    let buyablecost = OmegaNum.mul(buyablecosts[type][number][0],OmegaNum.pow(buyablecosts[type][number][1],buyableamt))
    if (OmegaNum.gte(player[type][currency],buyablecost)) {
        player[type][currency] = OmegaNum.sub(player[type][currency],buyablecost)
        player[type].buyables[number] = OmegaNum.add(player[type].buyables[number],1)
    } 
}