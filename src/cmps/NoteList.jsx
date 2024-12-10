import { useState, useEffect } from 'react';
import { NotePreview } from './NotePreview';

export function NoteList({ notes, onRemoveNote, onUpdateNote }) {
  const [columns, setColumns] = useState(null);

  const setDynamicColumns = () => {
    // const viewportWidth = window.innerWidth - 100;
    // console.log('viewportWidth',viewportWidth);
    
    // const minColumnWidth = 241
    // console.log('minColumnWidth',minColumnWidth);
    
    // const newColumns = Math.floor(viewportWidth / (minColumnWidth + 20))
    // console.log('newColumns',newColumns);
    
    // viewportWidth + 100 < 610 ? setColumns(1) : setColumns(newColumns)
  }

  useEffect(() => {
    setDynamicColumns()
    window.addEventListener('resize', setDynamicColumns)

    return () => {
      window.removeEventListener('resize', setDynamicColumns)
    };
  }, []);

  return (
    <section>
      {(
        <ul
          className="note-list"
          style={{
            // columnCount: columns,
          }}
        >
          {notes.map((note) => (
            <li key={note._id}>
              <NotePreview onUpdateNote={onUpdateNote} note={note} />
            </li>
          ))}
        </ul>
      )}
      {/* {columns && (
        <ul
          className="note-list"
          style={{
            columnCount: columns,
          }}
        >
          {notes.map((note) => (
            <li key={note._id}>
              <NotePreview onUpdateNote={onUpdateNote} note={note} />
            </li>
          ))}
        </ul>
      )} */}
    </section>
  );
}