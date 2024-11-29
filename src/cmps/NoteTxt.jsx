

export function NoteTxt({ info, onUpdateNote }) {
  return (
    <section className="note-txt">
      <h2>{info.title}</h2>
      <p>{info.txt}</p>
    </section>
  )
}