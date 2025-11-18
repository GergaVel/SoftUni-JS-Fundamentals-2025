function travelTime(arr) {
    let destinations = {};

    // STEP 1: Parse input and store cheapest prices
    for (let line of arr) {
        let [country, town, price] = line.split(" > ");
        price = Number(price);

        if (!destinations[country]) {
            destinations[country] = {};
        }

        // Keep the cheapest price for each town
        if (!destinations[country][town] || price < destinations[country][town]) {
            destinations[country][town] = price;
        }
    }

    // STEP 2: Sort countries alphabetically (case-insensitive)
    let sortedCountries = Object.keys(destinations)
        .sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));

    // STEP 3: Sort towns by price and print output
    for (let country of sortedCountries) {
        let towns = Object.entries(destinations[country])
            .sort((a, b) => a[1] - b[1]); // sort by price

        let output = `${country} -> `;

        for (let [town, price] of towns) {
            output += `${town} -> ${price} `;
        }

        console.log(output.trim());
    }
}


travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);