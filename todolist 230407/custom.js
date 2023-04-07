// 1. 글 입력 후 버튼 클릭 했을 때 list 요소 생성
// 2. 완료 일정 리스트 색상 표시(complete class 추가)

// 요소 선택

const btn = document.querySelector('.btn')
const lists = document.querySelector('.lists')
const inputBox = document.querySelector('.input-box')

// 초기화 변수 
let liContent = ''

// ToDo List 생성 함수 정의
const addTodo = () => {
  const input = document.querySelector('.input')
  const inputValue = input.value
  // alert(inputValue);
  if(!inputValue){ // 예외처리
    alert('일정을 입력해 주세요')
    return
  }
  liContent = `
    <li>
      <p>${inputValue}</p>
      <span class="delete-icon"><i class="ri-delete-bin-2-fill"></i></span>
    </li>
  ` // 입력한 일정 list 생성
  lists.insertAdjacentHTML('afterbegin', liContent) // 일정 list 추가  , https://velog.io/@1106laura/insertAdjacentHTML
  input.value = '' // 일정 입력 후 입력창 비우기
  input.focus() // 일정 입력 후 포커스 이동
}

// 버튼 클릭 시 ToDo List 함수 호출
btn.addEventListener('click', addTodo)

// Enter 키보드 입력 시 버튼 클릭
inputBox.addEventListener('keyup', function(e){
  // console.log(e.keyCode); // key 고유값 확인
  if(e.keyCode === 13){
    // btn.click()
    addTodo()
  }
})