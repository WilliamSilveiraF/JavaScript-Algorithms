const users = [
    { name: 'John', age: 34},
    { name: 'Amy', age: 20},
    { name: 'camperCat', age: 10}
]
const sumOfAges = users.reduce((sum, user) => sum + user.age, 0)

console.log(sumOfAges);

//Retornar nessa secção
function getRating(watchList) {
    var avarageRating =
    watchList
    .filter(film => film.Director === "Christopher Nolan")
    .map(film => Number(film.imdbRating))
    .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
    watchList.filter(film => film.Director === "Christopher Nolan").length;

    return avarageRating;
}

