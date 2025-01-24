import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { VscChevronRight } from "react-icons/vsc";
import { VscChevronLeft } from "react-icons/vsc";
import { useEffect, useState } from "react";
import axios from "axios";

const MoveSlider = () => {
  const [movies,setMovies] = useState([]);
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);
  const fetchMovies = async ()=>{
    const API_KEY="decc67e8f617c228c9c976bb05cd39ca";
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`;

    try{
      const response = await axios.get(url);
      setMovies(response.data.results.slice(0,10));
      setLoading(false);
    }catch(err){
      setError("영화 데이터를 가져오는 중 오류 발생");
      setLoading(false);
    }
  }
  useEffect(()=>{
    setLoading(true);
    fetchMovies();
  },[]);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          initialSlide: 0
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="slick_next"
        onClick={onClick}
        ><VscChevronRight/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="slick_prev"
        onClick={onClick}
        ><VscChevronLeft/></div>
    );
  }
  
  if(error){
    return<div>{error}</div>
  }
  if(loading){
    return<div>Loading.....</div>
  }

  return (
    <div className="move-slider">
      <h2>지금 뜨는 콘텐츠</h2>
        <div>
          <select>
            <option>대한민국</option>
            <option>글로벌</option>
          </select>
          <select>
            <option>영화</option>
            <option>시리즈</option>
          </select>
        </div>
      <Slider {...settings}>
      {
        movies.map((list,idx)=>{
          return <div className="movie-card" key={list.id}>
            <span>{idx+1}</span>
            <img src={`https://image.tmdb.org/t/p/w342${list.poster_path}`} alt={list.title}/>
            <p>{list.text}</p>
          </div>
        })
      }
    </Slider>
    </div>
  );
};

export default MoveSlider;