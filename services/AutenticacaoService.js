var jwt = require('jsonwebtoken');
var promise = require('bluebird');
var cripto = require('md5');
var decrip = require('atob');
var usuarioDAO = require('../domain/dao/UsuarioDAO');
var properties = require('properties');

 function Autenticacao(){
	 
 }

 Autenticacao.prototype.geraToken = function (req, res, next)  {
	var body, obj, user;
	body = this;
	try	{
		var param = req.body;
		param = decrip(param.data);
		param = param.split('-');
		
		user = {
			usuario : param[0],
			senha	: cripto(param[1])
		};

		usuarioDAO.findOne(user, function (r) {
			if (r == null || r == undefined) {
				res.json({erro : 'Usuário ou senha inválidos.'});
				return;
			}

			obj = {
				id : r.id,
				name : r.ds_descricao,
				tipo : r.perfil
			};
			body = { 
				token : jwt.sign(obj, 'n3JZZm27T4yccdVf')
			};
			console.log(body);
			res.json(body);
		});	
	} catch (e) {
		res.json({erro : e});
	}
 };

 Autenticacao.prototype.validaToken = function(req, res, next) {
 	try	{
 		var param = req.body;
 		var token = param.token;
 		var result = cripto.verify(token, 'n3JZZm27T4yccdVf');

 		console.log('Result ' + result);

 	} catch(e) {
 		res.json({erro : e});
 	}
 };
 
 module.exports = new Autenticacao();
