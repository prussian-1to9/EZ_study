/* =============== [ selectors ] =============== */
// JS variables
let currentAvatarKey = 'tone'; // currentAvatar 동기화에 필요
const currentAvatar = {
    tone: 'tone_300',
    hair_type: 'hair_short3',
    hair_color: 'black',
    clothes: 'hoodie',
    accessories: 'acc_none',
}
const avatarTone = document.querySelector('#avatar-tone');

// selectors
const avatarMenu = document.querySelector('#avatar-menu');
const avatarMenuItems = document.querySelectorAll('.avatar-menu-item');
const avatarSelectors = document.querySelectorAll('.avatar-selector');
const avatarImages = document.querySelectorAll('.avatar-image');
const avatarSelectorTone = document.querySelector('#avatar-selector-tone');

/* =============== [ 비즈니스 로직 ] =============== */
// 메뉴 변경
const updateAvatarMenu = (avatarKey) => {
    // 클릭한 항목에 해당하는 아바타 셀렉터 보여 주기
    for (const avatarSelector of avatarSelectors) {
        avatarSelector.classList.toggle(
            'active',
            avatarSelector.dataset.avatarKey === avatarKey
        );
    }
    // 클릭한 항목에 해당하는 아바타 메뉴 항목 강조
    for (const avatarMenuItem of avatarMenuItems) {
        avatarMenuItem.classList.toggle(
            'active',
            avatarMenuItem.dataset.avatarKey === avatarKey
        );
    }
}
// 아바타 컴포넌트 변경
const updateAvatar = (avatarKey, avatarValue) => {
    let imageKey = avatarKey;
    let fileName = currentAvatar[avatarKey] = avatarValue;

    // hair로 시작할 경우 filename은 type-color
    if (avatarKey.indexOf('hair') === 0) {
        imageKey = 'hair';
        fileName = `${currentAvatar.hair_type}-${currentAvatar.hair_color}`;
    }

    for (const avatarImage of avatarImages) {
        if (avatarImage.dataset.imageKey === imageKey) {
            avatarImage.src = `./images/avatar/${fileName}.svg`;
        }
    }
}

/* =============== [ 핸들러 ] =============== */
// 메뉴 변경
const handleAvatarMenu = (e) => {
    const nextAvatarKey = e.target.dataset.avatarKey;
    if (!nextAvatarKey) return;
    currentAvatarKey = nextAvatarKey;
    updateAvatarMenu(nextAvatarKey);
}
// 아바타 컴포넌트 변경
const handleAvatarSelectorClick = (e) => {
    const nextAvatarValue = e.target.dataset.avatarValue;
    if (!nextAvatarValue) return;
    updateAvatar(currentAvatarKey, nextAvatarValue);
}






/* TEST : 피부톤 변경
const handleAvatarSelectorClick = (e) => {
    // 사용자가 아바타 셀렉터 항목을 클릭했을 때 실행할 이벤트 핸들러
    // updateAvatar() 함수를 실행
    const selectedTone = e.target.dataset.avatarValue;
    if (!selectedTone) return;
    avatarTone.setAttribute('src', `./images/avatar/${selectedTone}.svg`);
}
*/
const handleSaveclick = () => {
    // 사용자가 저장하기 버튼을 클릭했을 때 실행할 이벤트 핸들러
    // 이미지를 저장하는 코드 실행
}

/* =============== [ 이벤트 삽입 ] =============== */
avatarMenu.addEventListener('click', handleAvatarMenu); // 메뉴 변경
avatarSelectors.forEach((avatarSelector) => {
    avatarSelector.addEventListener('click', handleAvatarSelectorClick);
}); // 아바타 컴포넌트 변경
avatarSelectorTone.addEventListener('click', handleAvatarSelectorClick); // 피부톤