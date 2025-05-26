import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
  const course = 'Half Stack application development - Part 2'
  const parts = [
    { name: 'Introduction to React', exercises: 10 },
    { name: 'State management', exercises: 7 },
    { name: 'Effect hook', exercises: 14 }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
