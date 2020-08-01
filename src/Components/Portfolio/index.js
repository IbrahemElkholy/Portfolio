import React from 'react';
import './style.css'
import axios from 'axios'


const Portfolio = () => {

  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    axios.get('js/data.json').then(res => { setImages(res.data.portfolio) })
  }, [])

  const portfolioImages = images
  const imagesList = portfolioImages.map((item) => {
    return (
      <div key={item.id}>
      <img src={item.image} alt="" />
      <p className="overlay">
        <span>
          Show Image
            </span>
      </p>
    </div>
  )
  })
  return (
    <div className="portfolio">
      <h2 className="portfolio-title"><span>My</span> Portfolio</h2>
      <ul className="portfolio-list">
        <li className="portfolio-item active">All</li>
        <li className="portfolio-item">HTML</li>
        <li className="portfolio-item">Photoshop</li>
        <li className="portfolio-item">Wordpress</li>
        <li className="portfolio-item">Mobile</li>
      </ul>

      <div className="box">

        {imagesList}

      </div>

    </div>
  );
}

export default Portfolio;