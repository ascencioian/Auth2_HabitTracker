var star = document.getElementsByClassName("fa-star");
var trash = document.getElementsByClassName("fa-trash");

Array.from(star).forEach(function(element) {
      element.addEventListener('click', function(){
        const habit = this.parentNode.parentNode.childNodes[3].innerText

        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'habit': habit,
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true) // promise request is resolved from server. reload page to update
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const habit = this.parentNode.parentNode.childNodes[3].innerText
        
         //node tool
         const parent = this.parentNode.parentNode.childNodes
         for(let i=0; i<parent.length; i++){
           console.log(parent[i])
         }
        
        
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'habit': habit,
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});