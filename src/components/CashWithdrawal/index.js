import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  deleteValue = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'sarah williams'
    const initial = name.slice(0, 1)

    return (
      <div>
        <div>
          <div>
            <p>{initial}</p>
          </div>
          <p>{name}</p>
        </div>
        <div>
          <p>Your Balance</p>
          <div>
            <p>{balance}</p>
            <br />
            <span>In Rupees</span>
          </div>
        </div>
        <p>Withdraw</p>
        <p>CHOOSE SUM (IN RUPEES)</p>
        <ul>
          {denominationsList.map(each => (
            <DenominationItem
              key={each.id}
              valueDetails={each}
              deleteValue={this.deleteValue}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
