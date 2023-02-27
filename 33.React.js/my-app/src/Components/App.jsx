import React from 'react';
import notes from '../notes';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';

// function createNotes(noteItem) {
//   return (
//     <Note
//       key={noteItem.key}
//       title={noteItem.title}
//       content={noteItem.content}
//     />
//   );
// }

function App(params) {
  return (
    <div>
      <Header />
      {/* <Note title="Title" content="Content here" /> */}
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        /> 
      ))}
      <Footer />
    </div>
  );
}

export default App;
