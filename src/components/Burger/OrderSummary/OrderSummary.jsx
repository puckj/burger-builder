import React, { Fragment, Component } from 'react';
import Button from '../../UI/Button/Button.jsx';

//ต้องเป็น functional component แต่ทำเป็น class-based เพราะต้องการใช้งาน componentDidUpdate()
class OrderSummary extends Component{
    componentDidUpdate() {
        console.log('[OrderSummary] DidUpdate');
    }

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return <li key={igKey}>
                <span style={{ textTransform: "capitalize" }}>{igKey}</span> : {this.props.ingredients[igKey]}
            </li>
        });

        return (
            <Fragment>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Fragment>
        )
    }
}

export default OrderSummary;