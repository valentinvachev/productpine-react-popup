import { useState } from 'react';
import CartModal from './CartModal/CartModal';
import CustomButton from './CustomButton/CustomButton';
import './ProductPage.scss';

const ProductPage = () => {
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
                    <CartModal closeModal={() => setModalVisible(false)} />
                )}
            </div>
        </div>
    );
};

export default ProductPage;
