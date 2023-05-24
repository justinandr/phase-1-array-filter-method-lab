function findMatching(array, name){
    return array.filter(function(match){
        return name.toLowerCase() === match.toLowerCase()
    })
}

function fuzzyMatch(array, name){
    return array.filter(function(match){
        return match.startsWith(name)
    })
}

function matchName(array, name){
    return array.filter(function(match){
        return match.name === name
    })
} 