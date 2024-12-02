import { useState, useEffect } from 'react';
import { NotePreview } from './NotePreview';

export function NoteList({ notes, onRemoveNote, onUpdateNote }) {
  const [columns, setColumns] = useState(null);

  const setDynamicColumns = () => {
    const viewportWidth = window.innerWidth - 100;
    const minColumnWidth = 240
    const newColumns = Math.floor(viewportWidth / (minColumnWidth + 20))
    viewportWidth + 100 < 610 ? setColumns(1) : setColumns(newColumns)
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
      {columns && (
        <ul
          className="note-list"
          style={{
            columnCount: columns,
          }}
        >
          {notes.map((note) => (
            <li key={note._id} style={{ breakInside: 'avoid' }}>
              <NotePreview onUpdateNote={onUpdateNote} note={note} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}