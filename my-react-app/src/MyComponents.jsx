import React, {useState} from 'react';

function MyComponents(){
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

     function handleAddFood(){

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        
        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index){
        
        setFoods(foods.filter((_, i) => i !== index));
    }

    return(<div>
        <h2>List of Food</h2>
         <ul>
            {foods.map((food, index) => 
            <li key={index} onClick={() => handleRemoveFood(index)}>
                {food}
            </li>)}
        </ul>
        <input 
            type="text" 
            id="foodInput"
            placeholder='Enter Food Name'
        />
        <button onClick={handleAddFood}>Add Food</button>
    </div>);

}

export default MyComponents;


//const foods = ["Apple", "Orange", "Banana"];
//              index 0,    1,        2

// Chceš smazat index 1 ("Orange"):
//const newFoods = foods.filter((_, i) => i !== index);
// Projde každý prvek:
// i=0 → 0 !== 1 → true → "Apple" ZŮSTANE
// i=1 → 1 !== 1 → false → "Orange" SMAŽE SE
// i=2 → 2 !== 1 → true → "Banana" ZŮSTANE

// newFoods = ["Apple", "Banana"]


//foods.filter((food, index) => { ... })
//            ^^^^  ^^^^^
//            prvek  pozice

// `_` = placeholder, když prvek nepotřebuješ
//foods.filter((_, i) => i !== index)
//            ^
//            "nepoužívám hodnotu, jen index"


// ❌ ŠPATNĚ - mění původní pole (mutace)
//foods.splice(index, 1);
//setFoods(foods); // React to nepozná!

// ❌ ŠPATNĚ - mění přímo
//foods.pop();

// ✅ SPRÁVNĚ - vytvoří nové pole (immutable)
//setFoods(foods.filter((_, i) => i !== index));


//2) return - v react nejde nemit html v return componenty

//React - reaktivni programovani od slova reagovat.