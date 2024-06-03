export function App() {
  return {
    element: /* html */ `
  <header>
    <h1><img src="./logo.png" alt="MovieList 로고" /></h1>
    <div class="search-box">
    <input type="text" placeholder="검색" />
    <button class="search-button">검색</button>
    </div>
  </header>
    <main>
    <section class="item-view">
    <h2>지금 인기 있는 영화</h2>
    <ul class="item-list">
        <li>
        <a href="#">
            <div class="item-card">
            <img
                class="item-thumbnail"
                src="https://image.tmdb.org/t/p/w220_and_h330_face/cw6jBnTauNmEEIIXcoNEyoQItG7.jpg"
                loading="lazy"
                alt="앤트맨과 와스프: 퀀텀매니아"
            />
            <p class="item-title">앤트맨과 와스프: 퀀텀매니아</p>
            <p class="item-score">
                <img src="./star_filled.png" alt="별점" /> 6.5
            </p>
            </div>
        </a>
        </li>
        <li>
        <a href="#">
            <div class="item-card">
            <img
                class="item-thumbnail"
                src="https://image.tmdb.org/t/p/w220_and_h330_face/cw6jBnTauNmEEIIXcoNEyoQItG7.jpg"
                loading="lazy"
                alt="앤트맨과 와스프: 퀀텀매니아"
            />
            <p class="item-title">앤트맨과 와스프: 퀀텀매니아</p>
            <p class="item-score">
                <img src="./star_filled.png" alt="별점" />6.5
            </p>
            </div>
        </a>
        </li>
        <li>
        <a href="#">
            <div class="item-card">
            <img
                class="item-thumbnail"
                src="https://image.tmdb.org/t/p/w220_and_h330_face/cw6jBnTauNmEEIIXcoNEyoQItG7.jpg"
                loading="lazy"
                alt="앤트맨과 와스프: 퀀텀매니아"
            />
            <p class="item-title">앤트맨과 와스프: 퀀텀매니아</p>
            <p class="item-score">
                <img src="./star_filled.png" alt="별점" />6.5
            </p>
            </div>
        </a>
        </li>
        <li>
        <a href="#">
            <div class="item-card">
            <img
                class="item-thumbnail"
                src="https://image.tmdb.org/t/p/w220_and_h330_face/cw6jBnTauNmEEIIXcoNEyoQItG7.jpg"
                loading="lazy"
                alt="앤트맨과 와스프: 퀀텀매니아"
            />
            <p class="item-title">앤트맨과 와스프: 퀀텀매니아</p>
            <p class="item-score">
                <img src="./star_filled.png" alt="별점" />6.5
            </p>
            </div>
        </a>
        </li>
        <li>
        <a href="#">
            <div class="item-card">
            <img
                class="item-thumbnail"
                src="https://image.tmdb.org/t/p/w220_and_h330_face/cw6jBnTauNmEEIIXcoNEyoQItG7.jpg"
                loading="lazy"
                alt="앤트맨과 와스프: 퀀텀매니아"
            />
            <p class="item-title">앤트맨과 와스프: 퀀텀매니아</p>
            <p class="item-score">
                <img src="./star_filled.png" alt="별점" />6.5
            </p>
            </div>
        </a>
        </li>
        <li>
        <a href="#">
            <div class="item-card">
            <img
                class="item-thumbnail"
                src="https://image.tmdb.org/t/p/w220_and_h330_face/cw6jBnTauNmEEIIXcoNEyoQItG7.jpg"
                loading="lazy"
                alt="앤트맨과 와스프: 퀀텀매니아"
            />
            <p class="item-title">앤트맨과 와스프: 퀀텀매니아</p>
            <p class="item-score">
                <img src="./star_filled.png" alt="별점" />6.5
            </p>
            </div>
        </a>
        </li>
        <li>
        <a href="#">
            <div class="item-card">
            <img
                class="item-thumbnail"
                src="https://image.tmdb.org/t/p/w220_and_h330_face/cw6jBnTauNmEEIIXcoNEyoQItG7.jpg"
                loading="lazy"
                alt="앤트맨과 와스프: 퀀텀매니아"
            />
            <p class="item-title">앤트맨과 와스프: 퀀텀매니아</p>
            <p class="item-score">
                <img src="./star_filled.png" alt="별점" />6.5
            </p>
            </div>
        </a>
        </li>
        <li>
        <a href="#">
            <div class="item-card">
            <img
                class="item-thumbnail"
                src="https://image.tmdb.org/t/p/w220_and_h330_face/cw6jBnTauNmEEIIXcoNEyoQItG7.jpg"
                loading="lazy"
                alt="앤트맨과 와스프: 퀀텀매니아"
            />
            <p class="item-title">앤트맨과 와스프: 퀀텀매니아</p>
            <p class="item-score">
                <img src="./star_filled.png" alt="별점" />6.5
            </p>
            </div>
        </a>
        </li>
        <li>
        <a href="#">
            <div class="item-card">
            <img
                class="item-thumbnail"
                src="https://image.tmdb.org/t/p/w220_and_h330_face/cw6jBnTauNmEEIIXcoNEyoQItG7.jpg"
                loading="lazy"
                alt="앤트맨과 와스프: 퀀텀매니아"
            />
            <p class="item-title">앤트맨과 와스프: 퀀텀매니아</p>
            <p class="item-score">
                <img src="./star_filled.png" alt="별점" />6.5
            </p>
            </div>
        </a>
        </li>
        <li>
        <a href="#">
            <div class="item-card">
            <img
                class="item-thumbnail"
                src="https://image.tmdb.org/t/p/w220_and_h330_face/cw6jBnTauNmEEIIXcoNEyoQItG7.jpg"
                loading="lazy"
                alt="앤트맨과 와스프: 퀀텀매니아"
            />
            <p class="item-title">앤트맨과 와스프: 퀀텀매니아</p>
            <p class="item-score">
                <img src="./star_filled.png" alt="별점" />6.5
            </p>
            </div>
        </a>
        </li>
        <li>
        <a href="#">
            <div class="item-card">
            <img
                class="item-thumbnail"
                src="https://image.tmdb.org/t/p/w220_and_h330_face/cw6jBnTauNmEEIIXcoNEyoQItG7.jpg"
                loading="lazy"
                alt="앤트맨과 와스프: 퀀텀매니아"
            />
            <p class="item-title">앤트맨과 와스프: 퀀텀매니아</p>
            <p class="item-score">
                <img src="./star_filled.png" alt="별점" />6.5
            </p>
            </div>
        </a>
        </li>
        <li>
        <a href="#">
            <div class="item-card">
            <img
                class="item-thumbnail"
                src="https://image.tmdb.org/t/p/w220_and_h330_face/cw6jBnTauNmEEIIXcoNEyoQItG7.jpg"
                loading="lazy"
                alt="앤트맨과 와스프: 퀀텀매니아"
            />
            <p class="item-title">앤트맨과 와스프: 퀀텀매니아</p>
            <p class="item-score">
                <img src="./star_filled.png" alt="별점" />6.5
            </p>
            </div>
        </a>
        </li>
        <li>
        <a href="#">
            <div class="item-card">
            <img
                class="item-thumbnail"
                src="https://image.tmdb.org/t/p/w220_and_h330_face/cw6jBnTauNmEEIIXcoNEyoQItG7.jpg"
                loading="lazy"
                alt="앤트맨과 와스프: 퀀텀매니아"
            />
            <p class="item-title">앤트맨과 와스프: 퀀텀매니아</p>
            <p class="item-score">
                <img src="./star_filled.png" alt="별점" />6.5
            </p>
            </div>
        </a>
        </li>
        <li>
        <a href="#">
            <div class="item-card">
            <img
                class="item-thumbnail"
                src="https://image.tmdb.org/t/p/w220_and_h330_face/cw6jBnTauNmEEIIXcoNEyoQItG7.jpg"
                loading="lazy"
                alt="앤트맨과 와스프: 퀀텀매니아"
            />
            <p class="item-title">앤트맨과 와스프: 퀀텀매니아</p>
            <p class="item-score">
                <img src="./star_filled.png" alt="별점" />6.5
            </p>
            </div>
        </a>
        </li>
        <li>
        <a href="#">
            <div class="item-card">
            <img
                class="item-thumbnail"
                src="https://image.tmdb.org/t/p/w220_and_h330_face/cw6jBnTauNmEEIIXcoNEyoQItG7.jpg"
                loading="lazy"
                alt="앤트맨과 와스프: 퀀텀매니아"
            />
            <p class="item-title">앤트맨과 와스프: 퀀텀매니아</p>
            <p class="item-score">
                <img src="./star_filled.png" alt="별점" />6.5
            </p>
            </div>
        </a>
        </li>
        <li>
        <a href="#">
            <div class="item-card">
            <img
                class="item-thumbnail"
                src="https://image.tmdb.org/t/p/w220_and_h330_face/cw6jBnTauNmEEIIXcoNEyoQItG7.jpg"
                loading="lazy"
                alt="앤트맨과 와스프: 퀀텀매니아"
            />
            <p class="item-title">앤트맨과 와스프: 퀀텀매니아</p>
            <p class="item-score">
                <img src="./star_filled.png" alt="별점" />6.5
            </p>
            </div>
        </a>
        </li>
        <li>
        <a href="#">
            <div class="item-card">
            <img
                class="item-thumbnail"
                src="https://image.tmdb.org/t/p/w220_and_h330_face/cw6jBnTauNmEEIIXcoNEyoQItG7.jpg"
                loading="lazy"
                alt="앤트맨과 와스프: 퀀텀매니아"
            />
            <p class="item-title">앤트맨과 와스프: 퀀텀매니아</p>
            <p class="item-score">
                <img src="./star_filled.png" alt="별점" />6.5
            </p>
            </div>
        </a>
        </li>
        <li>
        <a href="#">
            <div class="item-card">
            <img
                class="item-thumbnail"
                src="https://image.tmdb.org/t/p/w220_and_h330_face/cw6jBnTauNmEEIIXcoNEyoQItG7.jpg"
                loading="lazy"
                alt="앤트맨과 와스프: 퀀텀매니아"
            />
            <p class="item-title">앤트맨과 와스프: 퀀텀매니아</p>
            <p class="item-score">
                <img src="./star_filled.png" alt="별점" />6.5
            </p>
            </div>
        </a>
        </li>
        <li>
        <a href="#">
            <div class="item-card">
            <img
                class="item-thumbnail"
                src="https://image.tmdb.org/t/p/w220_and_h330_face/cw6jBnTauNmEEIIXcoNEyoQItG7.jpg"
                loading="lazy"
                alt="앤트맨과 와스프: 퀀텀매니아"
            />
            <p class="item-title">앤트맨과 와스프: 퀀텀매니아</p>
            <p class="item-score">
                <img src="./star_filled.png" alt="별점" />6.5
            </p>
            </div>
        </a>
        </li>
        <li>
        <a href="#">
            <div class="item-card">
            <img
                class="item-thumbnail"
                src="https://image.tmdb.org/t/p/w220_and_h330_face/cw6jBnTauNmEEIIXcoNEyoQItG7.jpg"
                loading="lazy"
                alt="앤트맨과 와스프: 퀀텀매니아"
            />
            <p class="item-title">앤트맨과 와스프: 퀀텀매니아</p>
            <p class="item-score">
                <img src="./star_filled.png" alt="별점" />6.5
            </p>
            </div>
        </a>
        </li>
    </ul>
    <button class="btn primary full-width">더 보기</button>
    </section>
    </main>`,
  };
}
