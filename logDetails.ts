//Union e Aliases

function logDetails(id: number | string, item: string) {
    console.log(`A product with ${id} has a title as ${item}`);
}

logDetails(123, 'sapato');

// type alias
type Uid = number | string;

function userInfo(id: Uid, name: string) {
    console.log(`An user with ${id} has a name as ${name}`);
}

userInfo(`123`, `Wesley`);


type Plataform = 'Windows' | 'Linux'| 'Mac OS';

function renderPlataform(plataform: Plataform) {
    return plataform;
}

renderPlataform('Linux');
