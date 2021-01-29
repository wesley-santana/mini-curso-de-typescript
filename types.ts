//bolean (true/false)

let isOpen: boolean;
isOpen  = true;

// string ('foo', "foo", `foo`)

let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary)

let total: number;
total = 0xff0;

// array 

let items: number[];

items = [1,2];  

let cars: Array<string>;
cars = ['New Beatle', 'i30', 'HRV'];

// tuple

let title: [number, string];
title = [1, 'is magic'];

//enum

enum Colors {
    white = '#fff',
    pink = '#f0f'
};

let it:any;
it = 'danger';

//void

function logger(): void {
    console.log('your message');
};

// null / undefined

type Bla =  string | undefined;

let variable: Bla;

// never

function error(): never {
    throw new Error('error')
};

//object

let people: object;

people = {
    age: 22,
    name: 'Mary'
};

// Type Inference

let message_warning = 'alert message warning';
message = 'it is alert';

window.addEventListener('click', (e: MouseEvent)=>{
    console.log(e.target);
});
