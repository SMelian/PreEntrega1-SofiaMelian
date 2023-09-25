const [likes, setLikes] = useState(0);

// Función para aumentar el contador de likes en 1
const incrementLikes = () => {
  setLikes(likes + 1);
};

return (
  <div>
    <h1>Likes: {likes}</h1>
    <button onClick={incrementLikes}>Añadir Like</button>
  </div>
);