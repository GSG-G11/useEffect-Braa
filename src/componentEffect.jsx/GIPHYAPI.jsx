import { useState, useEffect } from "react";

export default function GIPHYAPI() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const abortController = new AbortController();

    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=BEhmVfKdPW8J3qZKPhXMCyNszDlbEci4`,
      {
        signal: abortController.signal,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.data);
      })
      .catch((err) => console.log(err));
    return () => abortController.abort();
  }, [search]);

  return (
    <div>
      <h2>{search}</h2>
      <input type="text" onChange={(e) => handleChange(e)} />
      {images.map((ele) => {
        return <img src={ele.images.original.url} alt="image" />;
      })}
    </div>
  );
}
