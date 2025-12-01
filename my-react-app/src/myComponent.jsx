
//import React, {useState} from "react";
import {useState} from "react";
// 1) uz neni potreba importovat React, staci takto.

function MyComponent(){
//2) je dulezite znacit velkym pismenem tj. MyComponent. React tak pozna, ze se jedna o komponentu ne html tag -> viz app.jsx

    const[name, setName] = useState("");
// 3) co se deje zde, a proc se sem davaji pole s prvky?
// prvek [0] -> name -> hodnota stavu, kterou ulozime do name
// prvek [2] -> setname -> funkce kterou zavolame, kdyz chceme zmenit stav.

// React dela cca toto:
//  let state = "";
//  function setState(newValue) {
//    state = newValue;
// }
// array destructuring -> rozbaleni pole? nevim, doucit potom...

    function handleChange(event){
// zde definuji funkce, ktera se vola pokazde, kdyz user neco napise do inputu.
        setName(event.target.value);
// event.target.value => aktualni text, ktery mam zrovna v inputu
//setName() => zmneni stav name, React si vsimne, ze se stav zmenil -> prekresli komponentu.
    }

    return(<div>
        <input type="text" placeholder="Insert your text here: " onChange={handleChange}></input>
        <p>Username: {name}</p>
    </div>)
// zde rikam, reactu co presne vykreslit do html.
// onChange={handleChange} -> kdykoliv zmenim text v input, tak zavolam funkci handleChange.
// {name} → vloží aktuální hodnotu stavu do odstavce. Když se name změní (pomocí setName), React překreslí jen tu část a text se aktualizuje.
}

export default MyComponent


// Strict equality operators
//  = ... asignment napr. let x = 5;
// == ... value equality, kontroluje jen ze hodnota je stejna, tj. 5 == "5" -> true
// === ... strict equality, value i data type musi byt stejny, tj. 5 === "5" -> false
// != ... opet jen kontroluje value,
// !== ... kontrola value i data type.