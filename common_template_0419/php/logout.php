<?php

  session_start();
  unset($_SESSION['userid']); // 세션 삭제

  echo "
    <script>
      alert('로그아웃 되었습니다.');
      location.href='/vom13_toy_template/index.php';
    </script>
  ";

?>