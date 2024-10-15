export default class numFormatter {
    static format(originalNum) {
        if(originalNum.substring(0,2) == ",A"){
          originalNum = originalNum.substring(2, originalNum.length-2);
        }
    
        let num = originalNum;
        let prefijo = "";
        let firstSpace = "";
        let secondSpace = "";
    
        if(originalNum.substring(0,4) == "0800" || originalNum.substring(0,4) == "0810"){
          firstSpace = originalNum.substring(0, 4) + " " + originalNum.substring(4);
          secondSpace = firstSpace.substring(0, 8) + " " + firstSpace.substring(8);
          prefijo = secondSpace.substring(0, 8);
          num = secondSpace.substring(8);
        }
    
        if(originalNum.substring(0,2) == "+5"){
          firstSpace = originalNum.substring(0, 3) + " " + originalNum.substring(3);
          secondSpace = firstSpace.substring(0, 5) + " " + firstSpace.substring(5);
          prefijo = secondSpace.substring(0, 6);
          num = secondSpace.substring(6);
        }
    
        if(secondSpace?.substring(6,8) == "11" || originalNum.substring(0,2) == "11" || secondSpace?.substring(6,8) == "15" || originalNum.substring(0,2) == "15"){
          let myNum = (secondSpace != "") ? secondSpace.substring(6) : originalNum;
          let thirdSpace = myNum.substring(0, 2) + " " + myNum.substring(2);
          prefijo = thirdSpace.substring(0, 3);
          num = thirdSpace.substring(3);
        }
    
    
        if(num.length == 8){
          num = num.substring(0, 4) + " - " + num.substring(4);
        }
    
        return (prefijo+num);
    }
  }