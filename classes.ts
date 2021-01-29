abstract class  UserAccount {
  public name: string; //publico pode ser lido ou alterado dentro e fora da classe
  protected age: number; //pode ser chamado apenas dentro da classe ou subclasses

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`);
  }
}

// const user = new UserAccount('Wesley', 23);

// console.log(user);
// console.log(user.name);
// user.logDetails();

/* ------------------------------------------------------------ */


class CharAccount extends UserAccount {
 private nickname: string; //pode ser chamado apenas dentro da class
 readonly level: number; // somente leitura

  constructor(name: string, age: number, nickname: string, level: number){
    super(name, age)
    this.nickname = nickname;
    this.level = level;
  }

  logCharDetails(): void {
    console.log(`The player ${this.name} has the char ${this.nickname}`);
  }

  get getLevel(): number{
    return this.level;
  }

  get getNickName(): string {
    return this.nickname;
  }

  set setNickName(nickname: string) {
    this.nickname = nickname;
  }
}

const userinfo = new CharAccount('Wesley', 23, 'wesleydesantana', 90);
console.log(userinfo.getNickName);
userinfo.setNickName = 'novo_nick';
console.log(userinfo.getLevel);
console.log(userinfo.getNickName);

userinfo.logCharDetails();