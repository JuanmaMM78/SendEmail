const express = require('express');
const { sendEmail } = require('../helpers/utils');
const router = express.Router();


router.post('/send-email-contact/:nameContact/:emailContact/:textContact', 
  async (req, res) => {

    try {
      const {emailContact} = req.params;
      const {textContact} = req.params;
      const {nameContact} = req.params;

      const subject1 = `ThorAPP notificación de contacto:  ${nameContact}`;
      const text1 = `${nameContact} quiere contactar contigo`;
      const notification1 = `<h2>Hola Juanma</h2><p>Te han enviado desde tu web una notificacion de contacto.</p><p>Persona de contacto: ${nameContact}</p><p>Notificacion:</p><p>${textContact}</p><p>Metodo de Contacto: ${emailContact}</p>`; 
      
      const subject2 = `Notificación recivida. Juanma Martinez`
      const text2 = `Respuesta automática de contacto`;
      const notification2 = `Hola ${nameContact}. Esto es una respuesta automática, en breve me pondré en contacto con usted, muchas gracias y un saludo.`
      const mail = sendEmail(subject1,text1,notification1,emailContact);
      sendEmail(subject2,text2,notification2,emailContact)
      
    res.json(mail);
      
    } catch (error) {
        res.json(error);
    }
  }) 
  

module.exports = router;
