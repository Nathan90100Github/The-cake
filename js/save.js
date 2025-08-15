let normalstats = {
    messages: {
        messages: 0,
        gain: 1,
        clicks: 0,
        upgs: [ 
            0,0,0,0,
            0,0,0,0,
            0,0
        ],
        buyables: [
            0,0
        ],
    },
    argument: {
        heat: 0,
        friendship: 100,
        friendshipgain: 0.1,
        friendshipcap: 100,
        arguments: 0,
        upgs: [ 
            0,0,0,0,
            0,0,0,0,
            0,0,0,0,
        ],
    },
    candles: {
        candles: 0,
        total: 0,
        formed: 0,
        upgs: [
            0,0
        ],
        buyables: [
            0
        ],
    }
}
function fixstats(current,parent,grandparent,greatparent) {
    console.log(current,parent,grandparent,greatparent)
    let stat_obj = player
    let fix_obj = normalstats
    if (grandparent != undefined) {
        if (grandparent != normalstats) {
            fix_obj = fix_obj[grandparent]
            stat_obj = stat_obj[grandparent]
        }
    }
    if (parent != undefined) {
        if (parent != normalstats) {
            fix_obj = fix_obj[parent]
            stat_obj = stat_obj[parent]
        }
    }
    if (fix_obj != undefined && fix_obj != current && typeof current != "object" &&greatparent == undefined) {
        fix_obj = fix_obj[current]
        stat_obj = stat_obj[current]
    }
    console.log(normalstats)
    current = fix_obj
    for (let i in fix_obj) {
        if (typeof current == "object") {
            fixstats(i, current,parent,grandparent)
        } else {
            Object.assign(normalstats,player)
        }
    }
}
window.load=()=>{
    const loaded = localStorage.getItem('the_cake_player_stats')
    if (loaded) {player = JSON.parse(localStorage.getItem("the_cake_player_stats"))}
    fixstats(normalstats,undefined,undefined,undefined)
    console.log("Data Loaded!")
    setTimeout(save, 15000)
}
function save() {
    localStorage.setItem("the_cake_player_stats",JSON.stringify(player))
    console.log("Data Saved!") 
    setTimeout(save, 15000)
}
window.onload = load()