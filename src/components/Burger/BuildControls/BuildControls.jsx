import React from 'react'
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl.jsx'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>${props.currentPrice.toFixed(2)}</strong></p>
            {controls.map(control => {
                return <BuildControl
                    key={control.type}
                    label={control.label}
                    addIG={() => props.addIngredient(control.type)}
                    removeIG={() => props.removeIngredient(control.type)}
                    disabled={props.disabled[control.type]} />
            })}
            <button
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.purchasing}
            >ORDER NOW</button>
        </div>
    )
}

export default BuildControls;