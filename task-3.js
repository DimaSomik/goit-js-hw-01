function getElementWidth(content, padding, border) {
    const contentPX = parseFloat(content);
    const paddingPX = parseFloat(padding);
    const borderPX = parseFloat(border);

    return result = contentPX + (paddingPX * 2) + (borderPX * 2);
}

console.log(getElementWidth("50px", "8px", "4px"));     
console.log(getElementWidth("60px", "12px", "8.5px"));  
console.log(getElementWidth("200px", "0px", "0px"));    
