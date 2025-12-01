import { useState } from "react";

function MyComponent2() {
    const [name, setName] = useState("");

    return (
        <div>
            <input
                type="text"
                placeholder="Insert your text here: "
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>Username: {name}</p>
        </div>
    );
}

export default MyComponent2;


// https://react.dev/reference/react/useState