import Loader from '../Loader/Loader'

function Order({ loading, orderId }) {
  return (
    <>
      {loading && (
        <Loader message={'Estamos creando tu pedido!! 👌👌'} />
      )}

      {orderId && (
        <div className='d-flex h-100 justify-content-center align-items-center text-center balance fs-4'>
          <p>Aqui tienes tu pedido! Acuerdate de conservar el ID: <strong>{orderId}</strong></p>
        </div>
      )}
    </>
  )
}

export default Order