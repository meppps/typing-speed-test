
const section = document.querySelector('.text');
const input = document.querySelector('.input');

var words = ['The ','quick ','brown ', 'fox ', 'jumps ' ,'over ', 'the ', 'sleeping ', 'dog. ', 'If ','you ', 'know ', 'how ', 'to ', 'type ', 'you ', 'should ', 'score ', 'well ', 'on ', 'this ', 'test.'
];

function createOutput(words){
    words.forEach((word)=>{
        var outterSpan = document.createElement('span');
        var chars = word.split('');
        outterSpan.classList.add('outterSpan');
        // parse string
        chars.forEach((char)=>{
            // console.log(char);
            var innerSpan = document.createElement('span');
            innerSpan.classList.add('innerSpan');
            innerSpan.innerText = char;
            outterSpan.appendChild(innerSpan);
        })
        // outterSpan.innerText = word;
        section.appendChild(outterSpan);
    });
};

function clearInput(){
    input.value = '';
}

var errCount = 0;
var reservedKeys = ['Backspace','Shift']

input.addEventListener('keydown',(e)=>{
    // console.log(e.target.value);
    // console.log(e.key)
    console.log(e.key)
    let value = e.target.value;
    let currentWord = words[0];
    let currentChar = document.querySelector('.innerSpan');
    let inputChar = e.key;
    

    let wordLength = currentWord.length;
    let inputLength = value.length;



    console.log(currentWord.length)

    if(value === currentWord){

        words.shift()
        // console.log('new word: ..... ',words[0])
        clearInput();
    };
    // if(!(inputChar in reservedKeys)){
    //     console.log('fkdlsjfkld;ajlkfals;jfl;dajsk;!!!FRICKKKK')
    //     console.log(reservedKeys)
    //     console.log(inputChar)
    // }

    
    if(inputChar === currentChar.innerText && inputChar!='Shift' && inputChar!='Backspace' && errCount < 1){

        currentChar.style.color = 'green';

        currentChar.classList.remove('innerSpan');


    }else if(inputChar != currentChar.innerText && inputChar != 'Backspace'){
        currentChar.style.color = 'red';
        errCount += 1;
    }else if(inputChar == 'Backspace'){
        console.log('Backspace');
        errCount -= 1;
    }
    console.log('%c ERR CNT: ','color: yellow',errCount)


});

input.addEventListener('keypress',(e)=>{
    console.log(e.key)
})
// window.addEventListener("keydown", function(event) {
//     let str = "KeyboardEvent: key='" + event.key + "' | code='" +
//               event.code + "'";
//     let el = document.createElement("span");
//     el.innerHTML = str + "<br/>";
   
//     document.getElementById("output").appendChild(el);
//   }, true);

// input.on('keypress',()=>{
//     // console.log()
// })


createOutput(words);