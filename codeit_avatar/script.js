/* =============== [ selectors ] =============== */
// 아바타 영역
const avatarTone = document.querySelector('#avatar-tone');

// 메뉴 영역
const avatarSelectorTone = document.querySelector('#avatar-selector-tone');

/* =============== [ 함수 선언 ] =============== */
// 메뉴 변경
const updateAvatarMenu = () => {
    // 클릭한 항목에 해당하는 아바타 셀렉터 보여 주기
    // 클릭한 항목에 해당하는 아바타 메뉴 항목 강조
}



const updateAvatar = () => {
    // 클릭 항목에 해당하는 이미지로 아바타 변경
}

// TEST : 피부톤 변경
const handleAvatarSelectorClick = (e) => {
    // 사용자가 아바타 셀렉터 항목을 클릭했을 때 실행할 이벤트 핸들러
    // updateAvatar() 함수를 실행
    const selectedTone = e.target.dataset.avatarValue;
    if (!selectedTone) return;
    avatarTone.setAttribute('src', `./images/avatar/${selectedTone}.svg`);
}

const handleSaveclick = () => {
    // 사용자가 저장하기 버튼을 클릭했을 때 실행할 이벤트 핸들러
    // 이미지를 저장하는 코드 실행
}

/* =============== [ 이벤트 삽입 ] =============== */
avatarSelectorTone.addEventListener('click', handleAvatarSelectorClick); // 피부톤