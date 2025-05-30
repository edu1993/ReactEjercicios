const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return <p>Total exercises: {total}</p>
}

export default Total
