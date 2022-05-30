import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Gallery() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [datas, setDatas] = useState([]);
  const { id } = useParams();
  const urlApi = "http://localhost:3000";

  useEffect(() => {
    const getGallery = async () => {
      try {
        const res = await fetch(`${urlApi}/${id}`);
        if (res.ok) {
          const data = await res.json();
          setIsLoaded(true);
          setDatas(data);
        }
      } catch (err) {
        setIsLoaded(true);
        setError(err);
      }
    };
    getGallery();
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {datas.map((data) => {
          return (
            <img
              src={data.url}
              alt={data.name}
              key={data._id}
            
            />
          );
        })}
      </div>
    );
  }
}

export default Gallery;
