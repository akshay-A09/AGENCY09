import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import starY from '../Assets/Images/icons/star.webp';

function HomeBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.agency09.in/simplifyingtheweb/api/blogs.php?per_page=4")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);


   // Update
   const UpdateSlider = {
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
      breakpoint: 968,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,


      }
    }
  ]};

  
  if (loading) return null;

  return (
      <section className='hUpdates'><div className='container'>
  
      <div className='Heading center HeadingIcon'>
        <h2 className='sizeH1 uppercase'>
          <span className='iconSVG'><i className="iconF"><img src={starY} alt="Star Icon" /></i></span>
          What's New
          <span className='iconSVG'><i className="iconF"><img src={starY} alt="Star Icon" /></i></span>
        </h2>
      </div>
  

    <Slider {...UpdateSlider} className="UpdateSlider-slick slick-slider">
        {blogs.map((blog) => (
            <div key={blog.id} className='item'>
              <Link to={blog.permalink} target="_blank">
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                />
              )}
              <h2>{blog.title}</h2>
               {/* <div
                className="excerpt"
                dangerouslySetInnerHTML={{
                  __html: blog.excerpt,
                }}
              /> */}
              </Link>
            </div>
          ))}
    </Slider>
    
    
      
      </div>
    </section>
  );
}

export default HomeBlogs;
