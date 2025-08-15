var shift = false
window.tick=()=>{
    let messagegain = OmegaNum(1)
    let heatgain = OmegaNum.mul(OmegaNum.pow(OmegaNum.div(player.messages.messages,250000),0.4),OmegaNum.div(player.argument.friendship,100))
    let candlegain = 1
    if (OmegaNum.gte(player.candles.total,3) && OmegaNum.gte(player.argument.heat,50000)) {
        candlegain = OmegaNum.log10(OmegaNum.div(player.argument.heat,5000))
    }
    let autos=OmegaNum(0);
    let buyablecost={
        messages: [
            [10e6,10], [1e9,5]
        ],
        candles: [
            [1,2]
        ]
    }
    let candlemilestones = [
        1,3
    ]
    let upgboosts= [
    // Upgrade, currency boosted, boost amount
        [player.messages.upgs[0],"messagegain",2,"message"], // 0
        [player.messages.upgs[1],"messagegain",1,"message"], // 1
        [player.messages.upgs[2],"messagegain",1.75,"message"], // 2
        [player.messages.upgs[3],"messagegain",2,"message"], // 3
        [player.messages.upgs[4],"messagegain",2.5,"message"], // 4
        [player.messages.upgs[5],"messagegain",1,"message"], // 5
        [player.messages.upgs[6],"messagegain",3,"message"], // 6
        [player.messages.upgs[7],"none",1,"message"], // 7
        [player.argument.upgs[0],"messagegain",2,"heat"], // 8
        [player.argument.upgs[1],"messagegain",1,"heat"], // 9
        [player.argument.upgs[2],"messagegain",1,"heat"], // 10
        [player.argument.upgs[3],"none",1,"heat"], // 11
        [player.argument.upgs[4],"messagegain",1,"heat"], // 12
        [player.argument.upgs[5],"none",1,"heat"], // 13
        [player.argument.upgs[6],"heatgain",1,"heat"], // 14
        [player.argument.upgs[7],"none",1,"heat"], // 15
        [player.argument.upgs[8],"none",1,"heat"], // 16
        [player.argument.upgs[9],"messagegain",5,"heat"], // 17
        [player.argument.upgs[10],"none",1,"heat"], // 18
        [player.argument.upgs[11],"none",1,"heat"], // 19
        [player.candles.upgs[0],"messagegain",5,"candles"], // 20
        [player.candles.upgs[1],"heatgain",2.5,"candles"], // 21
        [player.messages.upgs[8],"none",1,"message"], // 22
    ]
    upgboosts[1][2] = OmegaNum.add(OmegaNum.log10(OmegaNum.add(player.messages.messages,1)),1)
    upgboosts[5][2] = OmegaNum.add(OmegaNum.log(OmegaNum.add(player.messages.clicks,1)),1)
    upgboosts[9][2] = OmegaNum.pow(OmegaNum.add(player.argument.heat,1),0.5)
    upgboosts[10][2] = OmegaNum.mul(player.argument.friendship,0.02)
    upgboosts[12][2] = OmegaNum.pow(OmegaNum.add(player.argument.argument,1),0.7)
    for (let i in upgboosts) {
        if (upgboosts[i][0] == 1) {
            if (upgboosts[i][1] == "messagegain") {
                messagegain = OmegaNum.mul(messagegain,upgboosts[i][2])
            }
            if (upgboosts[i][1] == "heatgain") {
                heatgain = OmegaNum.mul(heatgain,upgboosts[i][2])
            }
            if (upgboosts[i][3] == "message") {
                autos = OmegaNum.add(autos,0.5)
                upgboosts[22][2] = OmegaNum.mul(upgboosts[22][2],1.05)
                if (player.messages.upgs[8] == 1) {
                    messagegain = OmegaNum.mul(messagegain,1.05)
                }
            }
            if (upgboosts[i][3] == "heat") {
                if(player.argument.upgs[6] == 1) {
                    messagegain = OmegaNum.mul(messagegain,1.2)
                    heatgain = OmegaNum.mul(heatgain,1.2)
                }
                upgboosts[14][2] = OmegaNum.mul(upgboosts[14][2],1.2)
            }
        }
    }
    if (player.candles.upgs[0] == 1) {
        autos = OmegaNum.mul(autos,2)
        buyablecost.messages[0][1] = 9
        buyablecost.messages[1][1] = 4.5
    }
    buyablecosts = buyablecost
    for (let i in candlemilestones) {
        if (i>0) {
            i++
            document.getElementById("CM"+i).classList.add("hidden")
            i--
        }
    }
    for (let i in candlemilestones) {
        
    if (OmegaNum.gte(player.candles.total,candlemilestones[i])) {
        messagegain = OmegaNum.mul(messagegain,2)
        heatgain = OmegaNum.mul(heatgain,1.3)
        i++
        document.getElementById("CM"+i).classList.add("cmacquired")
        if ((i)<candlemilestones.length) {
            i++
            document.getElementById("CM"+i).classList.remove("hidden")
        }
    }
    }
    messagegain = OmegaNum.mul(messagegain,OmegaNum.pow(1.5,player.messages.buyables[0]))
    messagegain = OmegaNum.mul(messagegain,OmegaNum.pow(1.4,player.candles.buyables[0]))
    heatgain = OmegaNum.mul(heatgain,OmegaNum.pow(1.2,player.candles.buyables[0]))
    if (player.messages.upgs[4] == 0) {autos = 0}
    for (let i in player.messages.upgs) {
        if (player.messages.upgs[i] == 1) {
            i++
            document.getElementById('M'+i).innerHTML = "[BOUGHT]"
            document.getElementById('M'+i).classList.add("bought")
        } else {
            i++
            document.getElementById('M'+i).innerHTML = "[NOT BOUGHT]"
            document.getElementById('M'+i).classList.remove("bought")
        }
    }
    for (let i in player.argument.upgs) {
        if (player.argument.upgs[i] == 1) {
            i++
            document.getElementById('H'+i).innerHTML = "[BOUGHT]"
            document.getElementById('H'+i).classList.add("bought")
        } else {
            i++
            document.getElementById('H'+i).innerHTML = "[NOT BOUGHT]"
            document.getElementById('H'+i).classList.remove("bought")
        }
    }
    for (let i in player.candles.upgs) {
        if (player.candles.upgs[i] == 1) {
            i++
            document.getElementById('C'+i).innerHTML = "[BOUGHT]"
            document.getElementById('C'+i).classList.add("bought")
        } else {
            i++
            document.getElementById('C'+i).innerHTML = "[NOT BOUGHT]"
            document.getElementById('C'+i).classList.remove("bought")
        }
    }
    player.messages.gain = messagegain
    player.argument.gain = heatgain
    player.candles.gain = candlegain
    document.getElementById('RMU1').innerHTML = "Level "+notation(player.messages.buyables[0])
    document.getElementById('RMU1cost').innerHTML = notation(OmegaNum.mul(buyablecosts.messages[0][0],OmegaNum.pow(buyablecosts.messages[0][1],player.messages.buyables[0])))+" messages"
    document.getElementById('RMU2').innerHTML = "Level "+notation(player.messages.buyables[1])
    document.getElementById('RMU2cost').innerHTML = notation(OmegaNum.mul(buyablecosts.messages[1][0],OmegaNum.pow(buyablecosts.messages[1][1],player.messages.buyables[1])))+" messages"
    document.getElementById('RCU1').innerHTML = "Level "+notation(player.candles.buyables[0])
    document.getElementById('RCU1cost').innerHTML = notation(OmegaNum.mul(buyablecosts.candles[0][0],OmegaNum.pow(buyablecosts.candles[0][1],player.candles.buyables[0])))+" candles"
    if (shift) {
        document.getElementById('M2').innerHTML = "Currently: x"+notation(upgboosts[1][2])
        document.getElementById('M6').innerHTML = "Currently: x"+notation(upgboosts[5][2])
        document.getElementById('M9').innerHTML = "Currently: x"+notation(upgboosts[22][2])
        document.getElementById('H2').innerHTML = "Currently: x"+notation(upgboosts[9][2])
        document.getElementById('H3').innerHTML = "Currently: x"+notation(upgboosts[10][2])
        document.getElementById('H5').innerHTML = "Currently: x"+notation(upgboosts[12][2])
        document.getElementById('H7').innerHTML = "Currently: x"+notation(upgboosts[14][2])
        document.getElementById("RMU1").innerHTML = "Currently: x"+notation(OmegaNum.pow(1.5,player.messages.buyables[0]))
        document.getElementById("RCU1").innerHTML = "Currently: x"+notation(OmegaNum.pow(1.4,player.candles.buyables[0]))+", x"+OmegaNum.pow(1.2,player.candles.buyables[0])
    }
    if (OmegaNum.gte(player.candles.total,1)) {
        document.getElementById('bC1').classList.remove("hidden")
        document.getElementById('bC2').classList.remove("hidden")
    } else {
        document.getElementById('bC1').classList.add("hidden")
        document.getElementById('bC2').classList.add("hidden")
    }
    document.getElementById('clickcount').innerHTML = notation(player.messages.clicks)
    document.getElementById('argumentcount').innerHTML = notation(player.argument.argument)
    document.getElementById('candleformed').innerHTML = notation(player.candles.formed)
    if (player.messages.upgs[7]==1) {
        document.getElementById('argumenttab').style.display = "inline"
        document.getElementById('heatcountline').style.display = "block"
        document.getElementById('argumentcountline').style.display = "inline"
    }
    if (player.argument.upgs[8]==1) {document.getElementById('bMR1').style.display = "inline"} else {document.getElementById('bMR1').style.display = "none"}
    if (player.argument.upgs[10]==1) {document.getElementById('bMR2').style.display = "inline"} else {document.getElementById('bMR2').style.display = "none"}
    if (player.argument.upgs[11]==1) {
        document.getElementById('candlestab').style.display = "inline"
        document.getElementById('candlecountline').style.display = "block"
        document.getElementById('candleformedline').style.display = "inline"
    }
    let content="a message"
    if (OmegaNum.gt(player.messages.gain,1)) {
        content = notation(player.messages.gain)+" messages"
    }
    document.getElementById("active").innerHTML = content
    let friendshipgain = 0.1
    let friendship_cap = 100
    let friendshiploss = 50
    if (player.argument.upgs[7]==1) {friendshiploss = 7.5}
    else if (player.argument.upgs[3]==1) {friendshiploss = 20}
    if (player.argument.upgs[3]==1) {friendship_cap+=25}
    if (player.argument.upgs[7]==1) {friendship_cap+=35}
    friendship_cap = OmegaNum.add(friendship_cap,OmegaNum.mul(5,player.messages.buyables[1]))
    if (player.candles.upgs[1] == 1) {
        friendshipgain = OmegaNum.mul(friendshipgain,2)
        friendship_cap = OmegaNum.mul(friendship_cap,2)
        friendshiploss /= 2
    }
    player.argument.friendshipcap = friendship_cap
    player.argument.friendshipgain = friendshipgain
    player.argument.friendshiploss = friendshiploss
    document.getElementById('friendlost').innerHTML = notation(friendshiploss)
    player.argument.friendship = OmegaNum.add(player.argument.friendship,OmegaNum.mul(OmegaNum.mul(0.01,friendshipgain),autos))
    if (OmegaNum.gt(player.argument.friendship,friendship_cap)) {
        player.argument.friendship = OmegaNum(friendship_cap)
    }
    player.messages.messages = OmegaNum.add(player.messages.messages,OmegaNum.mul(OmegaNum.mul(autos,messagegain),0.05))
    player.messages.clicks = OmegaNum.add(player.messages.clicks,OmegaNum.mul(autos,0.05))
    document.getElementById('messagecount').innerHTML = notation(player.messages.messages);
    document.getElementById('passive').innerHTML = notation(OmegaNum.mul(messagegain,autos))
    document.getElementById('heatgain').innerHTML = notation(player.argument.gain)
    document.getElementById('candlegain').innerHTML = notation(candlegain)
    document.getElementById('heatcount').innerHTML = notation(player.argument.heat)
    document.getElementById('candlecount').innerHTML = notation(player.candles.candles)
    document.getElementById('friend').innerHTML = notation(player.argument.friendship)
    setTimeout(tick, 50)
}
window.onload = setTimeout(tick, 50)
window.onkeydown = function(e) {if (e.shiftKey) {
    shift = true
 }}
 window.onkeyup = function(e) {if (e.shiftKey==false) {
     shift = false
 }}
 window.onmousemove = function(e) {if (e.shiftKey==false) {
    shift = false
}}