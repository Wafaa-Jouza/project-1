const doneOrderList = document.querySelector("#doneOrderList")
const doneInput = document.querySelector('.c')
const doneArr = []

const done = function(){
    console.log(doneInput.value)
    doneArr.push(doneInput.value)
    console.log(doneArr)
    renderdoneList(doneInput.value)

}

const renderdoneList = function(newDone){
    console.log('done')
    let doneLi = document.createElement('li')
    doneLi.innerText = newDone
    doneOrderList.append(doneLi)


    let doneButton = document.createElement('button')
    doneButton.innerText='x'
    console.log(doneButton)
    doneLi.append(doneButton)
    

    doneButton.addEventListener("click" , function(){
        console.log("delete")
        console.log(doneLi)
        doneLi.remove()
    } )

    doneOrderList.append(doneLi)
}




//=============================================================


const pendingOrderList = document.querySelector("#pendingOrderList")
const pendingInput = document.querySelector('.c')
const pendingArr = []

const pending = function(){
    console.log(pendingInput.value)
    pendingArr.push(pendingInput.value)
    console.log(pendingArr)
    renderpendingList(pendingInput.value)
}

const renderpendingList = function(newPending){
    console.log('pending')
    let pendingLi = document.createElement('li')
    pendingLi.innerText = newPending

    let pendingButton = document.createElement('button')
    pendingButton.innerText='done'
    console.log(pendingButton)

    pendingButton.addEventListener("click" , function(){
        console.log("done")
        renderdoneList(newPending)
        pendingLi.remove()
    } )


    pendingLi.append(pendingButton)

    pendingOrderList.append(pendingLi)
}