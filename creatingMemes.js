function createMeme(event) {
    event.preventDefault();

    let i=document.querySelectorAll('input');
    let all=Array.from(i);
    console.log(all);
    let title=all[0];
    let memeImage=all[1];
    let text=document.getElementById('description');

    let promise=fetch(`https://crlibrary-ce965-default-rtdb.firebaseio.com/Lybrary.json`,{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({title:title.value,memeImage:memeImage.value,textArea:text.value})
    });

    localStorage.setItem('title',title.value);
    localStorage.setItem('meme',memeImage.value);
    localStorage.setItem('text',text.value);

    title.value='';
    memeImage.value='';
    text.value='';


}