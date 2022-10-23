//    Main stats
var messages = 0
var messagegain = 1
var clicks = 0
var argumentUnlocked = 0
var friendship = 1
var heat = 0
var friendshiplost = 0.5
var heatgain = 0
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
//    Upgrade stats (total)
var upgs1 = 0
var upgs2 = 0

function log(base, number) {
    return Math.log(number) / Math.log(base);
  }
function incrementButton() {
    heatgain = Math.pow(1.225,Math.log10(messages)+1)*friendship
    messagegain=1;
    upgs1=0;
    upgs2=0;
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

    if (upg121 == 1) {
        ++upgs1
        messagegain *= Math.pow(1.2,upgs1)
        document.getElementById('upg121').style.backgroundColor = 106100
    }
    if (upg222 == 1) {
        ++upgs2
        heatgain *= Math.pow(1.1,upgs2)
    }
    messages += messagegain
    ++clicks
    if (messages >= 75000) {
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
                document.getElementById('heat').innerHTML = Math.rloor(heat)
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