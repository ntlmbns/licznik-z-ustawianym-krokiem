import React from 'react'; 

const Step = props => { 


    return (
        <div className='step'>
            <form>
            <input type="number" min="1" value={props.stepValue} onChange={props.updateStepTyping}></input>
            <br></br>
            <button onClick={props.changeValueWithStep}>Zwiększ o {props.stepValue}</button>
            </form>
        </div>
    );
}

export default Step; 