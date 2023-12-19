import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Technews.css'

function Technews() {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://newsapi.org/v2/top-headlines?country=us&apiKey=18b13ca2388148a0a6d7f426c124eeb3&category=science'
                );

                setNewsData(response.data.articles);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);



    return (
        <div className="container-fluid mt-3">
            <hr />
            <h1>...HOT TECH HEADLINES...</h1>
            <br /><hr />
            <div className="row">
                {newsData.map((article, index) => (
                    <div key={index} className="col-4">
                        <div className="news-card">
                            <img src={article.urlToImage || 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png'} className='card-img-top' alt={article.title} />
                            <div className="card-content">
                                <h3>{article.title}</h3>
                                <p>{article.description}</p>
                                <a href={article.url} target="_blank" rel="noopener noreferrer">
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>
                

                ))}
            </div>

        </div>
    );
}


export default Technews
