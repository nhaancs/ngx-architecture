# http-service

This is a wrapper of HTTP Client service, responsible for http error handling in the sam place and provide the same interface for making http requests.

## Example usage

We only need to inject the http service and its dependency (HttpClient)

```typescript
...
constructor(
    ...
    @Inject(HttpClient) public http: HttpClient,
    @Inject(HttpService) public httpService: HttpService,
) {
    ...
}
...

const requestUrl = this.baseUrl.concat('courses/latest');
const options = this.httpService.createOptions(
    HttpRequestMethod.get, 
    this.httpService.createHeader(), 
    requestUrl, 
    null, 
    this.noCredentials
);
this.httpService.execute<T>(options);
``

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test http-service` to execute the unit tests.
