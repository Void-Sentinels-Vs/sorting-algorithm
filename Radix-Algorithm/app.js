





// Functions for radix sort algorithm (get array and return a sorted array)
function radixSort(array) {
    
    /*
    1 - "Math.max" (method to find the largest number)
    ## (finglish) in kar moshakhas mikonad ta che martabe i bayad moratab sazi anjam beshe (1,10,100,100,...)
    2 - "...array" (Convert array to separate numbers)
    */
   const maxNumber = Math.max(...array)
   
   // (finglish) moshakhas mikonad moratab sazi (toye on lahze) bar asas kodam ragham anjam shavad (start az 1 > 10,100,...)
   let digitPlace = 1;
   
   /*   
   This loop run until : digitPlace > maxNumber
   (finglish) "Math.floor" (sahih mandan ragham jari *elzami*) 
   */
  while (Math.floor(maxNumber / digitPlace) > 0) {
      
      // (finglish) jayii baraye negah dari adad ha (10 ta misazim be tedad argham 0-9)
      let bins = [[], [], [], [], [], [], [], [], [], []];
      
      // 
      for (let num of array) {
          const digit = Math.floor(num / digitPlace) % 10;
          bins[digit].push(num);
        }
        
        // 
        array = [].concat(...bins);
        
        
        
        // (finglish) raftan be martabe haye badi (10,100,...)
        digitPlace *= 10;
    }
    // output 
    return array;
}



//============================================================================

// select input for get value
const userInput = document.querySelector("#array-input")
// select button
const btn = document.getElementById(".btnSave");
// select div for show output
const result = document.getElementById("#output");

//============================================================================


// giving button an event listener
btn.addEventListener("click",selectionSort);
// now the function itself
function selectionSort() {
  //getting the input array
  const inputValue = input.value;
  // converting the string to an array using JSON.parse
  const array = JSON.parse(inputValue);
  // calling the radix function
  radixSort(array);
  // converting the array to a string
  const resultValue = JSON.stringify(array);
  // showing the result
  result.textContent = resultValue;
  
}