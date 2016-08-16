This is a reduced testcase for a hereby resolved question: why did the spec in `test.js` fail?

To try the testcase:

    npm test

On the master branch, you will get:

    Error: [$injector:unpr] Unknown provider: uiGmapGoogleMapApiProviderProvider <- uiGmapGoogleMapApiProvider

It failed because providers can only be injected at configuration time, while `angular.mock.inject` is meant for run time. The solution in this branch uses a second module to capture the provider at configuration time.

Based on [this quick tutorial by André Eife][eife], found in [this Stack Overflow answer by mzulch][mzulch].

[eife]: https://medium.com/@a_eife/testing-config-and-run-blocks-in-angularjs-1809bd52977e
[mzulch]: http://stackoverflow.com/a/38961838/1166087
