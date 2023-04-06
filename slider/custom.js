// 1. slider 이동(일정 시간 동안 자동)
// 2. hover 시 slider 기능 멈춤, 마우스 아웃 시 slider 기능 시작
// 3. 네이게이터 클릭 시 슬라이더 이동
// 4. indicator : * 해당 슬라이더 부분의 indicator 활성화 * indicator 클릭 시 해당 위치로 이동

// 요소 선택
const slWrapper = document.querySelector('.slider-wrapper')
const imgs = document.querySelector('.imgs')
const img = document.querySelectorAll('img')

// 초기화 변수
let currentIdx = 0
let timer

// slider 기능 함수 정의
const startSlider = (eq) => {
  // console.log(eq)
  imgs.style.left = -100 * eq + '%'
  currentIdx = eq
}

// 특정 시간 간격으로 slider 이동 함수 정의
const startTimer = () => {
  timer = setInterval(() => {
    const sliderLoop = (currentIdx + 1) % img.length
    // (0 + 1) % 4 = 1
    // (1 + 1) % 4 = 2
    // (2 + 1) % 4 = 3
    // (3 + 1) % 4 = 0
    startSlider(sliderLoop)
  }, 2000)
}

// slider 멈추는 함수
const stopTimer = () => {
  clearInterval(timer)
}

// 마우스를 오버 했을 때 멈춤
slWrapper.addEventListener('mouseenter', () => {
  stopTimer()
})

// 마우스를 아웃 했을 때 다시 실행
slWrapper.addEventListener('mouseleave', () => {
  startTimer()
})

// 특정 시간 간격으로 slider 이동 함수 호출
startTimer()

// slider 기능 함수 호출
// startSlider(0)