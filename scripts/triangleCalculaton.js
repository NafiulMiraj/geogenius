function calculateTriangleArea(){

    //  get base
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    // console.log(typeof triangleBaseText);
    console.log(base);

    // get height

    const triangleHeightInput= document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

    // calculate area

    const area = 0.5*base*height;
    console.log('area of the triangle is', area);

    // display area

    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
}
