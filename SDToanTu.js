let inputWidth;
let inputHeight;
function tinhdientich(a,b) {
    a= prompt("Enter the width");
    b = prompt("Enter the height");
    let width = parseInt(a);
    let height = parseInt(b);
    let area = width * height;
    document.write("The area is: " + area);
}