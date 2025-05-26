import Statistic from './Statistic'

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  if (total === 0) {
    return <p>No feedback given</p>
  }

  const average = (good - bad) / total
  const positive = ((good / total) * 100).toFixed(1) + ' %'

  return (
    <table>
      <tbody>
        <Statistic text="Good" value={good} />
        <Statistic text="Neutral" value={neutral} />
        <Statistic text="Bad" value={bad} />
        <Statistic text="All" value={total} />
        <Statistic text="Average" value={average.toFixed(1)} />
        <Statistic text="Positive" value={positive} />
      </tbody>
    </table>
  )
}

export default Statistics
