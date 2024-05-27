function detectGeneration() {
    const birthYear = parseInt(document.getElementById('birthYear').value);
    let generation;

    if (birthYear >= 1883 && birthYear <= 1900) {
        generation = "Lost";
    } else if (birthYear >= 1901 && birthYear <= 1927) {
        generation = "Greatest";
    } else if (birthYear >= 1928 && birthYear <= 1945) {
        generation = "Silent";
    } else if (birthYear >= 1946 && birthYear <= 1964) {
        generation = "Baby Boomer";
    } else if (birthYear >= 1965 && birthYear <= 1980) {
        generation = "Generation X";
    } else if (birthYear >= 1981 && birthYear <= 1996) {
        generation = "Millennial";
    } else if (birthYear >= 1997 && birthYear <= 2012) {
        generation = "Generation Z";
    } else if (birthYear >= 2013) {
        generation = "Generation Alpha";
    } else {
        generation = "Invalid year. Please enter a valid birth year.";
    }

    if (generation !== "Invalid year. Please enter a valid birth year.") {
        document.getElementById('result').innerHTML = `You were born in the<br>"${generation}"<br>Generation.`;
    } else {
        document.getElementById('result').textContent = generation;
    }

}

function clearData() {
    document.getElementById('birthYear').value = '';
    document.getElementById('result').textContent = '';
}
