const prepareTea = () => 'greenTea';  //Atenção a sintaxe de função de seta

const getTea = (numOfCups) => {
    const teaCups = [];
    for (let cups = 1; cups <= numOfCups; cups += 1) {
        teaCups.push(prepareTea());
    }
    return teaCups;
};
const tea4TeamFCC = getTea(23);

console.log(tea4TeamFCC);