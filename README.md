Talent App Store
=======
Talent App Store is an open iPaaS for integrating multi-tenanted HR microservices.

This repository contains:
- a [master index](http://talentappstore.github.io/tas-core-apis/) of the core API documentation
- browsable API definitions (for API calls [into](http://talentappstore.github.io/tas-core-apis/generated/coreIn.raml.html) and [out of](http://talentappstore.github.io/tas-core-apis/generated/coreOut.raml.html) the core) generated from the raml.

The request and response bodies of virtually all of Aotal's APIs are in json schema format. There are comprehensive examples in json that match to the schemas.    

There are also several walkthrough documents, which contain blow by blow descriptions of the sequence of API calls to complete some scenario.

These APIs are provided under an open source license. We really welcome your feedback.


Why Talent App Store?
==================
Human resources (HR) software is a classic long tail industry. A few very large integrated talent management (ITM) suites try to cover all the bases from hire to retire. Other large players concentrate on specific areas within HR like recruitment or learning and development. And a long tail of thousands of small, agile players brings innovative solutions to every area of the HR continuum, from recruitment marketing to employment branding.

While the larger players would like to offer their customers a one stop shop, they just can't keep pace with the offerings from the long tail. In many areas, it doesn't even make sense for them to do so - how could a single performance management product for example possibly be the best solution for every division of every organization in every country in the world?

But the challenge facing customers wanting to adopt these exciting new niche technologies is the roadblock they encounter just beyond the demo stage -  integrating with the data and activity in the customer's production HR platforms is usually hard - really hard.

Talent App Store addresses this integration challenge by providing a marketplace and platform where small, best of breed HR applications - microservices -  communicate with each other via APIs. Customers can click to assemble microservices together into a secure, working HR technology stack for recruiting, growing and managing talent. 

To you, the SaaS app developer, Talent App Store provides access to a large audience of potential customers who can trial and buy your software instantly. Because Talent App Store is an integration platform, not a PaaS, you don't need to change your programming environment or the way you host or develop your application. 


Hub and spoke API platforms
=========================
The API platforms provided by most Integrated Talent Management (ITM) suites today for integrating HR applications use the traditional hub and spoke model. Hub and spoke is a natural evolution for large applications that have added APIs to a long established product.

Your app acts as a small spoke, one of many clustered around a single large HR platform/ ITM suite that acts as the hub.

![Hub and spoke API platform](http://talentappstore.github.io/tas-core-apis/graphics/hubspoke.png)

In the hub and spoke model, the APIs themselves are the intellectual property of the hub. The hub is in charge. It defines the APIs that your app can use. The APIs are only designed for your app to communicate to the hub - not to any other app. And those API calls are typically inwards, where your app calls APIs on the hub, rather than the other way around (although some platforms provide limited webhooks allowing the hub to push events to your app).

Hub and spoke API platforms are common and familiar, but they enforce lock-in and present a number of challenges to you, the app developer, and to customers.

 
The peer to peer API platform
============================
Talent App Store is not hub and spoke based, but uses an open peer to peer model. In a peer to peer system, all apps are equal, and **any app can consume any API on any other app.** There is no single, large hub.  

![Peer to peer API platform](http://talentappstore.github.io/tas-core-apis/graphics/peerpeer.png)

For developers, the peer to peer model promotes agile API development and lets your build your SaaS app once and have any customer instantly provision it.

For customers, the peer to peer model promotes choice via true plug and play of apps, and the overarching security model provides a single throat to choke in the event of a security breach.


Agile API development
-------------------
Because any app can call APIs on any other app in the peer to peer model, there can't be a single definitive set of all APIs as there is in hub and spoke. That would make every app developer dependant on some single commercial entity for its API definitions, handing the power in the relationship to that larger player.

Instead, the peer to peer platform allows any developer to define their own APIs. All API definitions are stored in an open registry provided by the platform, available for use by any developer. The registry also stores definitions of every app, and the APIs that each app consumes and produces.

In the peer to peer model, developers are empowered. If a developer feels that a certain API is not evolving quickly enough, or in a direction they want, they can fork the API and use it as a starting point for their own new API. If that new API gains traction, the owners of the original API and the new API might decide to merge back to a single API. In this way the peer to peer model brings the agile working style of open source software to the HR software integration space.


Instant provisioning
------------------
In the peer to peer model, the app store is a repository of every customer's install choices, knowing for example that tenant A has installed apps M, N and O.

When a customer wants to use an app, they simply click to install it into one of their tenants (a customer might have, for example, one or two tenants for testing and one for production).

The platform now knows that the tenant has both app M and N installed, and it already knows which APIs each of those apps produce and consume. The platform therefore has everything it needs to join the dots and allow API traffic to start flowing between those apps.

Although peer to peer model can potentially be slower than the hub and spoke model, thats not the case with Talent App Store. API traffic between apps does not flow through Talent App Store's servers, but instead flows directly from one app to the other. Talent App Store acts as an authorization server, not as middleware such as an ESB (enterprise service bus), and does not introduce any kind of bottleneck or single source of failure.


Plug and play
--------------
The peer to peer model provides customers with something unfamiliar in traditional HR software stacks - true plug and play of apps. Plug and play is important at both ends of the purchasing spectrum.

When evaluating new apps, customers can click install to spin up a demo of a new app that runs against their own organization, job and candidate data in a few seconds. They can perform real, hands-on evaluation of several different apps in a day, and make informed "try before you buy" decisions instead of picking through sales pitches and guesswork. 

When running a production stack, plug and play gives customers protection from vendor lockin. In the peer to peer model, any app can call any API on any other app. It follows that a customer can swap out any app and replace it with a different app, as long as the replacement produces and consumes the same APIs. The picture's a little more complex than that for stateful apps, but TAS allows customers to minimise their exposure to lock-in and to leverage their own home-grown and legacy HR software over the long term.   


Single throat to choke
---------------------
When customers compose their HR technology stack from microservices from a number of vendors, security requirements loom even larger than normal.

The peer to peer model for API platforms gives customers a "single throat to choke" if security problems arise - for example if a single app is hacked.

Its easy in a peer to peer platform for developers to define APIs, so it becomes more practical for all apps to perform all communication between each other
through APIs alone. Communication via APIs rather than shared databases is preferred by many developers for microservices.

With all communications between apps happening through APIs, and all API authorization handled via the platform, in response to the customers install choices, the customer now has the power to instantly and completely cut off any badly behaving app. An example of this is the tool provided by Talent App Store to flush API security tokens. This instantly invalidates all previously issued tokens and requires that apps reauthorize before starting up communication to each other again.


Building the generated contents of this repository
----------------------------------------
This repository contains both the source files for Aotal's core API definitions (raml, json schema, json, html) and some generated output (mainly the html representation of the raml).

After changing the source, update the generated output by using the tools from the tas-des-static repository at https://github.com/talentappstore/tas-des-static.

As well as generating html files, the build process also validates the raml and tests every json example against its corresponding json schema.