function arenaTier(input) {
    let gladiators = {};

    for (let line of input) {
        if (line === "Ave Cesar") {
            break;
        }

        if (line.includes("->")) {
            let [gladiator, technique, skillStr] = line.split(" -> ");
            let skill = Number(skillStr);

            if (!gladiators.hasOwnProperty(gladiator)) {
                gladiators[gladiator] = {};
            }

            if (!gladiators[gladiator].hasOwnProperty(technique) || gladiators[gladiator][technique] < skill) {
                gladiators[gladiator][technique] = skill;
            }

        } else if (line.includes("vs")) {
            let [gladiator1, gladiator2] = line.split(" vs ");

            if (gladiators.hasOwnProperty(gladiator1) && gladiators.hasOwnProperty(gladiator2)) {
                let techniques1 = Object.keys(gladiators[gladiator1]);
                let techniques2 = Object.keys(gladiators[gladiator2]);
                let common = techniques1.filter(t => techniques2.includes(t));

                if (common.length > 0) {
                    let total1 = Object.values(gladiators[gladiator1]).reduce((a,b)=>a+b,0);
                    let total2 = Object.values(gladiators[gladiator2]).reduce((a,b)=>a+b,0);

                    if (total1 > total2) {
                        delete gladiators[gladiator2];
                    } else if (total2 > total1) {
                        delete gladiators[gladiator1];
                    }
                }
            }
        }
    }

    // Sort gladiators by total skill descending, then name ascending
    let sortedGladiators = Object.entries(gladiators)
        .map(([name, skills]) => {
            let totalSkill = Object.values(skills).reduce((a,b)=>a+b,0);
            return {name, skills, totalSkill};
        })
        .sort((a,b) => b.totalSkill - a.totalSkill || a.name.localeCompare(b.name));

    for (let g of sortedGladiators) {
        console.log(`${g.name}: ${g.totalSkill} skill`);

        // Sort techniques descending by skill, then name ascending
        let sortedTechniques = Object.entries(g.skills)
            .sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        for (let [tech, skill] of sortedTechniques) {
            console.log(`- ${tech} <!> ${skill}`);
        }
    }
}
