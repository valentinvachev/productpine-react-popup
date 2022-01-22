import { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import { initialItems } from '../../utils/initialStateProducts';
import CartModal from './CartModal/CartModal';
import CustomButton from './CustomButton/CustomButton';
import './ProductPage.scss';

const ProductPage = () => {
    const { appState, changeAppState } = useContext(AppContext);
    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <div className='product-page'>
            <div className='product-page-button-add'>
                <CustomButton
                    textContent='Add to shopping cart'
                    className='custom-button'
                    onClick={() => setModalVisible(true)}
                />
                {isModalVisible && (
                    <CartModal
                        closeModal={() => {
                            setModalVisible(false);
                            changeAppState({
                                cart: {
                                    ...appState.cart,
                                    items: [...initialItems],
                                },
                            });
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default ProductPage;
