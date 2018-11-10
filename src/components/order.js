import React from "react"

class Order extends React.Component {
    render() {
        return <tr>
                <td>{this.props.order.date}</td>
                <td>{this.props.order.number}</td>
                <td>{this.props.order.status}</td>
            </tr>
    }
}

export default Order