//Creating the title and description
const pageTitle = "My Movie Collection";
const pageDescription = "Welcome to my personal movie collection!";

//Creation of elements (header)
const header = document.createElement('header');
const titleElement = document.createElement('h1');
const descriptionElement = document.createElement('p');

//adding text to items
titleElement.textContent = pageTitle;
descriptionElement.textContent = pageDescription;

// Create a wrapper div for the title and description
const titleAndDescriptionWrapper = document.createElement('div');
titleAndDescriptionWrapper.classList.add('title-and-description');

// Add title and description to the wrapper
titleAndDescriptionWrapper.appendChild(titleElement);
titleAndDescriptionWrapper.appendChild(descriptionElement);

// Adding the wrapper to the header
header.appendChild(titleAndDescriptionWrapper);

// Add header to the body 
document.body.insertBefore(header, document.getElementById('movieContainer'));


 //Function for add a img before the title
 function insertProfilePicture() {
    //Create elements img
    const imgElement = document.createElement('img');
    imgElement.src = 'assets/main bluelight .jpeg';
    imgElement.alt = 'Profile-Picture';
    imgElement.classList.add('img');

    //add img before title
    const header = document.querySelector('body > header');
    header.insertBefore(imgElement,header.firstChild);
 }

 insertProfilePicture();


 const collection = [
    {
      name: "Jurassic Park",
      director: "Steven Spielberg",
      releaseYear: 1993,
      picture: "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg",
      genre: ["Science fiction", "Action"],
      cast: [
        "Sam Neill",
        "Jeff Goldblum",
      ],
      description: "Jurassic Park is a 1993 science fiction action film directed by Steven Spielberg. It is based on the 1990 novel of the same name by Michael Crichton, with a screenplay written by Crichton and David Koepp."
    },
    {
      name: "Jurassic World",
      director: "Colin Trevorrow",
      releaseYear: 2015,
      picture: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Jurassic_World_poster.jpg/220px-Jurassic_World_poster.jpg",
      genre: ["Science fiction", "Action"],
      cast: [
        "Chris Pratt",
        "Bryce Dallas Howard",
      ],
      description: "Jurassic World is a 2015 American science fiction action film directed by Colin Trevorrow, who co-wrote the screenplay with Rick Jaffa, Amanda Silver, and Derek Connolly from a story by Jaffa and Silver."
    },

    {
        name: "The Wolf of Wall Street",
        director: "	Martin Scorsese",
        releaseYear: 2013,
        picture: "https://upload.wikimedia.org/wikipedia/en/d/d8/The_Wolf_of_Wall_Street_%282013%29.png",
        genre: ["Mystery", "Comedy"],
        cast: [
          "Leonardo DiCaprio",
          "Jonah Hill",
        ],
        description:"The Wolf of Wall Street is a 2013 American epic biographical black comedy crime film co-produced and directed by Martin Scorsese. "
    },

    {
        name: "A-Team",
        director: "Joe Carnahan",
        releaseYear: 2015,
        picture: "https://upload.wikimedia.org/wikipedia/it/thumb/0/01/A-Team_film.jpg/260px-A-Team_film.jpg",
        genre: ["Adventure", "Action"],
        cast: [
          "Liam Neeson",
          "Brdley Cooper",
        ],
        description: "A group of Iraq War veterans is framed for a crime they didn't commit. They will try in every way to clear themselves of the accusations and suspicions of the American army."
      },
      {
        name: "Shooter",
        director: "Lorenzo di Bonaventura",
        releaseYear: 2007,
        picture: "https://upload.wikimedia.org/wikipedia/it/thumb/e/ed/Shooter.png/520px-Shooter.png",
        genre: ["Thriller", "Action"],
        cast: [
          "Mark Wahlberg",
          "Kate Mara",
        ],
        description: "Bob Lee Swagger, one of the world's great marksmen and the son of a Medal of Honor recipient, is a loner living in the Rockies. He's left the military, having been hung out to dry in a secret Ethiopian mission a few years before."
      },
      {
        name: "Jumanji : The next Level",
        director: "Jake Kasdan",
        releaseYear: 2019,
        picture: "https://m.media-amazon.com/images/M/MV5BODUxNzE5MDI1NV5BMl5BanBnXkFtZTgwNTAwNzE2MzI@._V1_.jpg",
        genre: ["Adventure", "Action"],
        cast: [
          "Dwayne Johnson",
          "Kevin Hart",
        ],
        description: "Jumanji: The Next Level is a 2019 American fantasy adventure film directed by Jake Kasdan, who co-wrote the script with Jeff Pinkner and Scott Rosenberg."
      },
      {
        name: "Hangover",
        director: "Todd Phillips",
        releaseYear: 2009,
        picture: "https://images-2.rakuten.tv/storage/snapshot/shot/512edf8f-567c-4bb8-8ee5-f27a46d5fedc-snapshot-1590665214.jpeg",
        genre: ["Comedy", "Thriler"],
        cast: [
          "Bradley Cooper",
          "Ed Helms",
        ],
        description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing."
      },
      {
        name: "Friends with Benefits",
        director: "Will Gluck",
        releaseYear: 2011,
        picture: "https://m.media-amazon.com/images/S/pv-target-images/dfd6744a35cde686a3ec28dd0fc4df15a3bda7a00faeda1886c9917ac77c3365._SX1080_FMjpg_.jpg",
        genre: ["Comedy", "Romantic"],
        cast: [
          "Justin Timberlake",
          "Mila Kunis",
        ],
        description: "Friends with Benefits is a 2011 American romantic comedy film directed by Will Gluck and starring Justin Timberlake and Mila Kunis. "
      },
      {
        name: "Baywatch",
        director:"Seth Gordon",
        releaseYear: 2017,
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1L6KS1DB9Tsvr-p3ZCIZdSns20zoWGvyot_uOFkdZA&s",
        genre: ["Comedy", "Action" ],
        cast: [
          "Dwayne Johnson",
          "Zac Efron",
        ],
        description: "Devoted lifeguard Mitch Buchannon butts heads with a brash new recruit, as they uncover a criminal plot that threatens the future of the bay. "
      },
      {
        name: "Venom",
        director: "Ruben Fleischer",
        releaseYear: 2018,
        picture: "https://www.sciencesetavenir.fr/assets/img/2018/10/09/cover-r4x3w1200-5bbcdad1929ba-capture-d-ecran-2018-10-09-a-15-12-24.jpg",
        genre: [ "Action" , "Science Fiction", "Adventure"],
        cast: [
          "Tom Hardy",
          "Michelle Williams",
        ],
        description: "The film is the film adaptation of the Marvel comics, created by David Michelinie and Todd McFarlane, starring Venom, one of Spider-Man's antagonists. "
      },
  ];

  function createFilmCards() {
    const movieContainer = document.getElementById('movieContainer');

    collection.forEach(film => {
        // Create elements for each film 
        const filmCard = document.createElement('div');
        filmCard.classList.add('film-card');

        // Create a container for the year and genre
        const metadataContainer = document.createElement('div');
        metadataContainer.classList.add('metadata');
        metadataContainer.innerHTML = `
            <p class="year">${film.releaseYear}</p>
            <p class="genre">${film.genre.join(', ')}</p>
        `;

        // Add the movie data to the element
        filmCard.innerHTML = 
        ` <img src="${film.picture}" alt="${film.name}" class="film-image">
        <div class="film-details">
            <div class="metadata">${film.releaseYear} | ${film.genre.join(', ')}</div>
            <h2>${film.name}</h2>
            <p><strong></strong> ${film.director}</p>
            <p><strong></strong> ${film.cast.join(', ')}</p>
            <p><strong></strong> ${film.description}</p>
        </div>
    `;
        // Add the film card to the film container
        movieContainer.appendChild(filmCard);

       
    });
}




document.addEventListener('DOMContentLoaded', createFilmCards);
