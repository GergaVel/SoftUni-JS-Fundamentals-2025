function netherRealms(str) {
    let healthPattern = /[^0-9+\-*/.]/g;
    let damagePattern = /[+-]?\d+(\.\d+)?/g;
    let factorSignPattern = /[*\/]/g;

    let demons = str.split(/\s*,\s*/); //splitvane po regex

    let demonsStats = [];

    for (demon of demons){
        let healthMatches = demon.match(healthPattern); //retenrs an arr of each char
        let health = 0;

        for (let match of healthMatches){
            let ascii = match.charCodeAt();
            health += ascii;
        }
    }


}

netherRealms('M3ph-0.5s-0.5t0.0**');