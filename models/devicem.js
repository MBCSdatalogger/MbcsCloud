var mongoose = require('mongoose');
var schema = mongoose.Schema;

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



var descriptionSchema = ({
    Q: { type: String },
    V: { type: Number,  
//        set: parsetoFloat
},
    N: { type: Number ,
///        set: parsetoFloat
},
    M: { type: Number ,
//        set: parsetoFloat
},
    A: { type: Number ,
//         set: parsetoFloat
},

});

var DevicemSchema = ({
    // DID: {type: String },
    D: { type: String, },
    T: {type : Number, required: true, unique : true},
    // TimeInFloatPoint: {type:Number },
    // TimeEpoch: {type:Number},
    V1: { type: descriptionSchema },
    V2: { type: descriptionSchema },
    V3: { type: descriptionSchema },
    I1: { type: descriptionSchema },
    I2: { type: descriptionSchema },
    I3: { type: descriptionSchema },
    I4: { type: descriptionSchema },
    I8: { type: descriptionSchema },
    I9: { type: descriptionSchema },
    TKW: { type: descriptionSchema },
    KVAR: { type: descriptionSchema },
    KVA: { type: descriptionSchema },
    PF: { type: descriptionSchema },
    In: { type: descriptionSchema },
    KVARH: { type: descriptionSchema },
    KWHI: { type: descriptionSchema },
    KWHE: { type: descriptionSchema },
    DI3: { type: descriptionSchema },
    DI4: { type: descriptionSchema },
    LATI:{ type: descriptionSchema },
    LONG: { type: descriptionSchema },

          /**mA Datas */
    IRR: { type: descriptionSchema },
    RH:{ type: descriptionSchema },
    AT: { type: descriptionSchema },

})

// var idSchema = ({
//     IED01: { type: keySchema },
//     IED02: { type: keySchema },
//     IED03: { type: keySchema }
// })


// var DevicemSchema = new schema({
//     IED01: { type: keySchema },
//     Timestamp: {type : Number, required: true, unique : true},
// },
// )
// DevicemSchema.add({DID: idSchema});


var Devicem = mongoose.model("Devicem", DevicemSchema);
module.exports = { Devicem };
