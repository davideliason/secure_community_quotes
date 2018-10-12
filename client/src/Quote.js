import React from 'react';

const Quote = props => (
   <div>  
      <div>
        <h3>{props.author}</h3>
         {props.children}
      </div>
      <div>
        <a onClick={() => { props.handleUpdateQuote(props.id); }}><button>update</button></a>
        <a onClick={() => { props.handleDeleteQuote(props.id); }}><button>delete</button></a>
      </div>
   </div>
);

export default Quote;
