import React, { useState } from 'react'
import axios from "axios";

function SearchPhotos() {
    const [query, setQuery] = useState("");
    const [imageurl, setImageUrl] = useState([]);
    const searchPhotos = async (e) => {
        e.preventDefault();
        const accessKey = process.env.REACT_APP_ACCESSKEY;
        
        await axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&count=10`).then((res) => {
            console.log(res.data.results);

            setImageUrl(res.data.results);
        });



    }

    return (
        <>
            <form className="form" onSubmit={searchPhotos}>
                <label className="label" htmlFor="query">
                    {" "}
          📷
        </label>
                <input
                    type="text"
                    name="query"
                    className="input"
                    placeholder={`apple`}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="button">
                    Search
        </button>
            </form>
            <div className="card-list">
                {imageurl.map((image) => <div className="card" key={image.id}>
                    <img
                        className="card--image"
                        alt={image.alt_description}
                        src={image.urls.full}
                        width="50%"
                        height="50%"
                    ></img>


                </div>)}
            </div>
        </>
    )
}

export default SearchPhotos
