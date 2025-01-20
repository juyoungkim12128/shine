document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // 기본 폼 제출 방지
		
/*
	if (!username || !password) {
        alert("아이디와 비밀번호를 모두 입력해주세요.");
        return;
    }
*/	
    // 사용자 입력 값(id, pw) 가져오기
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;


    // 서버로 전송
    const data = { userId: username, userPw: password };

    // 로그인 요청
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            alert("로그인에 성공하여 마이페이지로 이동합니다.");
	    window.location.href = '/mypage'; // 마이페이지로 리다이렉트
        } else {
            alert("아이디 혹은 비밀번호를 확인하세요.");
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById("result").innerText = "일시적인 에러가 발생했습니다. 잠시 후 다시 시도해주세요.";
    });
});
