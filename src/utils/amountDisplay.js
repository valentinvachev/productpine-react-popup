export const amountDisplay = (quantity, regularPrice) => {
    return (quantity * regularPrice).toFixed(2).replace('.', ',');
};
