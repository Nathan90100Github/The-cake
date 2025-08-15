window.argumentreset=()=>{
    if (OmegaNum.gt(player.messages.messages,250000)) {
        player.argument.heat = OmegaNum.add(player.argument.heat,player.argument.gain)
        player.argument.friendship = OmegaNum.sub(player.argument.friendship,player.argument.friendshiploss)
        player.messages.messages = OmegaNum(0)
        player.argument.argument = OmegaNum.add(player.argument.argument,1)
        if (player.argument.upgs[5] == 0) {
            for (let i in player.messages.upgs) {
                player.messages.upgs[i] = 0
                i++
                document.getElementById('M'+i).innerHTML = "[NOT BOUGHT]"
                document.getElementById('M'+i).classList.remove('bought')
            }
            player.messages.upgs[7] = 1
            if (player.candles.upgs[0] == 1) {
                player.messages.upgs[4] = 1
            }
        }
    }
}
window.candlereset=()=>{
    if (OmegaNum.gt(player.argument.heat,50000)) {
        player.candles.candles = OmegaNum.add(player.candles.candles,player.candles.candlegain) 
        player.candles.total = OmegaNum.add(player.candles.total,player.candles.candlegain) 
        player.messages.messages = OmegaNum(0)
        player.argument.heat = OmegaNum(0)
        player.argument.friendship = OmegaNum(100)
        player.candles.formed = OmegaNum.add(player.candles.formed,1)
        for (let i in player.messages.upgs) {
            player.messages.upgs[i] = 0
            i++
            document.getElementById('M'+i).innerHTML = "[NOT BOUGHT]"
            document.getElementById('M'+i).classList.remove('bought')
        }
        player.messages.upgs[7] = 1
        if (player.candles.upgs[0] == 1) {
            player.messages.upgs[4] = 1
        }
        for (let i in player.argument.upgs) {
            player.argument.upgs[i] = 0
            i++
            document.getElementById('H'+i).innerHTML = "[NOT BOUGHT]"
            document.getElementById('H'+i).classList.remove('bought')
        }
        player.messages.upgs[11] = 1
        if (player.candles.upgs[1] == 1) {
            player.argument.upgs[6] = 1
        }
        for (let i in player.messages.buyables) {
            player.messages.buyables[i] = 0
        }
    }
}