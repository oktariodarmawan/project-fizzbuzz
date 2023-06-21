

const btn1 = document.getElementById('tombol1')

btn1.addEventListener('click', function(){
    let angka = document.getElementById('angka').value
    let output = document.getElementById('output');
    output.innerHTML = ""
    if (angka == 0){
      let paragraph = document.createElement('p')
      output.appendChild(paragraph)
      paragraph.innerHTML = "Invalid Input"
    }

    else{
    for (var i = 1; i <= angka; i++) {
    
      if (i % 3 === 0 && i % 5 === 0) {
      let paragraph = document.createElement('p')
      output.appendChild(paragraph)
      paragraph.innerHTML =  "FizzBuzz ";
        
      } else if (i % 3 === 0) {
      let paragraph = document.createElement('p')
      output.appendChild(paragraph)
      paragraph.innerHTML = "Fizz ";
        
      } else if (i % 5 === 0) {
        let paragraph = document.createElement('p')
      output.appendChild(paragraph)
      paragraph.innerHTML = "Buzz ";
      } else {
      let paragraph = document.createElement('p')
      output.appendChild(paragraph)
      paragraph.innerHTML =  i + " ";
      }
    }
}

});



function hapus(){
        location.reload()
}
