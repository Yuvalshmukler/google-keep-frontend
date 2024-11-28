

export function NoteTxt({ info }) {

  return (
    <section className="note-txt">
      <h2>{info.title}</h2>
      <p>{info.txt}</p>
    </section>
  )
}