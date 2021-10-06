function urlSlug(title) {
    return title
       .split(" ")
       .filter(substr => substr !== "")
       .join("-")
       .toLowerCase();
}

console.log(urlSlug(" Winter Is  Coming"))