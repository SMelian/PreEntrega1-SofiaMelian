function ItemListContainer(props) {
   console.log (props.state)
  return (
    <div className="item-list-container">
       {props.state.map((item) => {
         
        return (
          <article className="card">
          <h2 className="card__title">{item.flavor}</h2>
          <img className="card__image" src={item.picture} alt={item.title} />
          <p>${item.price}</p>
          <button className="btnCard">ver mas</button>
        </article>
        )
      })}
    </div>
  );
}

export default ItemListContainer;

