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
// selectors
const avatar        = document.querySelector('#avatar');
const avatarMenu    = document.querySelector('#avatar-menu');
const avatarMenuItems = document.querySelectorAll('.avatar-menu-item');
const avatarSelectors = document.querySelectorAll('.avatar-selector');
const avatarImages  = document.querySelectorAll('.avatar-image');
const saveButton    = document.querySelector('#save-button');


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
    // 변경된 이미지 동기화
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
// 아바타 이미지 저장
const handleSaveclick = () => {
    html2canvas(avatar).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'avatar.png';
        link.click();
    });
}


/* =============== [ 이벤트 삽입 ] =============== */
// 메뉴 변경
avatarMenu.addEventListener('click', handleAvatarMenu);
// 아바타 컴포넌트 변경
avatarSelectors.forEach((avatarSelector) => {
    avatarSelector.addEventListener('click', handleAvatarSelectorClick);
});
// 아바타 이미지 저장
saveButton.addEventListener('click', handleSaveclick);
