import React from 'react';

import {CartDropDownContainer,CartItemsContainer,EmptyMessageContainer,CartDropDownButton} from './cart-dropdown.styles';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';

import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
const CartDropDown = ({cartItems ,history,dispatch}) => (
    <CartDropDownContainer>
        <CartItemsContainer>
                {
                    cartItems.length 
                    ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                    :
                    <EmptyMessageContainer>
                        Your cart is empty
                    </EmptyMessageContainer>
                }

        </CartItemsContainer>

        <CartDropDownButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
            
            }}>
            GO TO CHECKOUT
        </CartDropDownButton>

    </CartDropDownContainer>
)
const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
});
export default withRouter(connect(mapStateToProps)(CartDropDown));