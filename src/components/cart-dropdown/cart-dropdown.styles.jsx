import styled from 'styled-components';

export const CartDropDownContainer = styled.div`
    position:absolute;
    width: 240px;
    height:340px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    padding:20px;
    border:1px solid black;
    background-color: white;
    top:80px;
    right:60px;
    z-index:5;
`;

export const CartItemsContainer = styled.div`
        height: 240px;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
`;

export const EmptyMessageContainer = styled.span`
            font-size:18px;
            margin:50px auto;
`;