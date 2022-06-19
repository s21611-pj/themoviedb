export function getMovieDirector(crewArray) {
    for(let i = 0; i < crewArray.length; i++) {
        if (crewArray[i].job === "Director") {
            return crewArray[i].name;
        }
    }
    return "Not Found Director"
}

export function getMovieMainActors(castArray) {
    let result = castArray.map(element => element.name);
    return result.slice(0, 5).join(", ");
}