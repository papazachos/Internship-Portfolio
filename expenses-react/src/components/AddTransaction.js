import React, {useState} from 'react'; //hook

export const AddTransaction = () => {
const[text, setText] = useState('');
const[ammount, setAmmount] = useState(0);
// Controlling components within the form using onChange

    return (
        <>
             <h3>Add new transaction</h3>
      <form >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value = {text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value = {ammount} onChange={(e)=> setAmmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
        </>
        
    )
}
