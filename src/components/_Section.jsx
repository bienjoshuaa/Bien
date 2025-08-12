export default function Section({ id, children }) {
  return (
    <section id={id} className="scroll-mt-20">
      {children}
    </section>
  )
}



