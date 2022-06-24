export function getMovieDirector(crewArray) {
    for (let i = 0; i < crewArray.length; i++) {
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
    if (trailerArray.length === 0) {
        return ""
    }
    for (let i = 0; i < trailerArray.length; i++) {
        if (trailerArray[i].official === true && trailerArray[i].site === "YouTube") {
            return trailerArray[i].key;
        }
    }
    return trailerArray[0].key;
}

export function checkNotEmptyMovieRate(movieRateInput) {
    return movieRateInput.trim().length !== 0
}

export function checkInRangeMovieRate(movieRateInput) {
    const parsedMovieRateInput = Number(movieRateInput.trim())
    return parsedMovieRateInput >= 0.5 && parsedMovieRateInput <= 10 
}

export function checkMultiplyOfHalfMovieRate(movieRateInput) {
    const parsedMovieRateInput = Number(movieRateInput.trim())
    return parsedMovieRateInput % 0.5 === 0
}

export function checkIfIsNumberMovieRate(movieRateInput) {
    const trimmedMovieRateInput = movieRateInput.trim()
    return !isNaN(trimmedMovieRateInput)
}


export function formatMovieRate(movieRateInput) {
    return Number(movieRateInput.trim())
}