function ProductDetail({ product, onClose }) {
  return (
    <div className="scrim" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-title"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          className="modal__image"
          src={product.image}
          alt={product.name}
          width="560"
          height="420"
        />
        <div className="modal__body">
          <span className="modal__category">{product.category}</span>
          <h2 className="modal__title" id="product-title">
            {product.name}
          </h2>
          <p className="modal__price">
            {product.price.toLocaleString("th-TH")} ฿
          </p>
          <p className="modal__id">รหัสสินค้า #{product.id}</p>
          <div className="modal__actions">
            <button className="button button--primary" type="button">
              เพิ่มลงตะกร้า
            </button>
            <button className="button" type="button" onClick={onClose}>
              ปิด
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;