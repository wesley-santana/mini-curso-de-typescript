//@Component
//@Selector
//@useState("value")


//Class decorator
function Logger(prefix: string) {
  return (target: any) => {
    console.log(`${prefix}: ${target}`);
  }
}

@Logger('Foo')
class Foo {}

function setAPIVersion(apiVersion: string) {
  return (constructor: any) => {
    return class extends constructor {
        version = apiVersion;
    }
  }
}

@setAPIVersion('1.0.0')
class API{}
console.log(new API())

//Property decorator

function minLength(length: number){
  return (target: any, key: string) => {
    let val = target[key];
    const getter =  ()=> val;
    const setter = (value: string) => {
      if(value.length < length) {
        console.log(`Erro: Voce nao pode criar ${key} com o tamanho menor que ${length}.`)
      } else {
         val = value
      }
    }

    Object.defineProperty(target, key, {
      set: setter,
      get: getter
    });
  }
}

class  Movie {
  //Verificar se > que 5 caracteres
  @minLength(50)
  title: string;

  constructor(t:string){
    this.title = t;
  }
}
const movie = new Movie('Harry Potter')

console.log(movie)
//Method decorator

function delay(ms: number) {
    return (target: any, key: string, descriptor : PropertyDescriptor) => {
       const originalMethod = descriptor.value
       descriptor.value = function (...args: any)  {
          console.log(`Esperando ${ms}`);
          setTimeout(() => {
            originalMethod.apply(this, args)
          }, ms);
       }
    }
}

class Greeter {
    greeting: string;

    constructor(g: string){
      this.greeting = g;
    }

    @delay(1000)
    greet() {
      console.log(`Hello ${this.greeting}`)
    }
}

const pessoinha  = new Greeter('pessoinha');
pessoinha.greet();



//Paramenter decorator
//Acessor decorator