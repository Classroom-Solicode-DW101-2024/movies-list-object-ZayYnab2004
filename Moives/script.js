class Movie {
    constructor(title, description, date, rating) {
        this.title = title;         
        this.description = description; 
        this.date = date;           
        this.rating = rating;       
    }
}


let movies = [
    new Movie("Toy Story", "The iconic Pixar film about toys that come to life when humans aren't around.", 1995, 5),
    new Movie("The Lion King", "A Disney classic about a young lion's journey to becoming king.", 1994, 5),
    new Movie("Shrek", "A comedic and heartwarming story about an ogre's unlikely friendship and romance.", 2001, 4),
    new Movie("The Incredibles", "A Pixar film about a family of superheroes juggling everyday life and saving the world.", 2004, 5),
    new Movie("Moana", "A Disney adventure about a young Polynesian girl’s quest to save her island with the help of a demigod.", 2016, 5),
    new Movie("Frozen", "A Disney musical about two sisters and the power of love, with the hit song Let It Go.", 2013, 4),
    new Movie("Zootopia", "A witty, visually creative film that explores issues like prejudice and social justice in a world of anthropomorphic animals.", 2016, 7),
    new Movie("Beauty and the Beast", "The enchanting tale of a young woman and a cursed prince in a magical castle.", 1991, 5),
    new Movie("Coco", "A young boy explores the Land of the Dead in search of his family’s musical legacy.", 2017, 5),
    new Movie("Inside Out", "The emotions inside a young girl’s mind battle for control as she navigates a big life change.", 2015, 5),
];


function display(movies) {
    let tableBody = document.getElementById('movies'); 
    tableBody.innerHTML = ''; 


    for (let i = 0; i < movies.length; i++) {
        let movie = movies[i];
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${movie.title}</td>
                <td>${movie.description}</td>
                <td>${movie.date}</td>
                <td>${movie.rating}</td>
                <td><button type="button" onclick="removeMovie(${i})">Remove</button></td>
            `
            ;
            tableBody.appendChild(row); 
        }
    }


display(movies);




document.getElementById('search').addEventListener('click', function(){
    let Search = document.getElementById('Search').value;
    let table = [];

    for(let i = 0 ; i < movies.length ; i++){
        if (movies[i].title === Search){
            table.push(movies[i]);
        }
    }
    display(table);
});
function add(){
    let title=document.getElementById('title').value;
    let description=document.getElementById('description').value;
    let date =document.getElementById('date').value;
    let rating =document.getElementById('rating').value;
    if (title, description, date, rating) {
        let newMovie = new Movie(title, description, date, rating);
        movies.push(newMovie);

  
        document.getElementById('myForm').reset();
        document.getElementById('myForm')
        display(movies);  
    
}
}
function removeMovie(index) {
    movies.splice(index, 1);  
    display(movies);  
}

function showAddForm() {
    document.getElementById('myForm').style.display = 'block'; 
    document.getElementById('moviesTable').style; 
}
function showMovies() {
    document.getElementById('myForm').style.display = 'none';
    document.getElementById('moviesTable').style.display = 'block';  
    display(movies)}
