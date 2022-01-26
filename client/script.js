
const searchButton = document.querySelector('.submit')
const form = document.querySelector('#search-form')

  const  init= async (e) => {
   
        e.preventDefault();
        
        const randonInput = e.target.text.value;

        if(randonInput.toLowerCase() === "random")
        {
            getRandom();
        }
        try{

      

            const response = await fetch('http://localhost:3000/artists')
    
            const data = await response.json()
    
            setData(data)
            
            
    
        } catch (err) {
            console.log(err)
        }
    }
  
    function getRandom(){

      fetch('http://localhost:3000/artists/random')
        .then(response => response.json()) 
        .then(json => setData(json))

    }
    function setData(artists){
        artists.forEach((artist) => appendSearch(artist));
    };

  function appendSearch(data){
    const newLi = document.createElement('li');
    const artistLink= document.createElement('a')
    artistLink.setAttribute('class', 'artist-link')
    artistLink.setAttribute('href', `${data.spotifyUrl}`)
    const artistsList = document.querySelector('#search-result');
    artistLink.textContent = `Artist: ${data.name}`;
    newLi.appendChild(artistLink);
    artistsList.append(newLi);
  }
  
  
  
form.addEventListener('submit', init)
  
