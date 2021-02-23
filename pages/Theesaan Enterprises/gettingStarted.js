document.querySelector('.backtote').addEventListener('click', ()=>{
    window.open('','_self').close();
})
function submitBtnHandler(){
    setTimeout(()=>{
        document.querySelector('.reset-btn').click();
    },500);
}
function domainChangeHandler(){
    document.querySelector('#domainName').value = document.querySelector('#domainExtension').value;
    var inp = document.querySelector("#domainName");
    if(inp.createTextRange){
        var part = inp.createTextRange();
        part.move("character", 0);
        part.select();
    }
    else if(inp.setSelectionRange){
        inp.setSelectionRange(0,0);
    }
    inp.focus();
}