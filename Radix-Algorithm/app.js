



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

        




    }
    // output 
    return array;
}