// /mypage 요청을 POST 방식으로 보내기
fetch('/mypage', {
    method: 'POST',  // POST 방식으로 변경
    headers: {
        'Content-Type': 'application/json',
    },
    credentials: 'same-origin',  // 세션 쿠키 포함
})
    .then(response => {
        if (!response.ok) {
            throw new Error('로그인 상태가 아닙니다.');
        }
        return response.json();
    })
    .then(data => {
        if (data.nickname) {
            // 세션 정보가 정상적으로 전달되면 폼에 자동으로 채워넣기
            document.getElementById('nickname').value = data.nickname;
            document.getElementById('userId').value = data.userId;
            document.getElementById('password').value = ''; // 비밀번호는 빈칸으로
            document.getElementById('password_check').value = ''; // 비밀번호 확인도 빈칸으로
        }
    })
    .catch(error => {
        alert("서버 오류가 발생했습니다. 에러 메시지: " + error.message);
        window.location.href = '/login'; // 로그인 페이지로 리다이렉트
    });

