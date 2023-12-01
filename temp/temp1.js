/////////////  
  function strtoint(str) {
    const augend = "0x";
    str = augend.concat(str);
    var result = Number(str);
    return (result);
  }
  newJsonCreate();
  obj = JSON.parse(newJson);

  /** 	Function to convert String of Hexadecimal to Floating Point		 */

  function parsetoFloat(str) {
    const augend = "0x";
    str = augend.concat(str);
    var float = 0, sign, order, mantissa, exp,
      int = 0, multi = 1;
    if (/^0x/.exec(str)) {
      int = parseInt(str, 16);
    }
    else {
      for (var i = str.length - 1; i >= 0; i -= 1) {
        if (str.charCodeAt(i) > 255) {
          console.log('Wrong string parameter');
          return false;
        }
        int += str.charCodeAt(i) * multi;
        multi *= 256;
      }
    }
    sign = (int >>> 31) ? -1 : 1;
    exp = (int >>> 23 & 0xff) - 127;
    mantissa = ((int & 0x7fffff) + 0x800000).toString(2);
    for (i = 0; i < mantissa.length; i += 1) {
      float += parseInt(mantissa[i]) ? Math.pow(2, exp) : 0;
      exp--;
    }
    return float * sign;
  }

//////////////////////////////////
if(data_mb[loop1] == '{' && data_mb[loop1] != ""){
  // loop1++;
  for(loop1; loop1<=length_data; loop1++){
    bufArray1 = removeQuote(data_mb,loop1);
  }
  bufArr1Count1++;
}else{
  console.log("No Data found");
}
console.log(bufArray1);



function removeQuote(data_mb,loop1){
  if(data_mb[loop1] == '"'){
    // Remove ""
  }else{

    bufArray1[bufArr1Count1]=bufArray1[bufArr1Count1].push(data_mb[loop1]);
    loop2++;
  }
  return bufArray1;
}

                          /**   Check */
let loop3;
let bufArr1Length = bufArray1.length;
let braceCount = 0;
for(loop3 = 0; loop3<=bufArr1Length; loop3++){

  if(bufArray1[loop3]=='{' && braceCount == 0){
    braceCount++;

  }

}


// var bufArray1=[];
// var bufArray2=[];
// var bufArray3=[];
// var length_data = data_mb.length;
// let bufArr1Count1 = 0;
// let loop1 = 0;
// let loop2 = 0;

//                             /** Remove Quotes from String */


// var someStr = data_mb.replace(/[^a-zA-Z0-9,{:}]/g, '');
// someStr = someStr.replace(/[:]/g, ',');
// someStr = someStr.replace(/[}{]/g, '');
// arrtest = someStr.split(',');

// var jSonString = "{";
// var hasNumber = /\d/;  


// for (let loopP = 0; loopP<arrtest.length; loopP++){
//   var param = "Param";
//   conVal = loopP.toString();
//   pramName = param.concat(conVal);
//   if(hasNumber.test(arrtest[loopP])  ){
//     if(loopP < 2){

//       let quoteValue = '"';
//       quoteValue = quoteValue.concat(arrtest[loopP], '"');



//       jSonString = jSonString.concat(pramName, ':', quoteValue, ',');
//     }
//     else
//     {
//       var strofHex = arrtest[loopP].toString();
//       floatPointNo = parsetoFloat(strofHex);
//       arrtest[loopP] = floatPointNo;
//       jSonString = jSonString.concat(pramName, ':', arrtest[loopP], ',');
//     }

//   }else{
//     jSonString = jSonString.concat(pramName, ':', arrtest[loopP], ',');
//   }
// }
// jSonString = jSonString.slice(0, -1);
// jSonString = jSonString.concat('}');
// console.log(jSonString);

// var obj_RestructuredJson =  JSON.parse(jSonString);


// // var hasNumber = /\d/;   
// //       hasNumber.test("ABC33SDF");  //true
// //       hasNumber.test("ABCSDF");  //false 
// // console.log(hasNumber.test("ABCSDF"));

// function strtoint(str) {
//     const augend = "0x";
//     str = augend.concat(str);
//     var result = Number(str);
//     return (result);
//   }
//   // newJsonCreate();
//   // obj = JSON.parse(newJson);

//   /** 	Function to convert String of Hexadecimal to Floating Point		 */

//   function parsetoFloat(str) {
//     const augend = "0x";
//     str = augend.concat(str);
//     var float = 0, sign, order, mantissa, exp,
//       int = 0, multi = 1;
//     if (/^0x/.exec(str)) {
//       int = parseInt(str, 16);
//     }
//     else {
//       for (var i = str.length - 1; i >= 0; i -= 1) {
//         if (str.charCodeAt(i) > 255) {
//           console.log('Wrong string parameter');
//           return false;
//         }
//         int += str.charCodeAt(i) * multi;
//         multi *= 256;
//       }
//     }
//     sign = (int >>> 31) ? -1 : 1;
//     exp = (int >>> 23 & 0xff) - 127;
//     mantissa = ((int & 0x7fffff) + 0x800000).toString(2);
//     for (i = 0; i < mantissa.length; i += 1) {
//       float += parseInt(mantissa[i]) ? Math.pow(2, exp) : 0;
//       exp--;
//     }
//     return float * sign;
//   }
// ///////////////////////////////////////////////////////////



// if(data_mb[loop1] == '{' && data_mb[loop1] != ""){
//   // loop1++;
//   for(loop1; loop1<=length_data; loop1++){
//     bufArray1 = removeQuote(data_mb,loop1);
//   }
//   bufArr1Count1++;
// }else{
//   console.log("No Data found");
// }
// //console.log(bufArray1);



// function removeQuote(data_mb,loop1){
//   if(data_mb[loop1] == '"'){
//     // Remove ""
//   }else{

//     bufArray1[bufArr1Count1]=bufArray1[bufArr1Count1]
//     loop2++;
//   }
//   return bufArray1;
// }

//                           /**   Check */
// let loop3;
// let bufArr1Length = bufArray1.length;
// let braceCount = 0;
// for(loop3 = 0; loop3<=bufArr1Length; loop3++){

//   if(bufArray1[loop3]=='{' && braceCount == 0){
//     braceCount++;

//   }

// }








// // var newJson = "";
// //   function newJsonCreate() {
// //     var length_data = data_mb.length;
// //     var _buffer;
// //     var tmp_counter = 0;
// //     for (let loop_1 = 0; loop_1 <= length_data-1; loop_1 ++) {                          // loop for read data of the string 1 by 1
// //       _buffer = data_mb[loop_1];
// //       if ((data_mb[loop_1] = ':') && (data_mb[loop_1] != '{') && (tmp_counter == 0)) {                   // if value is not an object

// //         while (data_mb[loop_1] == '"') {
// //           for(let buffer_loop = 0; buffer_loop<=20; buffer_loop ++ ){
// //             _buffer[buffer_loop] = data_mb[loop_1];
// //           }

          
// //           var _bufferData =  parsetoFloat(_buffer);          
// //           if(isinastance(_bufferData[loop_1], int)){
// //             _buffer=parsetoFloat(_buffer);
// //           }

// //           break;
// //         }
// //         newJson = newJson.concat(_buffer);
// //       } else {
// //         newJson.concat(data_mb[loop_1]);
// //         tmp_counter = 0;        
// //       }
// //       newJson.concat(data_mb[loop_1]);
// //     }
// //   }
// //   console.log(message);


  // let datetime = Date.now();
  // let datetime_str = datetime.toString();
  // var endpos1 = ',"Timestamp":';
  // var endpos2 = '}'
  // var endpos = endpos1.concat(datetime_str, endpos2);
  // data_length = data_mb.length;
  // data_mb = data_mb.slice(0, data_length - 1);
  // data_mb = data_mb.concat(endpos);






// //   /////
// //   /**Pop Parameter and and value between double qoute */

 // let TinFloatinpoint = parsetoFloat(TinString);
  //obj.IED01.TimeInFloatPoint = TinFloatinpoint;
  // obj.IED01.TimeEpoch = TinEpoch;
  // obj.IED01.V1.V = parsetoFloat(obj.IED01.V1.V);
  // obj.IED01.V2.V = parsetoFloat(obj.IED01.V2.V);
  // obj.IED01.V3.V = parsetoFloat(obj.IED01.V3.V);
  // obj.IED01.I1.V = parsetoFloat(obj.IED01.I1.V);
  // obj.IED01.I2.V = parsetoFloat(obj.IED01.I2.V);
  // obj.IED01.I3.V = parsetoFloat(obj.IED01.I3.V);
  // obj.IED01.TKW.V = parsetoFloat(obj.IED01.TKW.V);
  // obj.IED01.KVAR.V = parsetoFloat(obj.IED01.KVAR.V);
  // obj.IED01.KVAR.N = parsetoFloat(obj.IED01.KVAR.N);
  // obj.IED01.KVAR.M = parsetoFloat(obj.IED01.KVAR.M);
  // obj.IED01.KVAR.A = parsetoFloat(obj.IED01.KVAR.A);
  // obj.IED01.KVA.V = parsetoFloat(obj.IED01.KVA.V);
  // obj.IED01.KVA.N = parsetoFloat(obj.IED01.KVA.N);
  // obj.IED01.KVA.M = parsetoFloat(obj.IED01.KVA.M);
  // //obj.IED01.KVA.A = parsetoFloat(obj.IED01.KVA.A);
  // obj.IED01.PF.V = parsetoFloat(obj.IED01.PF.V);
  // obj.IED01.PF.N = parsetoFloat(obj.IED01.PF.N);
  // obj.IED01.PF.M = parsetoFloat(obj.IED01.PF.M);
  // obj.IED01.In.V = parsetoFloat(obj.IED01.In.V);
  // obj.IED01.In.N = parsetoFloat(obj.IED01.In.N);
  // obj.IED01.In.M = parsetoFloat(obj.IED01.In.M);
  // obj.IED01.KVARH.V = parsetoFloat(obj.IED01.KVARH.V);
  // obj.IED01.KVARH.N = parsetoFloat(obj.IED01.KVARH.N);
  // obj.IED01.KVARH.M = parsetoFloat(obj.IED01.KVARH.M);
  // obj.IED01.KWHI.V = parsetoFloat(obj.IED01.KWHI.V);
  // obj.IED01.KWHI.N = parsetoFloat(obj.IED01.KWHI.N);
  // obj.IED01.KWHI.M = parsetoFloat(obj.IED01.KWHI.M);
  // obj.IED01.KWHE.V = parsetoFloat(obj.IED01.KWHE.V);
  // obj.IED01.KWHE.N = parsetoFloat(obj.IED01.KWHE.N);
  // obj.IED01.KWHE.M = parsetoFloat(obj.IED01.KWHE.M);
