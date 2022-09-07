let totalInput = document.querySelector('#total-input')
    let tipPercent = document.querySelector('#tip-input')
    let incrementBtn = document.querySelector('#increment')
    let decrementBtn = document.querySelector('#decrement')
    let noOfPeople = document.querySelector('span')
    let total = document.querySelector('#total')

    let noOfPeopleCount = 1
    let billAmount
    let tip

    totalInput.oninput = totalPerPerson
    tipPercent.oninput = totalPerPerson
    incrementBtn.onclick = () => {
      noOfPeopleCount += 1
      totalPerPerson()
    }
    decrementBtn.onclick = () => {
      if(noOfPeopleCount == 1 ) {
        totalPerPerson()
      } else {
        noOfPeopleCount -= 1
        totalPerPerson()
      }
    }

    function totalPerPerson() {
      billAmount = totalInput.value == '' ? 0 : Number(totalInput.value)
      tip = tipPercent.value == '' ? 0 : Number(tipPercent.value)

      let tipAmount = billAmount * (tip/100)
      
      totalAmount = (billAmount + tipAmount ) / noOfPeopleCount
      noOfPeople.innerHTML = noOfPeopleCount
      total.innerHTML = `$${parseFloat(totalAmount).toFixed(2)}`
    }