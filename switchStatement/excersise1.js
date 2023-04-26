function language(language) {
    switch (language) {
        case 'chinese':
            console.log('MOST number of native speakers!');
            break;
        case 'spanish':
            console.log('2nd place in number of native speakers');
            break;
        case 'english':
            console.log('3nd place in number of native speakers');
            break;
        case 'hindi':
            console.log('4th place in number of native speakers');
            break;
        case 'arabic':
            console.log('5th place in number of native speakers');
            break;
        default:
            console.log('Great language too, but not many people speak it... :(');
            break;
    }
}

language('chinese');
language('spanish');
language('english');
language('hindi');
language('arabic');
language('bulgarian');