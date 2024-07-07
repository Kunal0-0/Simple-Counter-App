const counterValue = document.querySelector('#counter'); // fetching counter element from HTML code

const increment = () => {
    // get the value from UI
    let value = parseInt(counterValue.innerText); // converting inner text given string into integer
    
    // Update the value
    value = value + 1;

    // set the value onto UI
    counterValue.innerText = value;
}

const decrement = () => {
    // get the value from UI
    let value = parseInt(counterValue.innerText);

    // Update the value
    value = value - 1;

    // set the value onto UI
    counterValue.innerText = value;
}

