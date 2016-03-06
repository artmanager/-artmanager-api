var request = require('supertest'),
	supplierDAO = require('../../domain/dao/SupplierDAO'),
	supplierBUS = require('../../domain/business/SupplierBUS'),
	config 	= require('../../config/config.js'),
	common 	= require(config.common.fileCommon);

var token = { "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OCwibmFtZSI6ImFydG1hbmFnZXIiLCJ0aXBvIjoxLCJpYXQiOjE0NTU0NzIzODl9.0yH_rgL5ZBvwdjjqG3mPmG86zhcBLmpb7C2D_fraVKA"};

describe.only('Supplier', function () {

	
	// it ('Test DAO, insert one supplier, method: InsertOne', function (done) {

	// 	var obj = {
	// 		name : 'gustavo',
	// 		email: 'gustavo_sk@live.com'
	// 	};

	// 	supplierDAO.InsertOne(obj, function (callback) {

	// 		if (callback.supplier.id > 0)
	// 			done();
	// 		else 
	// 			throw 'Unexpected result: ' + callback.Error;
	// 	});
	// });

	// it ('Test BUS, insert one supplier, method: InsertOne', function(done) {
	// 	var obj = { 
	// 		supplier : {
	// 			name : 'gustavo',
	// 			email: 'gustavo_sk@live.com'
	// 		}
	// 	}

	// 	supplierBUS.InsertOne(obj, function (callback) {
			
	// 		if (callback.success)
	// 			done();
	// 		else 
	// 			throw 'Unexpected error: ' + callback.Error;
	// 	});

	// });

	it ('Test BUS, insert one supplier, with one phone and address', function (done) {
		var obj = {
			supplier: {
				name: 'gustavo',
				email: 'gustavosk@live.com'
			},
			phone: [{
				ddd :'11',
				number : '984749397',
				type : 1
			}],
			address: [{
				street: 'rua',
				number: 12,
				neighborhood: 'teste',
				zip_code: '0681460',
				city: 'embu',
				state: 'sp',
				country: 'Brasil'
			}]
		}

		supplierBUS.InsertOne(obj, function (callback) {
			if (callback.success) 
				done();
			else 
				throw 'Unexpected error: + callback.Error';
		})

	});

	// it ('Test Request, insert supplier, url: /supplier, method: POST', function (done) {
		
	// 	var obj = { 
	// 		"ds_nome": "Gustavo ",
	// 		"telefone" : [{ "ddd" : 12, "numero" : "12321312", "tipo" : 1}],
	//   		"endereco" : [{"rua": "teste", "numero" : 1, "bairro" : "teste", 
	// 				  		"cep" : "12312", "cidade" : "sao paulo", "estado" : "SP", "pais" : "BR" }]
	// 	};

	// 	request(config.application.url)
	// 	.post(common.routes.supplier.postSupplier)
	// 	.send(obj)
	// 	.set('Accept', 'application/json')
	// 	.set('x-access-token', token.token)
 //      	.expect('Content-Type', /json/)
 //      	.expect(200)
 //      	.end(function (err, res) {
 //      		done();
 //      	});
	// });
});