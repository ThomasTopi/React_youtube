
import styles from './assets/buttons.module.css';

function Buttons(){

    const click = (event) => console.log(event.cancelable)


    return(
        <div>
            <button className = {styles.button} onClick={(e) => click(e)} type="button">Click Me for Magic!</button>

        </div>
    );

}

export default Buttons;