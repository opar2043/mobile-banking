function getInputId(id){
      let inputValue = document.getElementById(id).value;
      let inputNumValue = parseFloat(inputValue);

      return inputNumValue;
      
}

function getInputText(id){
    let textValue = document.getElementById(id).innerText;
    let numTextValue = parseFloat(textValue);

    return numTextValue ;

}

function showSectionId(id){
    // hide all classs
    document.getElementById('add-money-from').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transection-from').classList.add('hidden');

    // show from

    document.getElementById(id).classList.remove('hidden');
}