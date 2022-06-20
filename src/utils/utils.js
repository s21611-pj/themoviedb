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

export function getMovieTrailerId(trailerArray) {
    if(trailerArray.length === 0) {
        return ""
    }
    for(let i = 0; i < trailerArray.length; i++) {
        if (trailerArray[i].official === true && trailerArray[i].site === "YouTube") {
            return trailerArray[i].key;
        }
    }
    return trailerArray[0].key;
}