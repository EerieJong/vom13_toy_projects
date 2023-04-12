// 1. 글 입력 후 버튼 클릭 했을 때 list 요소 생성
// 2. input text null sign shows alert to text
// 3. 완료 일정 리스트 색상 표시(complete class 추가)
// 4. 리스트 삭제하기
// 5. input null 시 엔터 한번만 진행 

// 요소 선택

const btn = document.querySelector('.btn')
const lists = document.querySelector('.lists')
const inputBox = document.querySelector('.input-box')
const alert = document.querySelector('.alert')

// 초기화 변수 
let liContent = ''

// alertTxt 함수 정의
const alertTxt = () => {
  alert.style.display = 'block'
  // const alertElement = document.createElement('p') // p 태그 생성
  // alertElement.append('일정을 입력해 주세요.') // p 태그에 텍스트 추가
  // alert.append(alertElement) // 텍스트가 추가된 p 태그를 div 태그 내부에 추가
  alert.textContent = '일정을 입력해 주세요.' // 기존 삭제하고 텍스트만 넣어줌

  setTimeout(() => {
    // alert.style.display = 'none'
    // alertElement.remove()
    alert.style.display = 'none'
  }, 1000) // 초후 메세지 사라짐
}

// ToDo List 생성 함수 정의
const addTodo = () => {
  const input = document.querySelector('.input')
  const inputValue = input.value
  // alert(inputValue);
  if(!inputValue){ // 예외처리
    // alert('일정을 입력해 주세요')
    alertTxt()
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
inputBox.addEventListener('keypress', function(e){   // keyup => only english , no korean  /// 누르고 땠을때 까지 인식해서 2번되는거 같음. keypress로 바꿔주면 됨.
  // console.log(e.keyCode); // key 고유값 확인
  if(e.keyCode === 13){
    // btn.click()
    addTodo()
  }
})

// define complete function
const showComplete = (a) => {
  console.log(a.target.nodeName);
  if(a.target.nodeName === 'LI'){
    a.target.classList.toggle('complete')
  } else if(a.target.nodeName === 'P'){
    a.target.parentNode.classList.toggle('complete')
  } else if(a.target.nodeName === 'I'){
    a.target.parentNode.parentNode.remove()
  }
}

// call complete sign function when delete button click 
lists.addEventListener('click', showComplete)