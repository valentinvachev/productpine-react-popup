import { useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent as Info } from './assets/info.svg';
import CustomButton from '../CustomButton/CustomButton';
import AppContext from '../../../context/AppContext';
import ProductCart from './ProductCart/ProductCart';
import './CartModal.scss';

const CartModal = ({ closeModal }) => {
    const { appState, changeAppState } = useContext(AppContext);
    const ref = useRef(null);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => (document.body.style.overflow = 'unset');
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                closeModal();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, closeModal]);

    const handleIncreaseQuantity = (id) => {
        changeAppState({
            cart: {
                ...appState.cart,
                items: appState.cart.items.map((item) => {
                    if (item.id === id) {
                        item.quantity += 1;
                    }
                    return item;
                }),
            },
        });
    };

    const handleDecreaseQuantity = (id) => {
        changeAppState({
            cart: {
                ...appState.cart,
                items: appState.cart.items
                    .map((item) => {
                        if (item.id === id) {
                            item.quantity -= 1;
                        }
                        return item;
                    })
                    .filter((item) => item.quantity !== 0),
            },
        });
    };

    return ReactDOM.createPortal(
        <div className='cart-modal-wrapper'>
            <div className='cart-modal-content' ref={ref}>
                <div className='cart-modal-close-icon' onClick={closeModal} />
                {appState.cart.items.length ? (
                    <>
                        <div className='cart-modal-wallet'>
                            <div className='cart-modal-wallet-text'>
                                TOO GOOD TO PASS UP, RIGHT?
                            </div>
                            <div className='cart-modal-wallet-discount'>
                                Order now and receive
                                <span className='cart-modal-amount-saved'>{` ${appState.cart.currencySign}5,00 `}</span>
                                in your Wallet.
                                <Info className='info-icon info-icon-small' />
                            </div>
                        </div>

                        <h2>Your shopping cart</h2>
                        <h3>
                            Order now and your order will be shipped for free.
                        </h3>
                        {appState.cart.items.map((item) => (
                            <ProductCart
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                imageUrl={item.imageUrl}
                                details={item.details}
                                quantity={item.quantity}
                                regularPrice={item.regularPrice}
                                discountPrice={item.discountPrice}
                                currencySign={appState.cart.currencySign}
                                handleIncreaseQuantity={handleIncreaseQuantity}
                                handleDecreaseQuantity={handleDecreaseQuantity}
                            />
                        ))}
                        <p className='cart-modal-info-not-reserved'>
                            <Info className='info-icon info-icon-medium' />
                            The items in your shopping cart are not reserved for
                            you.
                        </p>
                        <CustomButton
                            textContent='Order'
                            className='custom-button'
                        />
                    </>
                ) : (
                    <h2>Your shopping cart is empty</h2>
                )}
            </div>
        </div>,
        document.getElementById('portal')
    );
};

export default CartModal;
