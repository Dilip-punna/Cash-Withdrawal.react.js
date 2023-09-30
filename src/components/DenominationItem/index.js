// Write your code here
import './index.css'

const DenominationItem = props => {
  const {deleteValue, valueDetails} = props
  const {value} = valueDetails

  const onDeleteValue = () => {
    deleteValue(value)
  }

  return (
    <li>
      <button type="button" onClick={onDeleteValue}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
