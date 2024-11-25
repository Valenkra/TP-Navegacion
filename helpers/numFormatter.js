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

  static realTimeFormatter(originalNum) {
      let cleanedNum = originalNum.replace(/[^\d+]/g, ''); // Remove any non-digit or non-plus characters
      let formattedNum = '';
      let prefijo = ''; // +54 or similar prefix
      let area = '';    // Area code
      let firstNum = ''; // First part of the number
      let secondNum = ''; // Second part of the number
      let index = 0;

      // Check for prefix (if any)
      if (cleanedNum.substring(0, 4) === '0800' || cleanedNum.substring(0, 4) === '0810') {
        prefijo = cleanedNum.substring(0, 4) + ' ';
        index = 4;
      } else if (cleanedNum.substring(0, 1) === '+') {
        prefijo = cleanedNum.substring(0, 3) + ' ';
        index = 3;
      } else if (cleanedNum.substring(0, 2) === '54') {
        prefijo = '+' + cleanedNum.substring(0, 2) + ' ';
        index = 2;
      }

      // Check for area code
      if (cleanedNum.substring(index, index + 3) === `${cleanedNum[index]}${cleanedNum[index]}${cleanedNum[index]}`) {
        area = cleanedNum.substring(index, index + 3) + ' ';
        index += 3;
      } else if (cleanedNum.substring(index, index + 3) === '911') {
        area = '911 ';
        index += 3;
      } else if (cleanedNum.substring(index, index + 3) === '011') {
        area = '011 ';
        index += 3;
      } else if (cleanedNum.substring(index, index + 2) === '11' || cleanedNum.substring(index, index + 2) === '15') {
        area = cleanedNum.substring(index, index + 2) + ' ';
        index += 2;
      }

      // Format the number into two parts: first and second
      firstNum = cleanedNum.substring(index, index + 4);
      secondNum = cleanedNum.substring(index + 4);

      // Join the formatted pieces together
      formattedNum = prefijo + area + firstNum;

      // Add separator for the second number if it's not a special number (e.g., 0800)
      if (prefijo !== '0800 ' && prefijo !== '0810 ' && secondNum.length > 0) {
        formattedNum += ' - ';
      }
      formattedNum += secondNum;

      return formattedNum;
    }
}
