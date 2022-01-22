import { useState } from 'react';
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
            </div>
        </div>
    );
};

export default ProductPage;
