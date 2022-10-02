var messages = 0
var messagegain = 1
var upg111 = 0
var upg112 = 0
var cps = 0
var mps = 0

function incrementButton() {
    messages += messagegain

    document.getElementById('messagecount').innerHTML = messages;
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
            ++cps
            mps = (cps*messagegain)
            document.getElementById('messagecount').innerHTML = messages;
            document.getElementById('passivemessage').innerHTML = mps;
        }
    }
}