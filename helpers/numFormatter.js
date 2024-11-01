export default class numFormatter {
    static format(originalNum) {
        if(originalNum.substring(0,2) == ",A"){
          originalNum = originalNum.substring(2, originalNum.length-2);
        }
        
        let prefijo = ""; //+54
        let area = ""; //911
        let firstNum = ""; // 3333
        let secondNum = ""; //2346 

        let index = 0;

        
        // Definir prefijo
        if(originalNum.substring(0,4) == "0800" || originalNum.substring(0,4) == "0810"){
          prefijo = originalNum.substring(0, 4) + " ";
          index = 4;
        }

        if(originalNum.substring(0,1) == "+"){
          prefijo = originalNum.substring(index, index + 3) + " ";
          index = 3;

        }

        if(originalNum.substring(0,2) == "54"){
          prefijo = "+" + originalNum.substring(index, index+2) + " ";
          index = 2;
        }

        // Definir área
        if(originalNum.substring(index, index+3) === `${originalNum[index]}${originalNum[index]}${originalNum[index]}`){
          area = originalNum.substring(index, index+3) + " ";
          index = 7;
        }

        if(originalNum.substring(index, index+3) == "911"){
          area = originalNum.substring(index, index+3) + " ";
          index = 6;
        }

        if(originalNum.substring(index, index+3) == "011"){
          area = originalNum.substring(index, index+3) + " ";
          index = 3;
        }
            
        if(originalNum.substring(0,2) == "11" || originalNum.substring(0,2) == "15"){
          area = originalNum.substring(0, 2) + " ";
          index = 2;
        }

        // Definir número
        firstNum = originalNum.substring(index, index + 4);
        firstNum += (prefijo !==  "0800" && prefijo !== "0810") ? " - " : "";
        secondNum = originalNum.substring(index + 4); + " "
        

        return (prefijo+area+firstNum+secondNum);
    }
  }