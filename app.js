let btnLight = document.querySelector(".btn-light") 
let btnDark = document.querySelector(".btn-dark")
let body = document.querySelector("body")
let inputContainer = document.querySelector(".input-container")
let summary = document.querySelector(".summary")

document.addEventListener("submit" , e => {
    e.preventDefault()

    let normal = document.getElementById("normal")
    let premium = document.getElementById("Premium")
    
    let inName = document.getElementById("inName").value.trim()
    let inMovie = document.getElementById("inMovie").value.trim()
    let inQuantity = parseInt(document.getElementById("inQuantity").value)
    let typeSeat = premium.checked ? "Premium" : "Normal"
    let priceSeat = premium.checked ? 5 : 0

    if(inName == "") {
        alert("customer name is empty")
        return
    }else if(inMovie == ""){
        alert("movie is not select")
        return
    }else if(isNaN(inQuantity)){
        alert("ticket quantity is empty")
        return
    }else if(inQuantity <= 0){
        alert("ticket quantity is less then 0")
        return
    }else if( premium.checked == false && normal.checked == false){
        alert("Select seat please")
        return
    } 


    let getTicketPrice = () => {
        if(inMovie == "Avengers") return 15
        else if(inMovie == "Frozen") return 12
        else if(inMovie == "Kung Fu Panda") return 10
    }

    let ticketPrice = getTicketPrice()
    // console.log({ticketPrice});
    
    let totalTicket = ticketPrice * inQuantity
    // console.log({totalTicket});

    let finalTotal = totalTicket + priceSeat
    // console.log({finalTotal});
    
    let now = new Date
    console.log(now);
    
    let day = now.getDate()
    let month = now.getMonth() + 1
    let year = now.getFullYear()
    // console.log({day,month,year});

    let frmatMonth = () => {
        if(month == 1) return "01"
        if(month == 2) return "02"
        if(month == 3) return "03"
        if(month == 4) return "04"
        if(month == 5) return "05"
        if(month == 6) return "06"
        if(month == 7) return "07"
        if(month == 8) return "08"
        if(month == 9) return "09"
        if(month == 10) return "10"
        if(month == 11) return "11"
        if(month == 12) return "12"
    }
    month = frmatMonth()
    
    let date = `${day}/${month}/${year}`

    summary.classList.remove("hidden")

    document.getElementById("outDate").textContent = date
    document.getElementById("outCustomerName").textContent = inName
    document.getElementById("outSelectedMovie").textContent = inMovie
    document.getElementById("outNumberofTickets").textContent = inQuantity
    document.getElementById("outTicketTotal").textContent = "RM " + totalTicket.toFixed(2)
    document.getElementById("outSeatCharge").textContent = "RM " + priceSeat.toFixed(2)
    document.getElementById("outFinalPayment").textContent = "RM " + finalTotal.toFixed(2)

})



btnDark.addEventListener("click", e => {
    btnDark.classList.add("hidden")
    btnLight.classList.remove("hidden")
    body.style.color = "#fff"
    body.style.backgroundColor = "#000"
    inputContainer.style.backgroundColor = "#6d6d6d"
    summary.style.backgroundColor = "#6d6d6d"
})
btnLight.addEventListener("click" , e => {
    btnLight.classList.add("hidden") 
    btnDark.classList.remove("hidden")
    body.style.color = "#000"
    body.style.backgroundColor = "#fff"
    inputContainer.style.backgroundColor = "#fff"
    summary.style.backgroundColor = "#fff"
})