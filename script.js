function calcular(){
    a = parseInt(document.getElementById("n1").value);
    b = parseInt(document.getElementById("n2").value);
    op = document.getElementById("op").value;

    switch(op){
        case '+':
            alert(a + b);
            break;
        case '-':
            alert(a - b);
            break;
        case '*':
            alert(a * b);
            break;
        case '/':
            alert(a / b);
            break;
        default:
            alert('conta errada');
    }

    

}