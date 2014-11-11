#!/usr/bin/env node

var tv4 = require('tv4');
var fs=require('fs');

var args = process.argv.slice(2);

var dir = args[0];

//load individual schemas. tv4 does not (in any obvious way) report errors for missing schemas, so its important to load them! 
{
	console.log('looping to load all schemas');
	var schemafiles = [];
	var arrayOfSchemaFiles = fs.readdirSync(dir + '/schemas');
	arrayOfSchemaFiles.forEach( function (schemaFile) {
		console.log('  adding schema: ' + schemaFile);
		var loadSchemaText = fs.readFileSync(dir + '/schemas/' + schemaFile);
		var loadSchema = JSON.parse(loadSchemaText);
		tv4.addSchema(schemaFile, loadSchema);
	});
	console.log('done adding schemas');
}

//now loop again, this time parsing all examples against their schemas
{
	console.log('looping to test schemas by validating their corresponding examples');
	var schemafiles = [];
	var arrayOfSchemaFiles = fs.readdirSync(dir + '/schemas');
		arrayOfSchemaFiles.forEach( function (schemaFile) {
		console.log('  schema: ' + schemaFile);
		
		var exampleFound = false;
		var schemaFileName = schemaFile.substr(0, schemaFile.lastIndexOf('.'));		
		var arrayOfExampleFiles = fs.readdirSync(dir + '/examples');
		arrayOfExampleFiles.forEach( function (exampleFile) {

			var exampleFileBase = exampleFile.substr(0, exampleFile.lastIndexOf('-'));  // probably there is a cooler way to do this
			if (exampleFileBase.localeCompare(schemaFileName) == 0) {
				exampleFound = true;
				
				console.log('    example: ' + exampleFile);
				var exampleText = fs.readFileSync(dir + '/examples/' + exampleFile);
				var example = JSON.parse(exampleText);
				var res = tv4.validateMultiple(example,
						schemaFile,
						true, true); // true for check recursive and ban unknown properties
				if (res.errors.length == 0 && res.missing.length == 0 && res.valid == true)
					; // console.log("ok");
				else
					console.log(res);
//				console.log("missing schemas: " + JSON.stringify(arr, null, 4));
			}
		});
		if (! exampleFound)
			console.log('WARNING: no examples found for schema: ' + schemaFile);
	});
	console.log('done validating');
}

