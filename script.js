/**
 * 디지털 명함 & 이력서 전환 제어 스크립트 (script.js)
 * 비전공자 사용자분도 쉽게 보고 관리할 수 있는 간단한 자바스크립트 코드입니다.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. 필요한 HTML 요소 선택하기
    const toggleBtn = document.getElementById('toggle-btn');
    const appContainer = document.getElementById('app-container');
    const btnText = toggleBtn.querySelector('.btn-text');
    const btnIcon = toggleBtn.querySelector('.btn-icon');

    // 2. 버튼 클릭 시 작동할 함수 정의
    toggleBtn.addEventListener('click', () => {
        // appContainer에 'show-resume' 클래스가 있는지 확인
        const isResumeShowing = appContainer.classList.contains('show-resume');

        if (!isResumeShowing) {
            // [명함 -> 이력서 전환]
            appContainer.classList.add('show-resume');
            btnText.textContent = '명함 보기';
            
            // 버튼 아이콘 모양 변경 (왼쪽 화살표 방향으로 회전)
            btnIcon.style.transform = 'rotate(180deg)';
            
            // 화면 전환 시 최상단으로 스크롤 이동 (이력서가 길기 때문에 필요함)
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // [이력서 -> 명함 전환]
            appContainer.classList.remove('show-resume');
            btnText.textContent = '이력서 보기';
            
            // 버튼 아이콘 모양 원상 복구
            btnIcon.style.transform = 'rotate(0deg)';
            
            // 명함 화면으로 돌아올 때 스크롤 위치 초기화
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
});
