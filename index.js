const colorInput = document.getElementById('colorInput');
colorInput.addEventListener('input', () =>{
    const color = colorInput.value;


    document.body.style.backgroundColor = color;
});