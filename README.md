Talent App Store
=======
Talent App Store is an open iPaaS for integrating multi-tenanted HR microservices.

The documentation lives [here](https://github.com/talentappstore/tas-core-apis/wiki).

Contents
======
This repository contains:
- a [master index](http://talentappstore.github.io/tas-core-apis/) of the core API documentation
- browsable API definitions (for API calls [into](http://talentappstore.github.io/tas-core-apis/generated/coreIn.raml.html) and [out of](http://talentappstore.github.io/tas-core-apis/generated/coreOut.raml.html) the core) generated from the raml.

The request and response bodies of virtually all of Aotal's APIs are in json schema format. There are comprehensive examples in json that match to the schemas.    

There are also several walkthrough documents, which contain blow by blow descriptions of the sequence of API calls to complete some scenario.

These APIs are provided under an open source license. We really welcome your feedback.


Building the generated contents of this repository
----------------------------------------
This repository contains both the source files for Aotal's core API definitions (raml, json schema, json, html) and some generated output (mainly the html representation of the raml).

After changing the source, update the generated output by using the tools from the tas-des-static repository at https://github.com/talentappstore/tas-des-static.

As well as generating html files, the build process also validates the raml and tests every json example against its corresponding json schema.
