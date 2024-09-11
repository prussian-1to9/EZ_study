const getRandomHex = () => {
    const num = Math.floor(Math.random() * 16 * 16);
    const hex = num.toString(16).padStart(2, '0').toUpperCase();
    console.log(hex); // TODO : remove this line
    return hex;
}
/*
const getRandomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
}
*/
const generateColorCode = () => {
    const colorCode = '#' + getRandomHex() + getRandomHex() + getRandomHex();
    return colorCode;
}

export default generateColorCode;
