'use strict'
let whichBus = require('../domain/business/WhichBUS.js')
    
class WhichService {

    InsertWhich(req, res) {

        try {
            var obj = req.body;
            if (obj.client == undefined || obj.client.id <= 0) {
                res.json({ error: 'Cliente invalido' });
            }

            if (obj.user == undefined || obj.user.id <= 0) {
                res.json({ error: 'Usu�rio invalido ' });
            }

            whichBus.InsertOne(obj, function (callback) {
                res.json(callback);
            });


        } catch (e) {
            res.json({ error: 'N�o foi poss�vel cadastrar o pedido. ' + e });
        }
    }

    GetWhich(req, res) {
        try {
            console.log('Service');
            whichBus.ConsultWhich(function (callback) {
                res.json(callback);
            });

        } catch (e) {
            res.json({ error: 'N�o foi poss�vel consultar os pedidos. ' + e });
        }
    };

    UpdateEntrancePending(req, res) {
        try {
            let obj = req.body;
            console.log(obj);
            if (obj.id == null) {
                res.json({ error: 'Pedido invalido' });
            }
            
            whichBus.UpdateEntrancePending(obj, function (callback) {
                res.json(callback);
            });

        } catch (e) {
            res.json({ error: 'N�o foi poss�vel atualizar os dados. ' + e });
        }
    }
}

module.exports = new WhichService();