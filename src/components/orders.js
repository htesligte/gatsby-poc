import React from "react"
import Order from "../components/order"
import axios from "axios"

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {orders: []};
        this.userId = "ENTER_USERID_HERE";
        this.apiKey = "ENTER_APIKEY_HERE";
    }
    
    componentDidMount() {
        axios.get('http://tmp.hjts.nl/gatsby/api.php?url=api/orders', {
            headers: {
                'User-ID': this.userId,
                'API-Secret': this.apiKey
            }
        })
        .then(response => {
            console.log(response.data);
            this.setState({ orders: response.data.orders });
        }).catch(function (error) {
            console.error(error);
        })
    }
    
    tabRow() {
        return this.state.orders.map(function(object, i) {
            return <Order order={object} key={i} />
        });
    }

    render() {
        return(
            <>
                <h1>Your orders</h1>
                <table>
                    <thead>
                        <th>Date/time</th>
                        <th>Ordernumber</th>
                        <th>Status</th>
                    </thead>
                    <tbody> 
                        {this.tabRow()}
                    </tbody>
                </table>
            </>
        )
    }
    
}

export default Orders
