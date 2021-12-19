import express from 'express';
import fs from 'fs';

const route = express.Router();

const dataPath = './Data/Data.json';

const getSendData = () => {
    const jsonData = fs.readFileSync(dataPath);
    return JSON.parse(jsonData);
}
const saveSendData = (data) => {
    const stringifyData = JSON.stringify(data);
    fs.writeFileSync(dataPath, stringifyData);
}

route.get('/',(req,res) => {
    res.send('This is Externship Task 1 - Service to send email.');
});

route.post('/sendEmail',(req,res) => {
    try {
        const { to, email_body } = req.body;

        const existingData = getSendData();
        existingData.push({ to: to, email_body: email_body});

        saveSendData(existingData);
        res.send({ success: true, message: 'Email sent successfully'});
    } catch (error) {
        res.send({ success: 'false', message: error.message});
    }
});

export default route;