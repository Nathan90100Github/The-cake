//    Main stats
var messages = 0
var messagegain = 1
var clicks = 0
var argumentUnlocked = 0
var friendship = 1
var heat = 0
var friendshiplost = 0.5
var heatgain = 0
var dough = 0
var doughgain = 0
//    Upgrade stats (messages)
var upg111 = 0
var upg112 = 0
var upg113 = 0
var upg121 = 0
var upg122 = 0
var upg123 = 0
//    Upgrade stats (heat)
var upg211 = 0
var upg212 = 0
var upg213 = 0
var upg214 = 0
var upg221 = 0
var upg222 = 0
var upg223 = 0
var upg224 = 0
var upg231 = 0
var upg232 = 0
var upg233 = 0
var upg234 = 0
var upg241 = 0
var upg242 = 0
var upg243 = 0
var upg244 = 0
//    Candles
var candle1 = 0
var candle2 = 0
var candle3 = 0
var candle4 = 0
var candle5 = 0
var candle6 = 0
var candle7 = 0
var candle8 = 0
var candle9 = 0
var candle10 = 0
var candle11 = 0
var candle12 = 0
//    Upgrade stats (candles)
var upg311 = 0
var upg312 = 0
var upg313 = 0
var upg314 = 0
var upg315 = 0
var upg316 = 0
var upg321 = 0
var upg322 = 0
var upg323 = 0
var upg324 = 0
var upg325 = 0
var upg326 = 0
//    Upgrade stats (dough)
var upg411 = 0
var upg412 = 0
var upg413 = 0
var upg421 = 0
var upg422 = 0
var upg423 = 0
var upg431 = 0
var upg432 = 0
var upg433 = 0
//    Upgrade stats (icing)
var upg511 = 0
var upg512 = 0
var upg513 = 0
var upg521 = 0
var upg522 = 0
var upg523 = 0
//    Upgrade stats (total)
var upgs1 = 0
var upgs2 = 0
var upgs3 = 0


function incrementButton() {
    heatgain = Math.pow(1.225,Math.log10(messages)+1)*friendship
    doughgain = ((Math.log(messages)-24)*(Math.log(heat)-12))
    icinggain = Math.log10(dough)
    messagegain=1;
    upgs1=0;
    upgs2=0;
    upgs3=0;
    if (upg214 == 1) {
        ++upgs2
    }
    if (upg224 == 1) {
        ++upgs2
    }
    if (upg234 == 1) {
        ++upgs2
    }
    if (upg233 == 1) {
        ++upgs2
    }
    if (upg111 == 1) {
        messagegain += 2
        ++upgs1
        document.getElementById('upg111').style.backgroundColor = 106100
    }
    if (upg122 == 1) {
        ++upgs1
        messagegain += (upgs1*3)
        document.getElementById('upg122').style.backgroundColor = 106100
    }
    if (upg112 == 1) {
        messagegain *= (Math.round(((Math.log10(messages+1))*100))/100+1)
        ++upgs1
        document.getElementById('upg112').style.backgroundColor = 106100
    }
    if (upg113 == 1) {
        messagegain *= (Math.round(((Math.log10(clicks+1))*110))/100+1)
        ++upgs1
        document.getElementById('upg113').style.backgroundColor = 106100
    }
    if (upg223 == 1) {
        heatgain *= (Math.round(((Math.log10(clicks+1))*80))/100+1)
        ++upgs2
    }
    if (upg213 == 1) {
        messagegain *= (Math.round(((Math.log10(clicks+1))*110))/100+1)
        ++upgs2
    }
    if (upg123 == 1) {
        messagegain *= 2
        ++upgs1
        document.getElementById('upg123').style.backgroundColor = 106100
    }
    if (upg211 == 1) {
        messagegain *= (Math.pow(heat, 0.9))
        ++upgs2
    }
    if (upg212 == 1) {
        ++upgs2
        messagegain *= (Math.pow(friendship+1, 1.2))
    }
    if (upg221 == 1) {
        heatgain *= 1.5
        ++upgs2
    }
    if (upg231 == 1) {
        messagegain *= 4
        ++upgs2
    }
    if (upg232 == 1) {
        ++upgs2
        heatgain *= (Math.pow(friendship+1, 1.1))
    }
    if (upg241 == 1) {
        messagegain *= 5
        heatgain *= 1.75
        ++upgs2
    }
    if (upg242 == 1) {
        ++upgs2
        heatgain *= (Math.pow(friendship+1, 1.1))
        messagegain *= (Math.pow(friendship+1, 1.2))
    }
    if (upg243 == 1) {
        messagegain *= (Math.round(((Math.log10(clicks+1))*110))/100+1)
        messagegain *= (Math.round(((Math.log10(clicks+1))*110))/100+1)
        messagegain *= (Math.round(((Math.log10(clicks+1))*110))/100+1)
        heatgain *= (Math.round(((Math.log10(clicks+1))*80))/100+1)
        ++upgs2
    }
    if (upg244 == 1) {
        heatgain *= 1.5
        ++upgs2
    }
    if (candle1 == 1) {
        messagegain *= 3
        heatgain *= 2
    }
    if (candle2 == 1) {
        messagegain *= 3
        heatgain *= 2
    }
    if (candle3 == 1) {
        messagegain *= 3
        heatgain *= 2
    }
    if (candle4 == 1) {
        messagegain *= 3
        heatgain *= 2
    }
    if (candle5 == 1) {
        messagegain *= 3
        heatgain *= 2
    }
    if (candle6 == 1) {
        messagegain *= 3
        heatgain *= 2
    }
    if (candle7 == 1) {
        messagegain *= 3
        heatgain *= 2
    }
    if (candle8 == 1) {
        messagegain *= 3
        heatgain *= 2
    }
    if (candle9 == 1) {
        messagegain *= 3
        heatgain *= 2
    }
    if (candle10 == 1) {
        messagegain *= 3
        heatgain *= 2
    }
    if (candle11 == 1) {
        messagegain *= 3
        heatgain *= 2
    }
    if (candle12 == 1) {
        messagegain *= 3
        heatgain *= 2
    }
    if (upg311 == 1) {
        ++upgs3
        messagegain*=2
    }
    if (upg312 == 1) {
        ++upgs3
        heatgain*=1.75
    }
    if (upg313 == 1) {
        ++upgs3
        messagegain*=3
        heatgain*=2
    }
    if (upg314 == 1) {
        ++upgs3
        heatgain*=1.5
    }
    if (upg315 == 1) {
        ++upgs3
        heatgain*=3
    }
    if (upg316 == 1) {
        ++upgs3
        messagegain*=5
    }
    if (upg321 == 1) {
        ++upgs3
        messagegain*=4
    }
    if (upg322 == 1) {
        ++upgs3
        heatgain*=2
    }
    if (upg324 == 1) {
        ++upgs3
        messagegain*=3
    }
    if (upg325 == 1) {
        ++upgs3
        messagegain*=2
    }
    if (upg411 == 1) {
        messagegain *= 2
    }
    if (upg412 == 1) {
        heatgain *= 2
    }
    if (upg413 == 1) {
        doughgain *= 2
    }
    if (upg421 == 1) {
        messagegain *= Math.log10(heat)
    }
    if (upg422 == 1) {
        heatgain *= Math.log10(dough)
    }
    if (upg423 == 1) {
        doughgain *= Math.log10(messages)
    }
    if (upg431 == 1) {
        messagegain *= (Math.round(((Math.log10(clicks+1))*110))/100+1)
    }
    if (upg432 == 1) {
        messagegain *= (Math.round(((Math.log10(clicks+1))*110))/100+1)
        heatgain *= (Math.round(((Math.log10(clicks+1))*110))/100+1)
    }
    if (upg433 == 1) {
        messagegain *= (Math.round(((Math.log10(clicks+1))*110))/100+1)
        heatgain *= (Math.round(((Math.log10(clicks+1))*110))/100+1)
        doughgain *= (Math.round(((Math.log10(clicks+1))*110))/100+1)
    }
    if (upg511 == 1) {
        messagegain *= 10
    }
    if (upg512 == 1) {
        heatgain *= 5
    }
    if (upg513 == 1) {
        doughgain *= 3
    }
    if (upg521 == 1) {
        icinggain *= 2
    }
    if (upg522 == 1) {
        messagegain *= 10
        heatgain *= 5
        doughgain *= 3
        icinggain *= 2
    }
    if (upg523 == 1) {
        icinggain *= 2
    }
    

    if (upg326 == 1) {
        ++upgs3
        dough += doughgain
        document.getElementById('doughgain').innerHTML = Math.floor(doughgain)
        document.getElementById('dough').innerHTML = Math.floor(dough)
    }

    if (upg121 == 1) {
        ++upgs1
        messagegain *= Math.pow(1.2,upgs1)
        document.getElementById('upg121').style.backgroundColor = 106100
    }
    if (upg222 == 1) {
        ++upgs2
        heatgain *= Math.pow(1.1,upgs2)
    }
    if (upg323 == 1) {
        ++upgs3
        document.getElementById('argument').style.display = "none"
        friendship = 1-friendshiplost
        heat += heatgain 
        document.getElementById('heat').innerHTML = Math.floor(heat)
        clicks += 9
    }
    messages += messagegain
    
    ++clicks
    if (messages >= 75000 && upg323 == 0) {
        argumentUnlocked = 1
        document.getElementById('argument').style.display = "inline"
    }
    if (friendship < 1) {
        friendship+=0.001
        document.getElementById('friendship').innerHTML = friendship
    }
    document.getElementById('heatgain').innerHTML = Math.floor(heatgain)
    document.getElementById('messagecount').innerHTML = Math.round(messages);
    document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
}
    function upgrade111() {
        if (messages >= 20) {
            if (upg111 == 0) {
                messages -= 20
                ++upg111
                messagegain += 2
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg112').style.display = "inline"
                document.getElementById('upg111').style.backgroundColor = 106100
            }
        }
    }
    function upgrade112() {
        if (messages >= 150) {
            if (upg112 ==0) {
                messages -= 150
                ++upg112
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg113').style.display = "inline"
               document.getElementById('upg112').style.backgroundColor = 106100
            }
        }
    }
    function upgrade113() {
        if (messages >= 1000) {
            if (upg113 ==0) {
                messages -= 1000
                ++upg113
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg121').style.display = "inline"
               document.getElementById('upg113').style.backgroundColor = 106100
            }
        }
    }
    function upgrade121() {
        if (messages >= 3000) {
            if (upg121 ==0) {
                messages -= 3000
                ++upg121
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg122').style.display = "inline"
               document.getElementById('upg121').style.backgroundColor = 106100
            }
        }
    }
    function upgrade122() {
        if (messages >= 10000) {
            if (upg122 ==0) {
                messages -= 10000
                ++upg122
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg123').style.display = "inline"
               document.getElementById('upg122').style.backgroundColor = 106100
            }
        }
    }
    function upgrade123() {
        if (messages >= 50000) {
            if (upg123 ==0) {
                messages -= 50000
                ++upg123
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
               document.getElementById('upg123').style.backgroundColor = 106100
            }
        }
    }
    function argument() {
        if (messages >= 100000) {
            heat += heatgain
            friendship -= friendshiplost
            if (friendship<0){
                friendship = 0
            }
            if (upg233 == 1) {
                clicks += 250
            }
            messages =0
            upg111 = 0
            upg112 = 0
            upg113 = 0
            upg121 = 0
            upg122 = 0
            upg123 = 0
            messagegain = 0
            document.getElementById('heatgain').innerHTML = Math.floor(heatgain)
            document.getElementById('messagecount').innerHTML = Math.round(messages);
            document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
            document.getElementById('argument').style.display = "none"
            document.getElementById('upg211').style.display = "inline-block"
            let showheat = document.getElementById("hidebeforeargument")
            let hidden = showheat.getAttribute("hidden")
            if (hidden) {
                showheat.removeAttribute("hidden")
            }
            document.getElementById('upg111').style.backgroundColor = 610000
            document.getElementById('upg112').style.backgroundColor = 610000
            document.getElementById('upg113').style.backgroundColor = 610000
            document.getElementById('upg121').style.backgroundColor = 610000
            document.getElementById('upg122').style.backgroundColor = 610000
            document.getElementById('upg123').style.backgroundColor = 610000
            document.getElementById('heat').innerHTML = Math.floor(heat)
            document.getElementById('friendship').innerHTML = friendship
            document.getElementById('friendlost').innerHTML = friendshiplost
            heatgain = Math.pow(1.225,Math.log10(messages)+1)*friendship
            document.getElementById('heatgain').innerHTML = Math.round(heatgain)
        }
    }
    function upgrade211() {
        if (heat >= 1) {
            if (upg211 ==0) {
                heat -= 1
                ++upg211
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg211').style.backgroundColor = 996009
                document.getElementById('upg212').style.display = "inline"
                document.getElementById('heat').innerHTML = Math.floor(heat)
            }
        }
    }
    function upgrade212() {
        if (heat >= 3) {
            if (upg212 ==0) {
                heat -= 3
                ++upg212
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg212').style.backgroundColor = 996009
                document.getElementById('upg213').style.display = "inline"
                document.getElementById('heat').innerHTML = Math.floor(heat)
            }
        }
    }
    function upgrade213() {
        if (heat >= 5) {
            if (upg213 ==0) {
                heat -= 5
                ++upg213
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg213').style.backgroundColor = 996009
                document.getElementById('upg214').style.display = "inline"
                document.getElementById('heat').innerHTML = Math.floor(heat)
            }
        }
    }
    function upgrade214() {
        if (heat >= 7) {
            if (upg214 ==0) {
                heat -= 7
                ++upg214
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg214').style.backgroundColor = 996009
                document.getElementById('upg221').style.display ="inline"
                document.getElementById('heat').innerHTML = Math.floor(heat)
                friendshiplost = 0.2
                document.getElementById('friendlost').innerHTML = friendshiplost
            }
        }
    }
    function upgrade221() {
        if (heat >= 10) {
            if (upg221 ==0) {
                heat -= 10
                ++upg221
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg221').style.backgroundColor = 996009
                document.getElementById('upg222').style.display ="inline"
                document.getElementById('heat').innerHTML = Math.floor(heat)
            }
        }
    }
    function upgrade222() {
        if (heat >= 15) {
            if (upg222==0) {
                heat -= 15
                ++upg222
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg222').style.backgroundColor = 996009
                document.getElementById('upg223').style.display ="inline"
                document.getElementById('heat').innerHTML = Math.floor(heat)
            }
        }
    }
    function upgrade223() {
        if (heat >= 25) {
            if (upg223==0) {
                heat -= 25
                ++upg223
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg223').style.backgroundColor = 996009
                document.getElementById('upg224').style.display ="inline"
                document.getElementById('heat').innerHTML = Math.floor(heat)
            }
        }
    }
    function upgrade224() {
        if (heat >= 40) {
            if (upg224==0 && upg214==1) {
                heat -= 40
                ++upg224
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg224').style.backgroundColor = 996009
                document.getElementById('upg231').style.display ="inline"
                document.getElementById('heat').innerHTML = Math.floor(heat)
                friendshiplost = 0.1
                document.getElementById('friendlost').innerHTML = friendshiplost
            }
        }
    }
    function upgrade231() {
        if (heat >= 150) {
            if (upg231==0) {
                heat -= 150
                ++upg231
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg231').style.backgroundColor = 996009
                document.getElementById('upg232').style.display ="inline"
                document.getElementById('heat').innerHTML = Math.floor(heat)
                document.getElementById('friendlost').innerHTML = friendshiplost
            }
        }
    }
    function upgrade232() {
        if (heat >= 150) {
            if (upg232==0) {
                heat -= 200
                ++upg232
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg232').style.backgroundColor = 996009
                document.getElementById('upg233').style.display ="inline"
                document.getElementById('heat').innerHTML = Math.floor(heat)
                document.getElementById('friendlost').innerHTML = friendshiplost
            }
        }
    }
    function upgrade233() {
        if (heat >= 350) {
            if (upg233==0) {
                heat -= 350
                ++upg233
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg233').style.backgroundColor = 996009
                document.getElementById('upg234').style.display ="inline"
                document.getElementById('heat').innerHTML = Math.floor(heat)
                document.getElementById('friendlost').innerHTML = friendshiplost
            }
        }
    }
    function upgrade234() {
        if (heat >= 420) {
            if (upg234==0 && upg224==1) {
                heat -= 420
                ++upg234
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg234').style.backgroundColor = 996009
                document.getElementById('upg241').style.display ="inline"
                document.getElementById('heat').innerHTML = Math.floor(heat)
                friendshiplost = 0.05
                document.getElementById('friendlost').innerHTML = friendshiplost
            }
        }
    }
    function upgrade241() {
        if (heat >= 700) {
            if (upg241==0) {
                heat -= 70
                ++upg241
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg241').style.backgroundColor = 996009
                document.getElementById('upg242').style.display ="inline"
                document.getElementById('heat').innerHTML = Math.floor(heat)
                document.getElementById('friendlost').innerHTML = friendshiplost
            }
        }
    }
    function upgrade242() {
        if (heat >= 1500) {
            if (upg242==0) {
                heat -= 1500
                ++upg242
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg242').style.backgroundColor = 996009
                document.getElementById('upg243').style.display ="inline"
                document.getElementById('heat').innerHTML = Math.floor(heat)
                document.getElementById('friendlost').innerHTML = friendshiplost
            }
        }
    }
    function upgrade243() {
        if (heat >= 3500) {
            if (upg243==0) {
                heat -= 3500
                ++upg243
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg243').style.backgroundColor = 996009
                document.getElementById('upg244').style.display ="inline"
                document.getElementById('heat').innerHTML = Math.floor(heat)
                document.getElementById('friendlost').innerHTML = friendshiplost
            }
        }
    }
    function upgrade244() {
        if (heat >= 10000) {
            if (upg244==0) {
                heat -= 10000
                ++upg244
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg244').style.backgroundColor = 996009
                document.getElementById('candle1').style.display = "inline"
                document.getElementById('heat').innerHTML = Math.floor(heat)
                document.getElementById('friendlost').innerHTML = friendshiplost
            }
        }
    }
    function AllHeatUpgradesSC() {
        messages = 0
        heat = 1822
        friendship = 0.848
        friendshiplost = 0.05
        clicks = 8667
        upg111 = 0
        upg112 = 0
        upg113 = 0
        upg121 = 0
        upg122 = 0
        upg123 = 0
        upg211 = 1
        upg212 = 1
        upg213 = 1
        upg214 = 1
        upg221 = 1
        upg222 = 1
        upg223 = 1
        upg224 = 1
        upg231 = 1
        upg232 = 1
        upg233 = 1
        upg234 = 1
        upg241 = 1
        upg242 = 1
        upg243 = 1
        upg244 = 1
        document.getElementById('candle1').style.display = "inline"
        document.getElementById('upg111').style.display = "inline"
        document.getElementById('upg112').style.display = "inline"
        document.getElementById('upg113').style.display = "inline"
        document.getElementById('upg121').style.display = "inline"
        document.getElementById('upg122').style.display = "inline"
        document.getElementById('upg123').style.display = "inline"
        let showheat = document.getElementById("hidebeforeargument")
            let hidden = showheat.getAttribute("hidden")
            if (hidden) {
                showheat.removeAttribute("hidden")
            }
        document.getElementById('upg211').style.backgroundColor = 996009
        document.getElementById('upg211').style.display = "inline"
        document.getElementById('upg212').style.backgroundColor = 996009
        document.getElementById('upg212').style.display = "inline"
        document.getElementById('upg213').style.backgroundColor = 996009
        document.getElementById('upg213').style.display = "inline"
        document.getElementById('upg214').style.backgroundColor = 996009
        document.getElementById('upg214').style.display = "inline"
        document.getElementById('upg221').style.backgroundColor = 996009
        document.getElementById('upg221').style.display = "inline"
        document.getElementById('upg222').style.backgroundColor = 996009
        document.getElementById('upg222').style.display = "inline"
        document.getElementById('upg223').style.backgroundColor = 996009
        document.getElementById('upg223').style.display = "inline"
        document.getElementById('upg224').style.backgroundColor = 996009
        document.getElementById('upg224').style.display = "inline"
        document.getElementById('upg231').style.backgroundColor = 996009
        document.getElementById('upg231').style.display = "inline"
        document.getElementById('upg232').style.backgroundColor = 996009
        document.getElementById('upg232').style.display = "inline"
        document.getElementById('upg233').style.backgroundColor = 996009
        document.getElementById('upg233').style.display = "inline"
        document.getElementById('upg234').style.backgroundColor = 996009
        document.getElementById('upg234').style.display = "inline"
        document.getElementById('upg241').style.backgroundColor = 996009
        document.getElementById('upg241').style.display = "inline"
        document.getElementById('upg242').style.backgroundColor = 996009
        document.getElementById('upg242').style.display = "inline"
        document.getElementById('upg243').style.backgroundColor = 996009
        document.getElementById('upg243').style.display = "inline"
        document.getElementById('upg244').style.backgroundColor = 996009
        document.getElementById('upg244').style.display = "inline"
    }
    function candle1buy() {
        if (messages >= 1000000000000000 && heat >= 100000) {
            if (candle1==0) {
                heat = 0
                messages = 0
                friendship = 1
                friendshiplost = 0.5
                upg111 = 0
                upg112 = 0
                upg113 = 0
                upg121 = 0
                upg122 = 0
                upg123 = 0
                upg211 = 0
                upg212 = 0
                upg213 = 0
                upg214 = 0
                upg221 = 0
                upg222 = 0
                upg223 = 0
                upg224 = 0
                upg231 = 0
                upg232 = 0
                upg233 = 0
                upg234 = 0
                upg241 = 0
                upg242 = 0
                upg243 = 0
                upg244 = 0
                ++candle1
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg311').style.display = "inline"
                document.getElementById('candle2').style.display = "inline"
                document.getElementById('upg111').style.backgroundColor = 610000
                document.getElementById('upg112').style.backgroundColor = 610000
                document.getElementById('upg113').style.backgroundColor = 610000
                document.getElementById('upg121').style.backgroundColor = 610000
                document.getElementById('upg122').style.backgroundColor = 610000
                document.getElementById('upg123').style.backgroundColor = 610000
                document.getElementById('upg211').style.backgroundColor = 524635
                document.getElementById('upg212').style.backgroundColor = 524635
                document.getElementById('upg213').style.backgroundColor = 524635
                document.getElementById('upg214').style.backgroundColor = 524635
                document.getElementById('upg221').style.backgroundColor = 524635
                document.getElementById('upg222').style.backgroundColor = 524635
                document.getElementById('upg223').style.backgroundColor = 524635
                document.getElementById('upg224').style.backgroundColor = 524635
                document.getElementById('upg231').style.backgroundColor = 524635
                document.getElementById('upg232').style.backgroundColor = 524635
                document.getElementById('upg233').style.backgroundColor = 524635
                document.getElementById('upg234').style.backgroundColor = 524635
                document.getElementById('upg241').style.backgroundColor = 524635
                document.getElementById('upg242').style.backgroundColor = 524635
                document.getElementById('upg243').style.backgroundColor = 524635
                document.getElementById('upg244').style.backgroundColor = 524635
                document.getElementById('candle1').style.backgroundColor = 57029
                document.getElementById('heat').innerHTML = Math.floor(heat)
                document.getElementById('heatgain').innerHTML = 0
                document.getElementById('friendship').innerHTML = friendship
                document.getElementById('friendlost').innerHTML = friendshiplost
            }
        }
    }
    function upgrade311() {
        if (messages >= 1e12) {
            if (upg311 ==0) {
                messages -= 1e12
                ++upg311
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg311').style.backgroundColor = 57029
            }
        }
    }
    function candle2buy() {
        if (messages >= 25000000000000000 && heat >= 200000) {
            if (candle2==0) {
                heat = 0
                messages = 0
                friendship = 1
                friendshiplost = 0.5
                upg111 = 0
                upg112 = 0
                upg113 = 0
                upg121 = 0
                upg122 = 0
                upg123 = 0
                upg211 = 0
                upg212 = 0
                upg213 = 0
                upg214 = 0
                upg221 = 0
                upg222 = 0
                upg223 = 0
                upg224 = 0
                upg231 = 0
                upg232 = 0
                upg233 = 0
                upg234 = 0
                upg241 = 0
                upg242 = 0
                upg243 = 0
                upg244 = 0
                ++candle2
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg312').style.display = "inline"
                document.getElementById('candle3').style.display = "inline"
                document.getElementById('upg111').style.backgroundColor = 610000
                document.getElementById('upg112').style.backgroundColor = 610000
                document.getElementById('upg113').style.backgroundColor = 610000
                document.getElementById('upg121').style.backgroundColor = 610000
                document.getElementById('upg122').style.backgroundColor = 610000
                document.getElementById('upg123').style.backgroundColor = 610000
                document.getElementById('upg211').style.backgroundColor = 524635
                document.getElementById('upg212').style.backgroundColor = 524635
                document.getElementById('upg213').style.backgroundColor = 524635
                document.getElementById('upg214').style.backgroundColor = 524635
                document.getElementById('upg221').style.backgroundColor = 524635
                document.getElementById('upg222').style.backgroundColor = 524635
                document.getElementById('upg223').style.backgroundColor = 524635
                document.getElementById('upg224').style.backgroundColor = 524635
                document.getElementById('upg231').style.backgroundColor = 524635
                document.getElementById('upg232').style.backgroundColor = 524635
                document.getElementById('upg233').style.backgroundColor = 524635
                document.getElementById('upg234').style.backgroundColor = 524635
                document.getElementById('upg241').style.backgroundColor = 524635
                document.getElementById('upg242').style.backgroundColor = 524635
                document.getElementById('upg243').style.backgroundColor = 524635
                document.getElementById('upg244').style.backgroundColor = 524635
                document.getElementById('candle2').style.backgroundColor = 24397
                document.getElementById('heat').innerHTML = Math.floor(heat)
                document.getElementById('heatgain').innerHTML = 0
                document.getElementById('friendship').innerHTML = friendship
                document.getElementById('friendlost').innerHTML = friendshiplost
            }
        }
    }
    function upgrade312() {
        if (messages >= 1e13) {
            if (upg312 ==0) {
                messages -= 1e13
                ++upg312
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg312').style.backgroundColor = 24397
            }
        }
    }
    function candle3buy() {
        if (messages >= 100000000000000000 && heat >= 500000) {
            if (candle3==0) {
                heat = 0
                messages = 0
                friendship = 1
                friendshiplost = 0.5
                upg111 = 0
                upg112 = 0
                upg113 = 0
                upg121 = 0
                upg122 = 0
                upg123 = 0
                upg211 = 0
                upg212 = 0
                upg213 = 0
                upg214 = 0
                upg221 = 0
                upg222 = 0
                upg223 = 0
                upg224 = 0
                upg231 = 0
                upg232 = 0
                upg233 = 0
                upg234 = 0
                upg241 = 0
                upg242 = 0
                upg243 = 0
                upg244 = 0
                ++candle3
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg313').style.display = "inline"
                document.getElementById('candle4').style.display = "inline"
                document.getElementById('upg111').style.backgroundColor = 610000
                document.getElementById('upg112').style.backgroundColor = 610000
                document.getElementById('upg113').style.backgroundColor = 610000
                document.getElementById('upg121').style.backgroundColor = 610000
                document.getElementById('upg122').style.backgroundColor = 610000
                document.getElementById('upg123').style.backgroundColor = 610000
                document.getElementById('upg211').style.backgroundColor = 524635
                document.getElementById('upg212').style.backgroundColor = 524635
                document.getElementById('upg213').style.backgroundColor = 524635
                document.getElementById('upg214').style.backgroundColor = 524635
                document.getElementById('upg221').style.backgroundColor = 524635
                document.getElementById('upg222').style.backgroundColor = 524635
                document.getElementById('upg223').style.backgroundColor = 524635
                document.getElementById('upg224').style.backgroundColor = 524635
                document.getElementById('upg231').style.backgroundColor = 524635
                document.getElementById('upg232').style.backgroundColor = 524635
                document.getElementById('upg233').style.backgroundColor = 524635
                document.getElementById('upg234').style.backgroundColor = 524635
                document.getElementById('upg241').style.backgroundColor = 524635
                document.getElementById('upg242').style.backgroundColor = 524635
                document.getElementById('upg243').style.backgroundColor = 524635
                document.getElementById('upg244').style.backgroundColor = 524635
                document.getElementById('candle3').style.backgroundColor = 424242
                document.getElementById('heat').innerHTML = Math.floor(heat)
                document.getElementById('heatgain').innerHTML = 0
                document.getElementById('friendship').innerHTML = friendship
                document.getElementById('friendlost').innerHTML = friendshiplost
            }
        }
    }
    function upgrade313() {
        if (messages >= 2.5e13) {
            if (upg313 ==0) {
                messages -= 2.5e13
                ++upg313
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg313').style.backgroundColor = 424242
            }
        }
    }
    function ThreeCandlesSC() {
        messages = 4914443437591308
        heat = 50348
        friendship = 1
        friendshiplost = 0.05
        clicks = 22743
        upg111 = 1
        upg112 = 1
        upg113 = 1
        upg121 = 1
        upg122 = 1
        upg123 = 1
        upg211 = 1
        upg212 = 1
        upg213 = 1
        upg214 = 1
        upg221 = 1
        upg222 = 1
        upg223 = 1
        upg224 = 1
        upg231 = 1
        upg232 = 1
        upg233 = 1
        upg234 = 1
        upg241 = 1
        upg242 = 1
        upg243 = 1
        upg244 = 1
        document.getElementById('candle1').style.display = "inline"
        document.getElementById('upg111').style.display = "inline"
        document.getElementById('upg112').style.display = "inline"
        document.getElementById('upg113').style.display = "inline"
        document.getElementById('upg121').style.display = "inline"
        document.getElementById('upg122').style.display = "inline"
        document.getElementById('upg123').style.display = "inline"
        let showheat = document.getElementById("hidebeforeargument")
            let hidden = showheat.getAttribute("hidden")
            if (hidden) {
                showheat.removeAttribute("hidden")
            }
        document.getElementById('upg211').style.backgroundColor = 996009
        document.getElementById('upg211').style.display = "inline"
        document.getElementById('upg212').style.backgroundColor = 996009
        document.getElementById('upg212').style.display = "inline"
        document.getElementById('upg213').style.backgroundColor = 996009
        document.getElementById('upg213').style.display = "inline"
        document.getElementById('upg214').style.backgroundColor = 996009
        document.getElementById('upg214').style.display = "inline"
        document.getElementById('upg221').style.backgroundColor = 996009
        document.getElementById('upg221').style.display = "inline"
        document.getElementById('upg222').style.backgroundColor = 996009
        document.getElementById('upg222').style.display = "inline"
        document.getElementById('upg223').style.backgroundColor = 996009
        document.getElementById('upg223').style.display = "inline"
        document.getElementById('upg224').style.backgroundColor = 996009
        document.getElementById('upg224').style.display = "inline"
        document.getElementById('upg231').style.backgroundColor = 996009
        document.getElementById('upg231').style.display = "inline"
        document.getElementById('upg232').style.backgroundColor = 996009
        document.getElementById('upg232').style.display = "inline"
        document.getElementById('upg233').style.backgroundColor = 996009
        document.getElementById('upg233').style.display = "inline"
        document.getElementById('upg234').style.backgroundColor = 996009
        document.getElementById('upg234').style.display = "inline"
        document.getElementById('upg241').style.backgroundColor = 996009
        document.getElementById('upg241').style.display = "inline"
        document.getElementById('upg242').style.backgroundColor = 996009
        document.getElementById('upg242').style.display = "inline"
        document.getElementById('upg243').style.backgroundColor = 996009
        document.getElementById('upg243').style.display = "inline"
        document.getElementById('upg244').style.backgroundColor = 996009
        document.getElementById('upg244').style.display = "inline"
        candle1 = 1
        candle2 = 1
        candle3 = 1
        upg311 = 1
        upg312 = 1
        upg313 = 1
        document.getElementById('candle1').style.display = "inline"
        document.getElementById('candle1').style.backgroundColor = 57029
        document.getElementById('candle2').style.display = "inline"
        document.getElementById('candle2').style.backgroundColor = 24397
        document.getElementById('candle3').style.display = "inline"
        document.getElementById('candle3').style.backgroundColor = 424242
        document.getElementById('candle4').style.display = "inline"
        document.getElementById('upg311').style.display = "inline"
        document.getElementById('upg311').style.backgroundColor = 57029
        document.getElementById('upg312').style.display = "inline"
        document.getElementById('upg312').style.backgroundColor = 24397
        document.getElementById('upg313').style.display = "inline"
        document.getElementById('upg313').style.backgroundColor = 424242
    }
    function candle4buy() {
        if (messages >= 1e18 && heat >= 1.5e6) {
            if (candle4==0) {
                heat = 0
                messages = 0
                friendship = 1
                friendshiplost = 0.5
                upg111 = 0
                upg112 = 0
                upg113 = 0
                upg121 = 0
                upg122 = 0
                upg123 = 0
                upg211 = 0
                upg212 = 0
                upg213 = 0
                upg214 = 0
                upg221 = 0
                upg222 = 0
                upg223 = 0
                upg224 = 0
                upg231 = 0
                upg232 = 0
                upg233 = 0
                upg234 = 0
                upg241 = 0
                upg242 = 0
                upg243 = 0
                upg244 = 0
                ++candle4
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg314').style.display = "inline"
                document.getElementById('candle5').style.display = "inline"
                document.getElementById('upg111').style.backgroundColor = 610000
                document.getElementById('upg112').style.backgroundColor = 610000
                document.getElementById('upg113').style.backgroundColor = 610000
                document.getElementById('upg121').style.backgroundColor = 610000
                document.getElementById('upg122').style.backgroundColor = 610000
                document.getElementById('upg123').style.backgroundColor = 610000
                document.getElementById('upg211').style.backgroundColor = 524635
                document.getElementById('upg212').style.backgroundColor = 524635
                document.getElementById('upg213').style.backgroundColor = 524635
                document.getElementById('upg214').style.backgroundColor = 524635
                document.getElementById('upg221').style.backgroundColor = 524635
                document.getElementById('upg222').style.backgroundColor = 524635
                document.getElementById('upg223').style.backgroundColor = 524635
                document.getElementById('upg224').style.backgroundColor = 524635
                document.getElementById('upg231').style.backgroundColor = 524635
                document.getElementById('upg232').style.backgroundColor = 524635
                document.getElementById('upg233').style.backgroundColor = 524635
                document.getElementById('upg234').style.backgroundColor = 524635
                document.getElementById('upg241').style.backgroundColor = 524635
                document.getElementById('upg242').style.backgroundColor = 524635
                document.getElementById('upg243').style.backgroundColor = 524635
                document.getElementById('upg244').style.backgroundColor = 524635
                document.getElementById('candle4').style.backgroundColor = 89938
                document.getElementById('heat').innerHTML = Math.floor(heat)
                document.getElementById('heatgain').innerHTML = 0
                document.getElementById('friendship').innerHTML = friendship
                document.getElementById('friendlost').innerHTML = friendshiplost
            }
        }
    }
    function upgrade314() {
        if (messages >= 5e14) {
            if (upg314 ==0) {
                messages -= 5e14
                ++upg314
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg314').style.backgroundColor = 89938
            }
        }
    }
    function candle5buy() {
        if (messages >= 3e18 && heat >= 4e6) {
            if (candle5==0) {
                heat = 0
                messages = 0
                friendship = 1
                friendshiplost = 0.5
                upg111 = 0
                upg112 = 0
                upg113 = 0
                upg121 = 0
                upg122 = 0
                upg123 = 0
                upg211 = 0
                upg212 = 0
                upg213 = 0
                upg214 = 0
                upg221 = 0
                upg222 = 0
                upg223 = 0
                upg224 = 0
                upg231 = 0
                upg232 = 0
                upg233 = 0
                upg234 = 0
                upg241 = 0
                upg242 = 0
                upg243 = 0
                upg244 = 0
                ++candle5
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg315').style.display = "inline"
                document.getElementById('candle6').style.display = "inline"
                document.getElementById('upg111').style.backgroundColor = 610000
                document.getElementById('upg112').style.backgroundColor = 610000
                document.getElementById('upg113').style.backgroundColor = 610000
                document.getElementById('upg121').style.backgroundColor = 610000
                document.getElementById('upg122').style.backgroundColor = 610000
                document.getElementById('upg123').style.backgroundColor = 610000
                document.getElementById('upg211').style.backgroundColor = 524635
                document.getElementById('upg212').style.backgroundColor = 524635
                document.getElementById('upg213').style.backgroundColor = 524635
                document.getElementById('upg214').style.backgroundColor = 524635
                document.getElementById('upg221').style.backgroundColor = 524635
                document.getElementById('upg222').style.backgroundColor = 524635
                document.getElementById('upg223').style.backgroundColor = 524635
                document.getElementById('upg224').style.backgroundColor = 524635
                document.getElementById('upg231').style.backgroundColor = 524635
                document.getElementById('upg232').style.backgroundColor = 524635
                document.getElementById('upg233').style.backgroundColor = 524635
                document.getElementById('upg234').style.backgroundColor = 524635
                document.getElementById('upg241').style.backgroundColor = 524635
                document.getElementById('upg242').style.backgroundColor = 524635
                document.getElementById('upg243').style.backgroundColor = 524635
                document.getElementById('upg244').style.backgroundColor = 524635
                document.getElementById('candle5').style.backgroundColor = 222222
                document.getElementById('heat').innerHTML = Math.floor(heat)
                document.getElementById('heatgain').innerHTML = 0
                document.getElementById('friendship').innerHTML = friendship
                document.getElementById('friendlost').innerHTML = friendshiplost
            }
        }
    }
    function upgrade315() {
        if (messages >= 1e15) {
            if (upg315 ==0) {
                messages -= 5e14
                ++upg315
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg315').style.backgroundColor = 222222
            }
        }
    }
    function candle6buy() {
        if (messages >= 7e18 && heat >= 25e6) {
            if (candle6==0) {
                heat = 0
                messages = 0
                friendship = 1
                friendshiplost = 0.5
                upg111 = 0
                upg112 = 0
                upg113 = 0
                upg121 = 0
                upg122 = 0
                upg123 = 0
                upg211 = 0
                upg212 = 0
                upg213 = 0
                upg214 = 0
                upg221 = 0
                upg222 = 0
                upg223 = 0
                upg224 = 0
                upg231 = 0
                upg232 = 0
                upg233 = 0
                upg234 = 0
                upg241 = 0
                upg242 = 0
                upg243 = 0
                upg244 = 0
                ++candle6
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg316').style.display = "inline"
                document.getElementById('candle7').style.display = "inline"
                document.getElementById('upg111').style.backgroundColor = 610000
                document.getElementById('upg112').style.backgroundColor = 610000
                document.getElementById('upg113').style.backgroundColor = 610000
                document.getElementById('upg121').style.backgroundColor = 610000
                document.getElementById('upg122').style.backgroundColor = 610000
                document.getElementById('upg123').style.backgroundColor = 610000
                document.getElementById('upg211').style.backgroundColor = 524635
                document.getElementById('upg212').style.backgroundColor = 524635
                document.getElementById('upg213').style.backgroundColor = 524635
                document.getElementById('upg214').style.backgroundColor = 524635
                document.getElementById('upg221').style.backgroundColor = 524635
                document.getElementById('upg222').style.backgroundColor = 524635
                document.getElementById('upg223').style.backgroundColor = 524635
                document.getElementById('upg224').style.backgroundColor = 524635
                document.getElementById('upg231').style.backgroundColor = 524635
                document.getElementById('upg232').style.backgroundColor = 524635
                document.getElementById('upg233').style.backgroundColor = 524635
                document.getElementById('upg234').style.backgroundColor = 524635
                document.getElementById('upg241').style.backgroundColor = 524635
                document.getElementById('upg242').style.backgroundColor = 524635
                document.getElementById('upg243').style.backgroundColor = 524635
                document.getElementById('upg244').style.backgroundColor = 524635
                document.getElementById('candle6').style.backgroundColor = 205396
                document.getElementById('heat').innerHTML = Math.floor(heat)
                document.getElementById('heatgain').innerHTML = 0
                document.getElementById('friendship').innerHTML = friendship
                document.getElementById('friendlost').innerHTML = friendshiplost
            }
        }
    }
    function upgrade316() {
        if (messages >= 4e15) {
            if (upg316 ==0) {
                messages -= 5e14
                ++upg316
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg316').style.backgroundColor = 205396
            }
        }
    }
    function SixCandlesSC() {
        messages = 61437468987702580000
        heat = 9216434
        friendship = 0.49
        friendshiplost = 0.05
        clicks = 25136
        upg111 = 1
        upg112 = 1
        upg113 = 1
        upg121 = 1
        upg122 = 1
        upg123 = 1
        upg211 = 1
        upg212 = 1
        upg213 = 1
        upg214 = 1
        upg221 = 1
        upg222 = 1
        upg223 = 1
        upg224 = 1
        upg231 = 1
        upg232 = 1
        upg233 = 1
        upg234 = 1
        upg241 = 1
        upg242 = 1
        upg243 = 1
        upg244 = 1
        document.getElementById('candle1').style.display = "inline"
        document.getElementById('upg111').style.display = "inline"
        document.getElementById('upg112').style.display = "inline"
        document.getElementById('upg113').style.display = "inline"
        document.getElementById('upg121').style.display = "inline"
        document.getElementById('upg122').style.display = "inline"
        document.getElementById('upg123').style.display = "inline"
        let showheat = document.getElementById("hidebeforeargument")
            let hidden = showheat.getAttribute("hidden")
            if (hidden) {
                showheat.removeAttribute("hidden")
            }
        document.getElementById('upg211').style.backgroundColor = 996009
        document.getElementById('upg211').style.display = "inline"
        document.getElementById('upg212').style.backgroundColor = 996009
        document.getElementById('upg212').style.display = "inline"
        document.getElementById('upg213').style.backgroundColor = 996009
        document.getElementById('upg213').style.display = "inline"
        document.getElementById('upg214').style.backgroundColor = 996009
        document.getElementById('upg214').style.display = "inline"
        document.getElementById('upg221').style.backgroundColor = 996009
        document.getElementById('upg221').style.display = "inline"
        document.getElementById('upg222').style.backgroundColor = 996009
        document.getElementById('upg222').style.display = "inline"
        document.getElementById('upg223').style.backgroundColor = 996009
        document.getElementById('upg223').style.display = "inline"
        document.getElementById('upg224').style.backgroundColor = 996009
        document.getElementById('upg224').style.display = "inline"
        document.getElementById('upg231').style.backgroundColor = 996009
        document.getElementById('upg231').style.display = "inline"
        document.getElementById('upg232').style.backgroundColor = 996009
        document.getElementById('upg232').style.display = "inline"
        document.getElementById('upg233').style.backgroundColor = 996009
        document.getElementById('upg233').style.display = "inline"
        document.getElementById('upg234').style.backgroundColor = 996009
        document.getElementById('upg234').style.display = "inline"
        document.getElementById('upg241').style.backgroundColor = 996009
        document.getElementById('upg241').style.display = "inline"
        document.getElementById('upg242').style.backgroundColor = 996009
        document.getElementById('upg242').style.display = "inline"
        document.getElementById('upg243').style.backgroundColor = 996009
        document.getElementById('upg243').style.display = "inline"
        document.getElementById('upg244').style.backgroundColor = 996009
        document.getElementById('upg244').style.display = "inline"
        candle1 = 1
        candle2 = 1
        candle3 = 1
        upg311 = 1
        upg312 = 1
        upg313 = 1
        candle4 = 1
        candle5 = 1
        candle6 = 1
        upg314 = 1
        upg315 = 1
        upg316 = 1
        document.getElementById('candle1').style.display = "inline"
        document.getElementById('candle1').style.backgroundColor = 57029
        document.getElementById('candle2').style.display = "inline"
        document.getElementById('candle2').style.backgroundColor = 24397
        document.getElementById('candle3').style.display = "inline"
        document.getElementById('candle3').style.backgroundColor = 424242
        document.getElementById('candle4').style.display = "inline"
        document.getElementById('upg311').style.display = "inline"
        document.getElementById('upg311').style.backgroundColor = 57029
        document.getElementById('upg312').style.display = "inline"
        document.getElementById('upg312').style.backgroundColor = 24397
        document.getElementById('upg313').style.display = "inline"
        document.getElementById('upg313').style.backgroundColor = 424242
        document.getElementById('candle4').style.display = "inline"
        document.getElementById('candle4').style.backgroundColor = 89938
        document.getElementById('candle5').style.display = "inline"
        document.getElementById('candle5').style.backgroundColor = 222222
        document.getElementById('candle6').style.display = "inline"
        document.getElementById('candle6').style.backgroundColor = 205396
        document.getElementById('candle7').style.display = "inline"
        document.getElementById('upg314').style.display = "inline"
        document.getElementById('upg314').style.backgroundColor = 89938
        document.getElementById('upg315').style.display = "inline"
        document.getElementById('upg315').style.backgroundColor = 222222
        document.getElementById('upg316').style.display = "inline"
        document.getElementById('upg316').style.backgroundColor = 205396
    }
    function candle7buy() {
        if (messages >= 1e21 && heat >= 60e6) {
            if (candle7==0) {
                heat = 0
                messages = 0
                friendship = 1
                friendshiplost = 0.5
                upg111 = 0
                upg112 = 0
                upg113 = 0
                upg121 = 0
                upg122 = 0
                upg123 = 0
                upg211 = 0
                upg212 = 0
                upg213 = 0
                upg214 = 0
                upg221 = 0
                upg222 = 0
                upg223 = 0
                upg224 = 0
                upg231 = 0
                upg232 = 0
                upg233 = 0
                upg234 = 0
                upg241 = 0
                upg242 = 0
                upg243 = 0
                upg244 = 0
                ++candle7
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg321').style.display = "inline"
                document.getElementById('candle8').style.display = "inline"
                document.getElementById('upg111').style.backgroundColor = 610000
                document.getElementById('upg112').style.backgroundColor = 610000
                document.getElementById('upg113').style.backgroundColor = 610000
                document.getElementById('upg121').style.backgroundColor = 610000
                document.getElementById('upg122').style.backgroundColor = 610000
                document.getElementById('upg123').style.backgroundColor = 610000
                document.getElementById('upg211').style.backgroundColor = 524635
                document.getElementById('upg212').style.backgroundColor = 524635
                document.getElementById('upg213').style.backgroundColor = 524635
                document.getElementById('upg214').style.backgroundColor = 524635
                document.getElementById('upg221').style.backgroundColor = 524635
                document.getElementById('upg222').style.backgroundColor = 524635
                document.getElementById('upg223').style.backgroundColor = 524635
                document.getElementById('upg224').style.backgroundColor = 524635
                document.getElementById('upg231').style.backgroundColor = 524635
                document.getElementById('upg232').style.backgroundColor = 524635
                document.getElementById('upg233').style.backgroundColor = 524635
                document.getElementById('upg234').style.backgroundColor = 524635
                document.getElementById('upg241').style.backgroundColor = 524635
                document.getElementById('upg242').style.backgroundColor = 524635
                document.getElementById('upg243').style.backgroundColor = 524635
                document.getElementById('upg244').style.backgroundColor = 524635
                document.getElementById('candle7').style.backgroundColor = 429602
                document.getElementById('heat').innerHTML = Math.floor(heat)
                document.getElementById('heatgain').innerHTML = 0
                document.getElementById('friendship').innerHTML = friendship
                document.getElementById('friendlost').innerHTML = friendshiplost
            }
        }
    }
    function upgrade321() {
        if (heat >= 1e5) {
            if (upg321 ==0) {
                heat -= 1e5
                ++upg321
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg321').style.backgroundColor = 429602
            }
        }
    }
    function candle8buy() {
        if (messages >= 9e21 && heat >= 150e6) {
            if (candle8==0) {
                heat = 0
                messages = 0
                friendship = 1
                friendshiplost = 0.5
                upg111 = 0
                upg112 = 0
                upg113 = 0
                upg121 = 0
                upg122 = 0
                upg123 = 0
                upg211 = 0
                upg212 = 0
                upg213 = 0
                upg214 = 0
                upg221 = 0
                upg222 = 0
                upg223 = 0
                upg224 = 0
                upg231 = 0
                upg232 = 0
                upg233 = 0
                upg234 = 0
                upg241 = 0
                upg242 = 0
                upg243 = 0
                upg244 = 0
                ++candle8
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg322').style.display = "inline"
                document.getElementById('candle9').style.display = "inline"
                document.getElementById('upg111').style.backgroundColor = 610000
                document.getElementById('upg112').style.backgroundColor = 610000
                document.getElementById('upg113').style.backgroundColor = 610000
                document.getElementById('upg121').style.backgroundColor = 610000
                document.getElementById('upg122').style.backgroundColor = 610000
                document.getElementById('upg123').style.backgroundColor = 610000
                document.getElementById('upg211').style.backgroundColor = 524635
                document.getElementById('upg212').style.backgroundColor = 524635
                document.getElementById('upg213').style.backgroundColor = 524635
                document.getElementById('upg214').style.backgroundColor = 524635
                document.getElementById('upg221').style.backgroundColor = 524635
                document.getElementById('upg222').style.backgroundColor = 524635
                document.getElementById('upg223').style.backgroundColor = 524635
                document.getElementById('upg224').style.backgroundColor = 524635
                document.getElementById('upg231').style.backgroundColor = 524635
                document.getElementById('upg232').style.backgroundColor = 524635
                document.getElementById('upg233').style.backgroundColor = 524635
                document.getElementById('upg234').style.backgroundColor = 524635
                document.getElementById('upg241').style.backgroundColor = 524635
                document.getElementById('upg242').style.backgroundColor = 524635
                document.getElementById('upg243').style.backgroundColor = 524635
                document.getElementById('upg244').style.backgroundColor = 524635
                document.getElementById('candle8').style.backgroundColor = 159602
                document.getElementById('heat').innerHTML = Math.floor(heat)
                document.getElementById('heatgain').innerHTML = 0
                document.getElementById('friendship').innerHTML = friendship
                document.getElementById('friendlost').innerHTML = friendshiplost
            }
        }
    }
    function upgrade322() {
        if (heat >= 250e3) {
            if (upg322 ==0) {
                heat -= 250e3
                ++upg322
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg322').style.backgroundColor = 159602
            }
        }
    }
    function candle9buy() {
        if (messages >= 2e22 && heat >= 5e9) {
            if (candle9==0) {
                heat = 0
                messages = 0
                friendship = 1
                friendshiplost = 0.5
                upg111 = 0
                upg112 = 0
                upg113 = 0
                upg121 = 0
                upg122 = 0
                upg123 = 0
                upg211 = 0
                upg212 = 0
                upg213 = 0
                upg214 = 0
                upg221 = 0
                upg222 = 0
                upg223 = 0
                upg224 = 0
                upg231 = 0
                upg232 = 0
                upg233 = 0
                upg234 = 0
                upg241 = 0
                upg242 = 0
                upg243 = 0
                upg244 = 0
                ++candle9
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg323').style.display = "inline"
                document.getElementById('candle10').style.display = "inline"
                document.getElementById('upg111').style.backgroundColor = 610000
                document.getElementById('upg112').style.backgroundColor = 610000
                document.getElementById('upg113').style.backgroundColor = 610000
                document.getElementById('upg121').style.backgroundColor = 610000
                document.getElementById('upg122').style.backgroundColor = 610000
                document.getElementById('upg123').style.backgroundColor = 610000
                document.getElementById('upg211').style.backgroundColor = 524635
                document.getElementById('upg212').style.backgroundColor = 524635
                document.getElementById('upg213').style.backgroundColor = 524635
                document.getElementById('upg214').style.backgroundColor = 524635
                document.getElementById('upg221').style.backgroundColor = 524635
                document.getElementById('upg222').style.backgroundColor = 524635
                document.getElementById('upg223').style.backgroundColor = 524635
                document.getElementById('upg224').style.backgroundColor = 524635
                document.getElementById('upg231').style.backgroundColor = 524635
                document.getElementById('upg232').style.backgroundColor = 524635
                document.getElementById('upg233').style.backgroundColor = 524635
                document.getElementById('upg234').style.backgroundColor = 524635
                document.getElementById('upg241').style.backgroundColor = 524635
                document.getElementById('upg242').style.backgroundColor = 524635
                document.getElementById('upg243').style.backgroundColor = 524635
                document.getElementById('upg244').style.backgroundColor = 524635
                document.getElementById('candle9').style.backgroundColor = 460299
                document.getElementById('heat').innerHTML = Math.floor(heat)
                document.getElementById('heatgain').innerHTML = 0
                document.getElementById('friendship').innerHTML = friendship
                document.getElementById('friendlost').innerHTML = friendshiplost
            }
        }
    }
    function upgrade323() {
        if (heat >= 1.2e6) {
            if (upg323 ==0) {
                heat =1
                messages = 0
                ++upg323
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg323').style.backgroundColor = 460299
            }
        }
    }
    function candle10buy() {
        if (messages >= 2e23 && heat >= 100e9) {
            if (candle10==0) {
                heat = 0
                messages = 0
                friendship = 1
                friendshiplost = 0.5
                upg111 = 0
                upg112 = 0
                upg113 = 0
                upg121 = 0
                upg122 = 0
                upg123 = 0
                upg211 = 0
                upg212 = 0
                upg213 = 0
                upg214 = 0
                upg221 = 0
                upg222 = 0
                upg223 = 0
                upg224 = 0
                upg231 = 0
                upg232 = 0
                upg233 = 0
                upg234 = 0
                upg241 = 0
                upg242 = 0
                upg243 = 0
                upg244 = 0
                ++candle10
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg324').style.display = "inline"
                document.getElementById('candle11').style.display = "inline"
                document.getElementById('upg111').style.backgroundColor = 610000
                document.getElementById('upg112').style.backgroundColor = 610000
                document.getElementById('upg113').style.backgroundColor = 610000
                document.getElementById('upg121').style.backgroundColor = 610000
                document.getElementById('upg122').style.backgroundColor = 610000
                document.getElementById('upg123').style.backgroundColor = 610000
                document.getElementById('upg211').style.backgroundColor = 524635
                document.getElementById('upg212').style.backgroundColor = 524635
                document.getElementById('upg213').style.backgroundColor = 524635
                document.getElementById('upg214').style.backgroundColor = 524635
                document.getElementById('upg221').style.backgroundColor = 524635
                document.getElementById('upg222').style.backgroundColor = 524635
                document.getElementById('upg223').style.backgroundColor = 524635
                document.getElementById('upg224').style.backgroundColor = 524635
                document.getElementById('upg231').style.backgroundColor = 524635
                document.getElementById('upg232').style.backgroundColor = 524635
                document.getElementById('upg233').style.backgroundColor = 524635
                document.getElementById('upg234').style.backgroundColor = 524635
                document.getElementById('upg241').style.backgroundColor = 524635
                document.getElementById('upg242').style.backgroundColor = 524635
                document.getElementById('upg243').style.backgroundColor = 524635
                document.getElementById('upg244').style.backgroundColor = 524635
                document.getElementById('candle10').style.backgroundColor = 590000
                document.getElementById('heat').innerHTML = Math.floor(heat)
                document.getElementById('heatgain').innerHTML = 0
                document.getElementById('friendship').innerHTML = friendship
                document.getElementById('friendlost').innerHTML = friendshiplost
            }
        }
    }
    function upgrade324() {
        if (heat >= 5e6) {
            if (upg324 ==0) {
                heat -= 5e6
                ++upg324
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg324').style.backgroundColor = 590000
            }
        }
    }
    function candle11buy() {
        if (messages >= 1e24 && heat >= 250e9) {
            if (candle11==0) {
                heat = 0
                messages = 0
                friendship = 1
                friendshiplost = 0.5
                upg111 = 0
                upg112 = 0
                upg113 = 0
                upg121 = 0
                upg122 = 0
                upg123 = 0
                upg211 = 0
                upg212 = 0
                upg213 = 0
                upg214 = 0
                upg221 = 0
                upg222 = 0
                upg223 = 0
                upg224 = 0
                upg231 = 0
                upg232 = 0
                upg233 = 0
                upg234 = 0
                upg241 = 0
                upg242 = 0
                upg243 = 0
                upg244 = 0
                ++candle11
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg325').style.display = "inline"
                document.getElementById('candle12').style.display = "inline"
                document.getElementById('upg111').style.backgroundColor = 610000
                document.getElementById('upg112').style.backgroundColor = 610000
                document.getElementById('upg113').style.backgroundColor = 610000
                document.getElementById('upg121').style.backgroundColor = 610000
                document.getElementById('upg122').style.backgroundColor = 610000
                document.getElementById('upg123').style.backgroundColor = 610000
                document.getElementById('upg211').style.backgroundColor = 524635
                document.getElementById('upg212').style.backgroundColor = 524635
                document.getElementById('upg213').style.backgroundColor = 524635
                document.getElementById('upg214').style.backgroundColor = 524635
                document.getElementById('upg221').style.backgroundColor = 524635
                document.getElementById('upg222').style.backgroundColor = 524635
                document.getElementById('upg223').style.backgroundColor = 524635
                document.getElementById('upg224').style.backgroundColor = 524635
                document.getElementById('upg231').style.backgroundColor = 524635
                document.getElementById('upg232').style.backgroundColor = 524635
                document.getElementById('upg233').style.backgroundColor = 524635
                document.getElementById('upg234').style.backgroundColor = 524635
                document.getElementById('upg241').style.backgroundColor = 524635
                document.getElementById('upg242').style.backgroundColor = 524635
                document.getElementById('upg243').style.backgroundColor = 524635
                document.getElementById('upg244').style.backgroundColor = 524635
                document.getElementById('candle11').style.backgroundColor = 45900
                document.getElementById('heat').innerHTML = Math.floor(heat)
                document.getElementById('heatgain').innerHTML = 0
                document.getElementById('friendship').innerHTML = friendship
                document.getElementById('friendlost').innerHTML = friendshiplost
            }
        }
    }
    function upgrade325() {
        if (heat >= 12e6) {
            if (upg325 ==0) {
                heat -= 12e6
                ++upg325
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg325').style.backgroundColor = 45900
            }
        }
    }
    function candle12buy() {
        if (messages >= 3e24 && heat >= 1e12) {
            if (candle12==0) {
                heat = 0
                messages = 0
                friendship = 1
                friendshiplost = 0.5
                upg111 = 0
                upg112 = 0
                upg113 = 0
                upg121 = 0
                upg122 = 0
                upg123 = 0
                upg211 = 0
                upg212 = 0
                upg213 = 0
                upg214 = 0
                upg221 = 0
                upg222 = 0
                upg223 = 0
                upg224 = 0
                upg231 = 0
                upg232 = 0
                upg233 = 0
                upg234 = 0
                upg241 = 0
                upg242 = 0
                upg243 = 0
                upg244 = 0
                ++candle12
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg326').style.display = "inline"
                document.getElementById('upg111').style.backgroundColor = 610000
                document.getElementById('upg112').style.backgroundColor = 610000
                document.getElementById('upg113').style.backgroundColor = 610000
                document.getElementById('upg121').style.backgroundColor = 610000
                document.getElementById('upg122').style.backgroundColor = 610000
                document.getElementById('upg123').style.backgroundColor = 610000
                document.getElementById('upg211').style.backgroundColor = 524635
                document.getElementById('upg212').style.backgroundColor = 524635
                document.getElementById('upg213').style.backgroundColor = 524635
                document.getElementById('upg214').style.backgroundColor = 524635
                document.getElementById('upg221').style.backgroundColor = 524635
                document.getElementById('upg222').style.backgroundColor = 524635
                document.getElementById('upg223').style.backgroundColor = 524635
                document.getElementById('upg224').style.backgroundColor = 524635
                document.getElementById('upg231').style.backgroundColor = 524635
                document.getElementById('upg232').style.backgroundColor = 524635
                document.getElementById('upg233').style.backgroundColor = 524635
                document.getElementById('upg234').style.backgroundColor = 524635
                document.getElementById('upg241').style.backgroundColor = 524635
                document.getElementById('upg242').style.backgroundColor = 524635
                document.getElementById('upg243').style.backgroundColor = 524635
                document.getElementById('upg244').style.backgroundColor = 524635
                document.getElementById('candle12').style.backgroundColor = 890000
                document.getElementById('heat').innerHTML = Math.floor(heat)
                document.getElementById('heatgain').innerHTML = 0
                document.getElementById('friendship').innerHTML = friendship
                document.getElementById('friendlost').innerHTML = friendshiplost
            }
        }
    }
    function upgrade326() {
        if (heat >= 25e6) {
            if (upg326 ==0) {
                heat -= 25e6
                ++upg326
                document.getElementById('messagecount').innerHTML = Math.round(messages);
                document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
                document.getElementById('upg326').style.backgroundColor = 890000

                let showdough = document.getElementById("hidebeforeAC")
                let hidden = showdough.getAttribute("hidden")
                if (hidden) {
                showdough.removeAttribute("hidden")
                }
            }
        }
    }
    function AllCandlesSC() {
        messages = 61437468987702580000
        heat = 9216434
        friendship = 0.49
        friendshiplost = 0.05
        clicks = 25136
        upg111 = 1
        upg112 = 1
        upg113 = 1
        upg121 = 1
        upg122 = 1
        upg123 = 1
        upg211 = 1
        upg212 = 1
        upg213 = 1
        upg214 = 1
        upg221 = 1
        upg222 = 1
        upg223 = 1
        upg224 = 1
        upg231 = 1
        upg232 = 1
        upg233 = 1
        upg234 = 1
        upg241 = 1
        upg242 = 1
        upg243 = 1
        upg244 = 1
        document.getElementById('candle1').style.display = "inline"
        document.getElementById('upg111').style.display = "inline"
        document.getElementById('upg112').style.display = "inline"
        document.getElementById('upg113').style.display = "inline"
        document.getElementById('upg121').style.display = "inline"
        document.getElementById('upg122').style.display = "inline"
        document.getElementById('upg123').style.display = "inline"
        let showheat = document.getElementById("hidebeforeargument")
            let hidden = showheat.getAttribute("hidden")
            if (hidden) {
                showheat.removeAttribute("hidden")
            }
        document.getElementById('upg211').style.backgroundColor = 996009
        document.getElementById('upg211').style.display = "inline"
        document.getElementById('upg212').style.backgroundColor = 996009
        document.getElementById('upg212').style.display = "inline"
        document.getElementById('upg213').style.backgroundColor = 996009
        document.getElementById('upg213').style.display = "inline"
        document.getElementById('upg214').style.backgroundColor = 996009
        document.getElementById('upg214').style.display = "inline"
        document.getElementById('upg221').style.backgroundColor = 996009
        document.getElementById('upg221').style.display = "inline"
        document.getElementById('upg222').style.backgroundColor = 996009
        document.getElementById('upg222').style.display = "inline"
        document.getElementById('upg223').style.backgroundColor = 996009
        document.getElementById('upg223').style.display = "inline"
        document.getElementById('upg224').style.backgroundColor = 996009
        document.getElementById('upg224').style.display = "inline"
        document.getElementById('upg231').style.backgroundColor = 996009
        document.getElementById('upg231').style.display = "inline"
        document.getElementById('upg232').style.backgroundColor = 996009
        document.getElementById('upg232').style.display = "inline"
        document.getElementById('upg233').style.backgroundColor = 996009
        document.getElementById('upg233').style.display = "inline"
        document.getElementById('upg234').style.backgroundColor = 996009
        document.getElementById('upg234').style.display = "inline"
        document.getElementById('upg241').style.backgroundColor = 996009
        document.getElementById('upg241').style.display = "inline"
        document.getElementById('upg242').style.backgroundColor = 996009
        document.getElementById('upg242').style.display = "inline"
        document.getElementById('upg243').style.backgroundColor = 996009
        document.getElementById('upg243').style.display = "inline"
        document.getElementById('upg244').style.backgroundColor = 996009
        document.getElementById('upg244').style.display = "inline"
        candle1 = 1
        candle2 = 1
        candle3 = 1
        upg311 = 1
        upg312 = 1
        upg313 = 1
        candle4 = 1
        candle5 = 1
        candle6 = 1
        upg314 = 1
        upg315 = 1
        upg316 = 1
        candle7 = 1
        candle8 = 1
        candle9 = 1
        upg321 = 1
        upg322 = 1
        upg323 = 1
        candle10 = 1
        candle11 = 1
        candle12 = 1
        upg324 = 1
        upg325 = 1
        upg326 = 1
        let showdough = document.getElementById("hidebeforeAC")
        let hidden2 = showdough.getAttribute("hidden")
            if (hidden2) {
            showdough.removeAttribute("hidden")
        }
        document.getElementById('candle1').style.display = "inline"
        document.getElementById('candle1').style.backgroundColor = 57029
        document.getElementById('candle2').style.display = "inline"
        document.getElementById('candle2').style.backgroundColor = 24397
        document.getElementById('candle3').style.display = "inline"
        document.getElementById('candle3').style.backgroundColor = 424242
        document.getElementById('candle4').style.display = "inline"
        document.getElementById('upg311').style.display = "inline"
        document.getElementById('upg311').style.backgroundColor = 57029
        document.getElementById('upg312').style.display = "inline"
        document.getElementById('upg312').style.backgroundColor = 24397
        document.getElementById('upg313').style.display = "inline"
        document.getElementById('upg313').style.backgroundColor = 424242
        document.getElementById('candle4').style.display = "inline"
        document.getElementById('candle4').style.backgroundColor = 89938
        document.getElementById('candle5').style.display = "inline"
        document.getElementById('candle5').style.backgroundColor = 222222
        document.getElementById('candle6').style.display = "inline"
        document.getElementById('candle6').style.backgroundColor = 205396
        document.getElementById('candle7').style.display = "inline"
        document.getElementById('upg314').style.display = "inline"
        document.getElementById('upg314').style.backgroundColor = 89938
        document.getElementById('upg315').style.display = "inline"
        document.getElementById('upg315').style.backgroundColor = 222222
        document.getElementById('upg316').style.display = "inline"
        document.getElementById('upg316').style.backgroundColor = 205396
    }
    function upgrade411() {
        if (dough >= 100e3) {
            if (upg411 == 0) {
                dough -= 1e5
                ++upg411
                document.getElementById('doughgain').innerHTML = Math.floor(doughgain)
                document.getElementById('dough').innerHTML = Math.floor(dough)
                document.getElementById('upg411').style.backgroundColor = 969433
                document.getElementById('upg412').style.display = "inline"
            }
        }
    }
    function upgrade412() {
        if (dough >= 250e3) {
            if (upg412 == 0) {
                dough -= 2.5e5
                ++upg412
                document.getElementById('doughgain').innerHTML = Math.floor(doughgain)
                document.getElementById('dough').innerHTML = Math.floor(dough)
                document.getElementById('upg412').style.backgroundColor = 969433
                document.getElementById('upg413').style.display = "inline"
            }
        }
    }
    function upgrade413() {
        if (dough >= 500e3) {
            if (upg413 == 0) {
                dough -= 5e5
                ++upg413
                document.getElementById('doughgain').innerHTML = Math.floor(doughgain)
                document.getElementById('dough').innerHTML = Math.floor(dough)
                document.getElementById('upg413').style.backgroundColor = 969433
                document.getElementById('upg421').style.display = "inline"
            }
        }
    }
    function upgrade421() {
        if (dough >= 1.2e6) {
            if (upg421 == 0) {
                dough -= 1.2e6
                ++upg421
                document.getElementById('doughgain').innerHTML = Math.floor(doughgain)
                document.getElementById('dough').innerHTML = Math.floor(dough)
                document.getElementById('upg421').style.backgroundColor = 969433
                document.getElementById('upg422').style.display = "inline"
            }
        }
    }
    function upgrade422() {
        if (dough >= 2e6) {
            if (upg422 == 0) {
                dough -= 2e6
                ++upg422
                document.getElementById('doughgain').innerHTML = Math.floor(doughgain)
                document.getElementById('dough').innerHTML = Math.floor(dough)
                document.getElementById('upg422').style.backgroundColor = 969433
                document.getElementById('upg423').style.display = "inline"
            }
        }
    }
    function upgrade423() {
        if (dough >= 3.5e6) {
            if (upg423 == 0) {
                dough -= 3.5e6
                ++upg423
                document.getElementById('doughgain').innerHTML = Math.floor(doughgain)
                document.getElementById('dough').innerHTML = Math.floor(dough)
                document.getElementById('upg423').style.backgroundColor = 969433
                document.getElementById('upg431').style.display = "inline"
            }
        }
    }
    function upgrade431() {
        if (dough >= 15e6) {
            if (upg431 == 0) {
                dough -= 15e6
                ++upg431
                document.getElementById('doughgain').innerHTML = Math.floor(doughgain)
                document.getElementById('dough').innerHTML = Math.floor(dough)
                document.getElementById('upg431').style.backgroundColor = 969433
                document.getElementById('upg432').style.display = "inline"
            }
        }
    }
    function upgrade432() {
        if (dough >= 50e6) {
            if (upg432 == 0) {
                dough -= 50e6
                ++upg432
                document.getElementById('doughgain').innerHTML = Math.floor(doughgain)
                document.getElementById('dough').innerHTML = Math.floor(dough)
                document.getElementById('upg432').style.backgroundColor = 969433
                document.getElementById('upg433').style.display = "inline"
            }
        }
    }
    function upgrade433() {
        if (dough >= 0.1e9) {
            if (upg433 == 0) {
                dough -= 0.1e9
                ++upg433
                document.getElementById('doughgain').innerHTML = Math.floor(doughgain)
                document.getElementById('dough').innerHTML = Math.floor(dough)
                document.getElementById('upg433').style.backgroundColor = 969433
                document.getElementById('upg431').style.display = "inline"
                let showicing = document.getElementById("hidebeforeicing")
                let hidden3 = showicing.getAttribute("hidden")
                if (hidden3) {
                showicing.removeAttribute("hidden")
                }
            }
        }
    }
    function IcingSC() {
        messages = 61437468987702580000
        heat = 9216434
        dough = 1
        friendship = 0.49
        friendshiplost = 0.05
        clicks = 25136
        upg111 = 1
        upg112 = 1
        upg113 = 1
        upg121 = 1
        upg122 = 1
        upg123 = 1
        upg211 = 1
        upg212 = 1
        upg213 = 1
        upg214 = 1
        upg221 = 1
        upg222 = 1
        upg223 = 1
        upg224 = 1
        upg231 = 1
        upg232 = 1
        upg233 = 1
        upg234 = 1
        upg241 = 1
        upg242 = 1
        upg243 = 1
        upg244 = 1
        document.getElementById('candle1').style.display = "inline"
        document.getElementById('upg111').style.display = "inline"
        document.getElementById('upg112').style.display = "inline"
        document.getElementById('upg113').style.display = "inline"
        document.getElementById('upg121').style.display = "inline"
        document.getElementById('upg122').style.display = "inline"
        document.getElementById('upg123').style.display = "inline"
        let showheat = document.getElementById("hidebeforeargument")
            let hidden = showheat.getAttribute("hidden")
            if (hidden) {
                showheat.removeAttribute("hidden")
            }
        document.getElementById('upg211').style.backgroundColor = 996009
        document.getElementById('upg211').style.display = "inline"
        document.getElementById('upg212').style.backgroundColor = 996009
        document.getElementById('upg212').style.display = "inline"
        document.getElementById('upg213').style.backgroundColor = 996009
        document.getElementById('upg213').style.display = "inline"
        document.getElementById('upg214').style.backgroundColor = 996009
        document.getElementById('upg214').style.display = "inline"
        document.getElementById('upg221').style.backgroundColor = 996009
        document.getElementById('upg221').style.display = "inline"
        document.getElementById('upg222').style.backgroundColor = 996009
        document.getElementById('upg222').style.display = "inline"
        document.getElementById('upg223').style.backgroundColor = 996009
        document.getElementById('upg223').style.display = "inline"
        document.getElementById('upg224').style.backgroundColor = 996009
        document.getElementById('upg224').style.display = "inline"
        document.getElementById('upg231').style.backgroundColor = 996009
        document.getElementById('upg231').style.display = "inline"
        document.getElementById('upg232').style.backgroundColor = 996009
        document.getElementById('upg232').style.display = "inline"
        document.getElementById('upg233').style.backgroundColor = 996009
        document.getElementById('upg233').style.display = "inline"
        document.getElementById('upg234').style.backgroundColor = 996009
        document.getElementById('upg234').style.display = "inline"
        document.getElementById('upg241').style.backgroundColor = 996009
        document.getElementById('upg241').style.display = "inline"
        document.getElementById('upg242').style.backgroundColor = 996009
        document.getElementById('upg242').style.display = "inline"
        document.getElementById('upg243').style.backgroundColor = 996009
        document.getElementById('upg243').style.display = "inline"
        document.getElementById('upg244').style.backgroundColor = 996009
        document.getElementById('upg244').style.display = "inline"
        candle1 = 1
        candle2 = 1
        candle3 = 1
        upg311 = 1
        upg312 = 1
        upg313 = 1
        candle4 = 1
        candle5 = 1
        candle6 = 1
        upg314 = 1
        upg315 = 1
        upg316 = 1
        candle7 = 1
        candle8 = 1
        candle9 = 1
        upg321 = 1
        upg322 = 1
        upg323 = 1
        candle10 = 1
        candle11 = 1
        candle12 = 1
        upg324 = 1
        upg325 = 1
        upg326 = 1
        upg411 = 1
        upg412 = 1
        upg413 = 1
        upg421 = 1
        upg422 = 1
        upg423 = 1
        upg431 = 1
        upg432 = 1
        upg433 = 1
        let showdough = document.getElementById("hidebeforeAC")
        let hidden2 = showdough.getAttribute("hidden")
            if (hidden2) {
            showdough.removeAttribute("hidden")
        }
        let showicing = document.getElementById("hidebeforeicing")
                let hidden3 = showicing.getAttribute("hidden")
                if (hidden3) {
                showicing.removeAttribute("hidden")
                }
        document.getElementById('candle1').style.display = "inline"
        document.getElementById('candle1').style.backgroundColor = 57029
        document.getElementById('candle2').style.display = "inline"
        document.getElementById('candle2').style.backgroundColor = 24397
        document.getElementById('candle3').style.display = "inline"
        document.getElementById('candle3').style.backgroundColor = 424242
        document.getElementById('candle4').style.display = "inline"
        document.getElementById('upg311').style.display = "inline"
        document.getElementById('upg311').style.backgroundColor = 57029
        document.getElementById('upg312').style.display = "inline"
        document.getElementById('upg312').style.backgroundColor = 24397
        document.getElementById('upg313').style.display = "inline"
        document.getElementById('upg313').style.backgroundColor = 424242
        document.getElementById('candle4').style.display = "inline"
        document.getElementById('candle4').style.backgroundColor = 89938
        document.getElementById('candle5').style.display = "inline"
        document.getElementById('candle5').style.backgroundColor = 222222
        document.getElementById('candle6').style.display = "inline"
        document.getElementById('candle6').style.backgroundColor = 205396
        document.getElementById('candle7').style.display = "inline"
        document.getElementById('upg314').style.display = "inline"
        document.getElementById('upg314').style.backgroundColor = 89938
        document.getElementById('upg315').style.display = "inline"
        document.getElementById('upg315').style.backgroundColor = 222222
        document.getElementById('upg316').style.display = "inline"
        document.getElementById('upg316').style.backgroundColor = 205396
    }
    function geticing() {
        icing += icinggain
        messages = 0
        heat = 0
        dough = 0
    }
    function upg511() {
        if (icing >= 10 && upg511 == 0) {
            icing -= 10
            ++upg511
        }
    }
    function upg512() {
        if (icing >= 15 && upg512 == 0) {
            icing -= 15
            ++upg512
        }
    }
    function upg513() {
        if (icing >= 20 && upg513 == 0) {
            icing -= 20
            ++upg513
        }
    }
    function upg521() {
        if (icing >= 30 && upg511 == 30) {
            icing -= 30
            ++upg521
        }
    }
    function upg522() {
        if (icing >= 70 && upg522 == 0) {
            icing -= 70
            ++upg522
        }
    }
    function upg523() {
        if (icing >= 200 && upg523 == 0) {
            icing -= 200
            ++upg523
        }
    }