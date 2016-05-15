'use strict';
let productionBUS = require('../domain/business/ProductionBUS.js');

class ProductionService {
    
    GetRowProduction(req, res) {
        try {
            productionBUS.GetRowProduction(function (callback) {
                res.json(callback);
            })
        } catch (e) {
            res.json({ error: 'N�o foi poss�vel consultar fila de produ��o. ' + e });
        }
    }

    UpdatePercentage(req, res) {
        try {
            let obj = req.body;
            productionBUS.UpdatePercentage(obj, function (callback) {
                res.json(callback);
            });

        } catch (e) {
            res.json({ error: 'N�o foi poss�vel atualizar o status do produto. ' + e });
        }
    }

}

module.exports = new ProductionService();
