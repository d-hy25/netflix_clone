
const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <h1>Netflix</h1>
          <div>
            <select>
              <option>한국어</option>
              <option>English</option>
            </select>
            <button>로그인</button>
          </div>
        </nav>
        <div className="header-contents">
          <h2>영화, 시리즈 등을 <br/>무제한으로</h2>
          <h4><b>5,500원</b>으로 시작하세요. 멤버쉽은 언제든지 해지 가능합니다.</h4>
          <p>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</p>
          <div className="header-email">
            <input type="email" placeholder="이메일 주소" />
            <button>시작하기 〉</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;