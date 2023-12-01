var mongoose = require('mongoose');
var schema = mongoose.Schema;

var data_mb = require('../mqttClient/subscribe');

jsonlengh = data_mb.length;
let temp_param = "";

///////////////////////////////////////////

/**Fetch Parameter and Values */
// for (let var_manipulateJsonParam = 0; var_manipulateJsonParam <= jsonlengh; var_manipulateJsonParam++) {
//     let  temp_value;
//     if (temp_value) {
//         break;
//     } else if(data_mb[var_manipulateJsonParam] == '{' && data_mb[var_manipulateJsonParam + 1] == '"'){
//         createParamValue();
//     }
//     else{
//         console.log("Error")
//     }
// }

function createParamValue (){
    if (data_mb[var_manipulateJsonParam] == '{' && data_mb[var_manipulateJsonParam + 1] == '"') {
        // read parameter
        var_manipulateJsonParam += 2;
        while (data_mb[var_manipulateJsonParam] != ' " ') {
            temp_param[tempParamn_length] = data_mb[var_manipulateJsonParam];
            var_manipulateJsonParam++;
            tempParamn_length++;
            break;
        }
        if (data_mb[var_manipulateJsonParam] == ':' && data_mb[var_manipulateJsonParam] != '}') {
            var_manipulateJsonParam++;
            if (data_mb[var_manipulateJsonParam + 1] == '"') {
                // read Value as String
                var_manipulateJsonParam += 1;
                while (data_mb[var_manipulateJsonParam] != ' " ' && data_mb[var_manipulateJsonParam + 1] != ',') {
                    temp_value[tempParamn_length] = data_mb[var_manipulateJsonParam];
                    var_manipulateJsonParam++;
                    tempParamn_length++;
                    break;
                }
            }
            scheemaCreate(temp_param, temp_value);
        }
    }
}

/**Create Schema Functionally */

function scheemaCreate(param, value) {

    for (let var_manipulateJsonParam = 0; var_manipulateJsonParam <= jsonlengh; var_manipulateJsonParam++) {
        let  temp_value;
        if (temp_value) {
            break;
        } else if(data_mb[var_manipulateJsonParam] == '{' && data_mb[var_manipulateJsonParam + 1] == '"'){
            createParamValue();
        }
        else{
            console.log("Error")
        }
    }
}

var devSchema = new schema({
    scheemaCreate: {type : String , Timestamp : true},
    
})

var Devicem = mongoose.model("Devicem", devSchema);
module.exports = { Devicem };