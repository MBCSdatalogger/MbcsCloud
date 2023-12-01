import Devicem from '../models/devicem.js';


export const getDevicemb = async (req, res) => {
    try{
        const deviceInfo = await Devicem.find();
        res.status(200).json(deviceInfo);
    }catch(error){
        res.status(404).json({message: error.message})
    }
}