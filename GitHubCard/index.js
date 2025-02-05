/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
usernames =['allenben746', 'justsml', 'noahfranco', 'RealWillBrooks', 'chrisipanaque', 'METACEO']

  


  usernames.forEach((username) => {
  axios.get(`https://api.github.com/users/${username}`)
  .then(data => {
    const cards = document.querySelector('.cards');
    console.log(data);

    function createGitHubCard(user) {


      //Creates the boilerplate for the elements
      const card = document.createElement('div')
      const profileImg = document.createElement('img')
      const cardInfo = document.createElement('div')
      const name = document.createElement('h3')
      const username = document.createElement('p')
      const location = document.createElement('p')
      const linkContainer = document.createElement('p')
      const link = document.createElement('a')
      const followerCount = document.createElement('p')
      const followingCount = document.createElement('p')
      const bio = document.createElement('p')
      
      console.log(name);
      //Appends elements
      card.appendChild(profileImg);
      card.appendChild(cardInfo);

      cardInfo.appendChild(name);
      cardInfo.appendChild(username);
      cardInfo.appendChild(linkContainer);
      cardInfo.appendChild(followerCount);
      cardInfo.appendChild(followingCount);
      cardInfo.appendChild(bio);
      cardInfo.appendChild(name);
  
      linkContainer.appendChild(link);

      //Sets Class
      card.classList.add('card');
      name.classList.add('name');
      username.classList.add('username');
    
      //Gives elements data from the user parameter
      profileImg.src = user.data.avatar_url;
      name.textContent = user.data.name;
      username.textContent = `${user.data.login}`;
      location.textContent = `${user.data.location}`
      link.href = user.data.html_url;
      followerCount.textContent = `${user.data.followers} followers.`;
      followerCount.textContent = `Following ${user.data.following} users`;
      bio.textContent = `${user.data.bio}`;

      cards.appendChild(card);
    }



    createGitHubCard(data);
  })
}
)





/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/








/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

