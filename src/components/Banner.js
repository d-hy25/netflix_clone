import { ImHeadphones } from "react-icons/im";

const Banner = () => {
  return (
    <section className="banner">
      <span><ImHeadphones/></span>
      <div className="banner-txt">
        <div className="b-txt">
          <p><b>5,500</b>원이면 만날 수 있는 넷플릭스</p>
          <p>가장 경제적인 광고형 멤버쉽을 이용해 보세요.</p>
        </div>
        <button>자세히 알아보기</button>
      </div>
    </section>
  );
};

export default Banner;