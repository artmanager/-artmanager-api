var clintDao 	= require('../dao/ClientDAO'),
	phoneDao 	= require('../dao/PhoneDAO'),
	adressDao 	= require('../dao/AddressDAO');

function ClientBUS() {

}

ClientBUS.prototype.ClientRegister = function(obj, callback) {

	var cliente, tel, end, id;
	tel 	= obj.telefone;
	end 	= obj.endereco;

	cliente = { 
		nome : obj.nome,
		email : obj.email,
		cpf_cnpj : obj.cpf_cnpj
	};
	if (obj != null && obj != undefined) {
		clientDao.InsertOne(cliente, function (result) {
			id = result.cliente.id;
			if (tel != null && tel != undefined && tel.length > 0) {
				tel.forEach(function (o) {
					var ddd, numero;
					ddd = o.numero.substring(0,2);
					numero = o.numero.substring(2);
					var telefone = {
						cliente 	: id,
						ddd 		: ddd,
						numero		: numero,
						tipo 		: numero.length >= 9 ? 1 : 0							
					};
					telDao.InsertOne(telefone, function (e) {
					});
				});
			}

			if (end != null && end != undefined && end.length > 0) {
					end.forEach(function (o) {
					var endereco = {
						cliente : id,
						rua 	: o.rua,
						numero 	: o.numero,
						bairro	: o.bairro,
						cep		: o.cep,
						cidade	: o.cidade,
						estado	: o.estado,
						pais	: o.pais
					};

					if (endereco.estado.length > 2) {
						callback( {erro : 'O campo estado pode ter apenas 2 caracteres'});
						return;
					}

					adressDao.insertOne(endereco, function (r) {
					});
				});
			}

			callback({ success : 'Cliente cadastrado com sucesso. '});
		});
	}

};

module.exports = new ClientBUS();