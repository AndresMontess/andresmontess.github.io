function copiarUrl(){
    let url=document.getElementById('gmail');
    let button=document.getElementById('CopyButton');

    navigator.clipboard.writeText(url.textContent);

}