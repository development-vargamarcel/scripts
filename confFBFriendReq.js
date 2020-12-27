    //development.vargamarcel@gmail.com
    //Clicks on all visible (unclicked,blue) confirm buttons (could also work for facebook in other languages too because of how the code was designed - it doesn't rely on any text but only on the classes aplied to every confirm button,and that means that if FB decides to change those clases,this code won't work anymore)
    var byClassName=document.getElementsByClassName('d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d3f4x2em fe6kdd0r mau55g9w c8b282yb iv3no6db jq4qci2q a3bd9o3v lrazzd5p bwm1u5wc')
    var confirmButtons=[...byClassName]
    confirmButtons_length=confirmButtons.length
    console.log('///------------------------------------------///')

    console.log("Found",confirmButtons_length,"friend requests (all the visible ones).")
    for (let i = 0; i < confirmButtons_length; i++) {
            confirmButtons[i].click()
    }
alert('Accepted '+confirmButtons_length+' friend requests.\n\n In order to accept more friend requests you must reveal them (make them visible) and then rerun the program.To reveal new requests,reload this page or scroll down the lists of available requests.')