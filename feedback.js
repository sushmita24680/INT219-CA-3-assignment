document.getElementById('feedbutton').addEventListener('click',
    function(){
        document.querySelector('.bg-modal').style.position = 'flex';
    });
    document.querySelector('.close').addEventListener('click',
    function(){
        document.querySelector('.bg-modal').style.display = 'none';
  
    });