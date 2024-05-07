import './ProductCard.css'

const ProductCard = ({ product }) => {
    return (
        <section className='container'>
            <img src={product?.avatar?.file?.url} alt={product?.name} width={'200'} />
            <div>
                <h2>{product?.name}</h2>
                <h3>{product?.description}</h3>
            </div>
        </section>
    );
};

export default ProductCard;