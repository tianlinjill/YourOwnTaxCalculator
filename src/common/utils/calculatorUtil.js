/**
 * ReadMe: In the front side 
 * 
 * @param {*} obj e.g:{country: "Australia", incomeYear: "2021", amount: 60000}
 * @returns 
 * 
 * 1. get the country
 * 2. get the incomeYear
 * 3. add Tax brackets property according to realworld
 * 4. transform number to currency type
 * 5. return the obj
 */
export function taxCalculator(obj) {
    // step 0/5 init new tax brackets level property 
    // step 1/5: get the country
    if (obj.country === "Australia") {
        // step 2/5: get the incomeYear
        if (obj.incomeYear === "2021") {
            // step3/5: add Tax brackets property according to realworld
            obj.bracketsOne = "$0 - $18, 200";
            obj.bracketsTwo = "$18,201 - $45, 000";
            obj.bracketsThree = "$45,001 - $120, 000";
            obj.bracketsFour = "$120, 000 - $180,000";
            obj.bracketsFive = "$180,000+";
            if (obj.amount < 18201) {
                obj.bracketsOneValue = formatCurrency(0);
                obj.bracketsTwoValue = formatCurrency(0);
                obj.bracketsThreeValue = formatCurrency(0);
                obj.bracketsFourValue = formatCurrency(0);
                obj.bracketsFiveValue = formatCurrency(0);
                obj.totalValue = formatCurrency(0);
            } else if (obj.amount > 18200 && obj.amount < 45001) {// range in [18201 - 45000]
                obj.bracketsOneValue = formatCurrency(0);
                obj.bracketsTwoValue = formatCurrency((obj.amount - 18200) * 0.19);
                obj.bracketsThreeValue = formatCurrency(0);
                obj.bracketsFourValue = formatCurrency(0);
                obj.bracketsFiveValue = formatCurrency(0);
                obj.totalValue = obj.bracketsTwoValue;
            } else if (obj.amount > 45000 && obj.amount < 120001) {// range in [45001 - 120000]
                obj.bracketsOneValue = formatCurrency(0);
                obj.bracketsTwoValue = formatCurrency((45000 - 18200) * 0.19);
                obj.bracketsThreeValue = formatCurrency((obj.amount - 45000) * 0.325);
                obj.bracketsFourValue = formatCurrency(0);
                obj.bracketsFiveValue = formatCurrency(0);
                obj.totalValue = formatCurrency((45000 - 18200) * 0.19 + (obj.amount - 45000) * 0.325);
            } else if (obj.amount > 120000 && obj.amount < 180001) {// range in [120001 - 180000]
                obj.bracketsOneValue = formatCurrency(0);
                obj.bracketsTwoValue = formatCurrency((45000 - 18200) * 0.19);
                obj.bracketsThreeValue = formatCurrency((120000 - 45000) * 0.325);
                obj.bracketsFourValue = formatCurrency((obj.amount - 120000) * 0.37);
                obj.bracketsFiveValue = formatCurrency(0);
                obj.totalValue = formatCurrency((45000 - 18200) * 0.19 + (120000 - 45000) * 0.325
                    + (obj.amount - 120000) * 0.37);
            } else {// range larger than 180000
                obj.bracketsOneValue = formatCurrency(0);
                obj.bracketsTwoValue = formatCurrency((45000 - 18200) * 0.19);
                obj.bracketsThreeValue = formatCurrency((120000 - 45000) * 0.325);
                obj.bracketsFourValue = formatCurrency((180000 - 120000) * 0.37);
                obj.bracketsFiveValue = formatCurrency((obj.amount - 180000) * 0.45);
                obj.totalValue = formatCurrency((45000 - 18200) * 0.19 + (120000 - 45000) * 0.325
                    + (180000 - 120000) * 0.37 + (obj.amount - 180000) * 0.45);
            }
            
        } else {//incomeYear is 2020
            obj.bracketsOne = "$0 - $18, 200";
            obj.bracketsTwo = "$18,201 - $37, 000";
            obj.bracketsThree = "$37,001 - $90, 000";
            obj.bracketsFour = "$90, 001 - $180,000";
            obj.bracketsFive = "$180,000+";
            if (obj.amount < 18201) {
                obj.bracketsOneValue = formatCurrency(0);
                obj.bracketsTwoValue = formatCurrency(0);
                obj.bracketsThreeValue = formatCurrency(0);
                obj.bracketsFourValue = formatCurrency(0);
                obj.bracketsFiveValue = formatCurrency(0);
                obj.totalValue = formatCurrency(0);
            } else if (obj.amount > 18200 && obj.amount < 37001) {// range in [18201 - 45000]
                obj.bracketsOneValue = formatCurrency(0);
                obj.bracketsTwoValue = formatCurrency((obj.amount - 18200) * 0.19);
                obj.bracketsThreeValue = formatCurrency(0);
                obj.bracketsFourValue = formatCurrency(0);
                obj.bracketsFiveValue = formatCurrency(0);
                obj.totalValue = obj.bracketsTwoValue;
            } else if (obj.amount > 37000 && obj.amount < 120001) {// range in [45001 - 120000]
                obj.bracketsOneValue = formatCurrency(0);
                obj.bracketsTwoValue = formatCurrency((37000 - 18200) * 0.19);
                obj.bracketsThreeValue = formatCurrency((obj.amount - 37000) * 0.325);
                obj.bracketsFourValue = formatCurrency(0);
                obj.bracketsFiveValue = formatCurrency(0);
                obj.totalValue = formatCurrency((37000 - 18200) * 0.19 + (obj.amount - 37000) * 0.325);
            } else if (obj.amount > 90000 && obj.amount < 180001) {// range in [120001 - 180000]
                obj.bracketsOneValue = formatCurrency(0);
                obj.bracketsTwoValue = formatCurrency((37000 - 18200) * 0.19);
                obj.bracketsThreeValue = formatCurrency((90000 - 37000) * 0.325);
                obj.bracketsFourValue = formatCurrency((obj.amount - 90000) * 0.37);
                obj.bracketsFiveValue = formatCurrency(0);
                obj.totalValue = formatCurrency((37000 - 18200) * 0.19 + (90000 - 37000) * 0.325
                    + (obj.amount - 90000) * 0.37);
            } else {// range larger than 180000
                obj.bracketsOneValue = formatCurrency(0);
                obj.bracketsTwoValue = formatCurrency((37000 - 18200) * 0.19);
                obj.bracketsThreeValue = formatCurrency((90000 - 37000) * 0.325);
                obj.bracketsFourValue = formatCurrency((180000 - 90000) * 0.37);
                obj.bracketsFiveValue = formatCurrency((obj.amount - 180000) * 0.45);
                obj.totalValue = formatCurrency((37000 - 18200) * 0.19 + (90000 - 37000) * 0.325
                    + (180000 - 90000) * 0.37 + (obj.amount - 180000) * 0.45);
            }
        }
     }

     if (obj.country === 'New Zealand') {
        if (obj.incomeYear === "2021") { // year 2021 
            // step3/5: add Tax brackets property according to realworld
            obj.bracketsOne = "$0 - $14, 000";
            obj.bracketsTwo = "$14, 001 - $48, 000";
            obj.bracketsThree = "$48,001 - $70, 000";
            obj.bracketsFour = "$70, 001 - $180,000";
            obj.bracketsFive = "$180,000+";
            if (obj.amount < 14000) {
                obj.bracketsOneValue = formatCurrency((obj.amount) * 0.105);
                obj.bracketsTwoValue = formatCurrency(0);
                obj.bracketsThreeValue = formatCurrency(0);
                obj.bracketsFourValue = formatCurrency(0);
                obj.bracketsFiveValue = formatCurrency(0);
                obj.totalValue = formatCurrency((obj.amount) * 0.105);
            } else if (obj.amount > 14000 && obj.amount < 48001) {// range in [14000 - 48001]
                obj.bracketsOneValue = formatCurrency(14000 * 0.105);
                obj.bracketsTwoValue = formatCurrency((obj.amount - 14000) * 0.175);
                obj.bracketsThreeValue = formatCurrency(0);
                obj.bracketsFourValue = formatCurrency(0);
                obj.bracketsFiveValue = formatCurrency(0);
                obj.totalValue = formatCurrency((14000 * 0.105) + (obj.amount - 14000) * 0.175);
            } else if (obj.amount > 48000 && obj.amount < 70001) {// range in [48001 - 70000]
                obj.bracketsOneValue = formatCurrency(14000 * 0.105);
                obj.bracketsTwoValue = formatCurrency((48000 - 14000) * 0.175);
                obj.bracketsThreeValue = formatCurrency((obj.amount - 48000) * 0.3);
                obj.bracketsFourValue = formatCurrency(0);
                obj.bracketsFiveValue = formatCurrency(0);
                obj.totalValue = formatCurrency(14000 * 0.105+(48000 - 14000) * 0.175 + (obj.amount - 48000) * 0.3);
            } else if (obj.amount > 70000 && obj.amount < 180001) {// range in [70000 - 180000]
                obj.bracketsOneValue = formatCurrency(14000 * 0.105);
                obj.bracketsTwoValue = formatCurrency((48000 - 14000) * 0.175);
                obj.bracketsThreeValue = formatCurrency((70000 - 48000) * 0.3);
                obj.bracketsFourValue = formatCurrency((obj.amount - 70000) * 0.33);
                obj.bracketsFiveValue = formatCurrency(0);
                obj.totalValue = formatCurrency(14000 * 0.105 + (48000 - 14000) * 0.175
                    + (70000 - 48000) * 0.3 + (obj.amount - 70000) * 0.33);
            } else {// range larger than 180000
                obj.bracketsOneValue = formatCurrency(14000 * 0.105);
                obj.bracketsTwoValue = formatCurrency((48000 - 14000) * 0.175);
                obj.bracketsThreeValue = formatCurrency((70000 - 48000) * 0.3);
                obj.bracketsFourValue = formatCurrency((180000 - 70000) * 0.33);
                obj.bracketsFiveValue = formatCurrency((obj.amount - 180000) * 0.39);
                obj.totalValue = formatCurrency(14000 * 0.105 + (48000 - 14000) * 0.175
                    + (70000 - 48000) * 0.3 + (obj.amount - 70000) * 0.33 + (obj.amount-180000)*0.39);
            }
        } else {
             // step3/5: add Tax brackets property according to realworld
            obj.bracketsOne = "$0 - $14, 000";
            obj.bracketsTwo = "$14, 001 - $48, 000";
            obj.bracketsThree = "$48,001 - $70, 000";
            obj.bracketsFour = "$70, 001 - $180,000";
            obj.bracketsFive = "$180,000+";
            if (obj.amount < 14000) {
                obj.bracketsOneValue = formatCurrency((obj.amount) * 0.105);
                obj.bracketsTwoValue = formatCurrency(0);
                obj.bracketsThreeValue = formatCurrency(0);
                obj.bracketsFourValue = formatCurrency(0);
                obj.bracketsFiveValue = formatCurrency(0);
                obj.totalValue = formatCurrency((obj.amount) * 0.105);
            } else if (obj.amount > 14000 && obj.amount < 48001) {// range in [14000 - 48001]
                obj.bracketsOneValue = formatCurrency(14000 * 0.105);
                obj.bracketsTwoValue = formatCurrency((obj.amount - 14000) * 0.175);
                obj.bracketsThreeValue = formatCurrency(0);
                obj.bracketsFourValue = formatCurrency(0);
                obj.bracketsFiveValue = formatCurrency(0);
                obj.totalValue = formatCurrency((14000 * 0.105) + (obj.amount - 14000) * 0.175);
            } else if (obj.amount > 48000 && obj.amount < 70001) {// range in [48001 - 70000]
                obj.bracketsOneValue = formatCurrency(14000 * 0.105);
                obj.bracketsTwoValue = formatCurrency((48000 - 14000) * 0.175);
                obj.bracketsThreeValue = formatCurrency((obj.amount - 48000) * 0.3);
                obj.bracketsFourValue = formatCurrency(0);
                obj.bracketsFiveValue = formatCurrency(0);
                obj.totalValue = formatCurrency(14000 * 0.105+(48000 - 14000) * 0.175 + (obj.amount - 48000) * 0.3);
            } else if (obj.amount > 70000 && obj.amount < 180001) {// range in [70000 - 180000]
                obj.bracketsOneValue = formatCurrency(14000 * 0.105);
                obj.bracketsTwoValue = formatCurrency((48000 - 14000) * 0.175);
                obj.bracketsThreeValue = formatCurrency((70000 - 48000) * 0.3);
                obj.bracketsFourValue = formatCurrency((obj.amount - 70000) * 0.33);
                obj.bracketsFiveValue = formatCurrency(0);
                obj.totalValue = formatCurrency(14000 * 0.105 + (48000 - 14000) * 0.175
                    + (70000 - 48000) * 0.3 + (obj.amount - 70000) * 0.33);
            } else {// range larger than 180000
                obj.bracketsOneValue = formatCurrency(14000 * 0.105);
                obj.bracketsTwoValue = formatCurrency((48000 - 14000) * 0.175);
                obj.bracketsThreeValue = formatCurrency((70000 - 48000) * 0.3);
                obj.bracketsFourValue = formatCurrency((180000 - 70000) * 0.33);
                obj.bracketsFiveValue = formatCurrency((obj.amount - 180000) * 0.39);
                obj.totalValue = formatCurrency(14000 * 0.105 + (48000 - 14000) * 0.175
                    + (70000 - 48000) * 0.3 + (obj.amount - 70000) * 0.33 + (obj.amount-180000)*0.39);
            }
        }
    }
     // step 5/5: return obj
        return obj
}


// step 4/5: transform number to currency type
export function formatCurrency(value) {
    return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//let a = { country: "Australia", incomeYear: "2021", amount: 60000 };
//console.log(taxCalculator(a))
