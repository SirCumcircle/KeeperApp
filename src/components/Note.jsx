import React from "react";
import notes from "../notes"



let newNote = (i) => {
  return(<div className="note" key={i.key}>
    <h1>{i.title}</h1>
    <p>{i.content}</p>
  </div>)
}

let Note = () => notes.map(newNote);



export default Note;
