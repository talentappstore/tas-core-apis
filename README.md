Talent App Store
=======
[Talent App Store](http://www.talentappstore.com) is an open platform for integrating multi-tenanted HR microservices.

See the [wiki](https://github.com/talentappstore/tas-core-apis/wiki) for developer documentation.


Building the generated contents of this repository
----------------------------------------
This repository contains both the source files for Aotal's core API definitions (raml, json schema, json, html) and some generated output (mainly the html representation of the raml).

After changing the source, update the generated output by using the tools from the tas-des-static repository at https://github.com/talentappstore/tas-des-static.

As well as generating html files, the build process also validates the raml and tests every json example against its corresponding json schema.
