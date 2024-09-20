
document.getElementById('loginBtn').addEventListener('click',function(e){
    e.preventDefault();

    
    let pinNumber = getInputId('password');
    let accountBalance = getInputText('balance');


    if (document.getElementById('number').value === "" || document.getElementById('password').value === "") {
        alert("Please enter both amount and PIN.");
        return; 
    }
    
  

    if( pinNumber = 1234 ){
        let inputNumber = getInputId('number');
        let newBalance = accountBalance + inputNumber  ;
        document.getElementById('balance').innerText= newBalance;


        
        let p = document.createElement('p');
        p.innerText = `
            Money Added- ${inputNumber}TK. New Balance - ${newBalance}TK. 
        `
        p.classList.add('p-2')
        p.classList.add('border')
        p.classList.add('bg-blue-600')
        p.classList.add('font-bold')
        p.classList.add('text-md')
        p.classList.add('text-white')

        document.getElementById('transection-from').appendChild(p);


       
        
    }else{
        alert('wrong pin! Try Again');
    } 

    document.getElementById('password').value = ''
    document.getElementById('number').value = ''
    
    
})


document.getElementById('cashout-btn').addEventListener('click',function(e){
    e.preventDefault()
    
    let pinNumber = getInputId('password1');
    let accountBalance = getInputText('balance');

    if (document.getElementById('number1').value === "" || document.getElementById('password1').value === "") {
        alert("Please enter both amount and PIN.");
        return; 
    }

    if( pinNumber = 1234 ){

        let inputNumber = getInputId('number1');

        let newBalance = accountBalance - inputNumber  ;
        if(newBalance < 0){
            alert('taka nai re vai');
            return;
        }
        document.getElementById('balance').innerText= newBalance;

        let p = document.createElement('p');
        p.innerText = `
            Cash Out- ${inputNumber}TK. New Balance - ${newBalance}TK. 
        `
        p.classList.add('p-2')
        p.classList.add('border')
        p.classList.add('bg-rose-500')
        p.classList.add('font-bold')
        p.classList.add('text-md')
        p.classList.add('text-white')

        document.getElementById('transection-from').appendChild(p);

    }else{
        alert('wrong pin! Try Again');
    } 

     document.getElementById('password1').value = ''
     document.getElementById('number1').value = ''
})



