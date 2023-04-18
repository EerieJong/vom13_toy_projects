<?php

  // 1. 아이디 체크
  // 2. 비밀번호 체크
  // 3. 세션저장

  // 입력 데이터 전달 받아 변수에 저장
  $login_id = $_POST['id'];
  $login_pwd = $_POST['pwd']; // 향후 해시 암호 문자열로 변경

  // echo $login_id." : ".$login_pwd;

  // 데이터베이스 인증 및 접속
  include $_SERVER['DOCUMENT_ROOT']."/connect/dbconn.php";
  // 데이터베이스에서 아이디 조회
  $sql = "SELECT * FROM user WHERE user_id = '$login_id'";

  // 조회 결과 변수에 저장
  $result = mysqli_query($db_conn, $sql);
  // 조회 결과 갯수 변수에 저장
  $num_match = mysqli_num_rows($result); // 데이터베이스 row 갯수를 숫자로 리턴
  
  // 아이디 체크 처리
  if(!$num_match){
    echo "
      <script>
        alert('등록되지 않은 아이디 입니다.');
        history.go(-1); // 이전 페이지로 보내기
      </script>
    ";
  } else {
    // 데이터베이스 row의 값을 배열로 리턴
    $row = mysqli_fetch_array($result);
    // 데이터베이스 비밀번호 추출
    $db_pass = $row['user_pwd'];
    
    // 입력한 비밀번호와 추출한 비밀번호를 비교
    if($login_pwd != $db_pass){
      echo "
        <script>
          alert('비밀번호가 틀립니다.');
          history.go(-1); // 이전 페이지로 보내기
        </script>
      ";
    } else {
      session_start();
      // print_r($row);
      $_SESSION['userid'] = $row['user_name'];

      echo "
        <script>
          alert('로그인 되었습니다.');
          location.href='/vom13_toy_template/index.php';
        </script>
      ";
    }
  }

?>