export function Card({ children, className }) {
  return (
    <div className={`rounded-xl shadow-md bg-white p-6 ${className || ""}`}>
      {children}
    </div>
  )
}
