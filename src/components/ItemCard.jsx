function Presentacional(props) {
    return (
      <section className="card-container">
        {props.productos.map((item) => {
          return (
            <article className="card">
              <h2 className="card__title">{item.flavor} - ${item.price}</h2>
              <img className="card__image" src={item.image} alt={item.flavor} />
              <button className="btn">ver mas</button>
            </article>
          )
        })}
      </section>
    )
  }
  export default Presentacional