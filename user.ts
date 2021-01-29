// accountInfo
// charInfo

type AccountInfo = {
    id: number,
    name: string,
    email?: string
};

const account: AccountInfo = {
    id: 123,
    name: 'Wesley'
};

type CharInfo = {
    nickName: string,
    level: number
};

const char: CharInfo = {
    nickName: 'jack',
    level: 100
};

//intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
    id: 124,
    name: 'Wesley de Santana',
    nickName: 'bragohero',
    level: 100
};

