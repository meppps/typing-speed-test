
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
            console.log(char);
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

input.addEventListener('input',(e)=>{
    console.log(e.target.value);
    let value = e.target.value;
    let currentWord = words[0];

    if(value === currentWord){
        console.log('match');
        words.shift()
        // console.log('new word: ..... ',words[0])
        clearInput();
    }
});

createOutput(words);