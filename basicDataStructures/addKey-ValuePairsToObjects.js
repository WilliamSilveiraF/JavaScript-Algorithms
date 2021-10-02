const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
};

tekkenCharacter.origin = 'South Korea';

console.log(tekkenCharacter);

tekkenCharacter['hair color'] = 'dyed orange'; //Pode ser essa sintaxe

console.log(tekkenCharacter);

const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';

console.log(tekkenCharacter)