interface Game {
  title: string,
  description: string,
  readonly genre: string,
  plataform?: string[], //opcional
  getSimilars?:  (title: string) => void
}

const tlou: Game = {
  title: "The last of US",
  description: "The best game in the world",
  genre: "Action", 
  plataform: ["S3", "PS4"],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
  },
};

console.log(tlou.genre);
console.log(tlou.description);

tlou.getSimilars && tlou.getSimilars(tlou.title);

interface DLC extends Game {
  originalGame: Game,
  newContent: string[]    
};


const leftbehind: DLC = {
  title: "The last of US - Left Behind",
  description: "You play  as Ellie berfore original game",
  genre: "Action",
  plataform: ["PS4"],
  originalGame: tlou,
  newContent: ["3 Hours story"]
};


class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;

  constructor(title: string, description: string, genre: string){
    this.title = title;
    this.description = description;
    this.genre = genre;
  }
}