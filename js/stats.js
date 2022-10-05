var messages = 0
var messagegain = 1
var upg111 = 0
var upg112 = 0
var upg113 = 0
var clicks = 0

function log(base, number) {
    return Math.log(number) / Math.log(base);
  }
function incrementButton() {
    messagegain=1;
    if (upg111 == 1) {
        messagegain += 2
    }
    if (upg112 == 1) {
        messagegain *= (Math.round(((Math.log10(messages+1))*100))/100+1)
    }
    if (upg113 == 1) {
        messagegain *= (Math.round(((Math.log10(clicks+1))*110))/100+1)
    }
    messages += messagegain
    ++clicks
    document.getElementById('messagecount').innerHTML = Math.round(messages);
    document.getElementById('clickmessage').innerHTML = Math.round(messagegain);
    }
    function upgrade111() {
        if (messages >= 20) {
            if (upg111 == 0) {
                messages -= 20
                ++upg111
                messagegain += 2
                document.getElementById('messagecount').innerHTML = messages;
                document.getElementById('clickmessage').innerHTML = messagegain;
            }
        }
    }
    function upgrade112() {
        if (messages >= 150) {
            if (upg111 == 1 && upg112 ==0) {
                messages -= 150
                ++upg112
               document.getElementById('messagecount').innerHTML = messages;
               document.getElementById('clickmessage').innerHTML = messagegain;
            }
        }
    }
    function upgrade113() {
        if (messages >= 1000) {
            if (upg112 == 1 && upg113 ==0) {
                messages -= 1000
                ++upg113
               document.getElementById('messagecount').innerHTML = messages;
               document.getElementById('clickmessage').innerHTML = messagegain;
            }
        }
    }
