'use strict'

class WhichService {

    InsertProduct(req, res) {
        try {
            var obj = req.body;
            if (obj.client == undefined || obj.client.id <= 0) {

            }

            if (obj.user == undefined || obj.user.id <= 0) {

            }


        } catch (e) {
            res.json({ error: 'N�o foi poss�vel cadastrar o pedido. ' + e });
        }
    }
}

module.exports = new PedidosService();