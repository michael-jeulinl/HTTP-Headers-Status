# HTTP-Headers-Status
Quick React application that allows to visualize and debug custom HTTP headers.

![screenshot](https://github.com/michael-jeulinl/HTTP-Headers-Status/blob/master/screenshot.png?raw=true)


## Features
HTTP responses sent by some service provider contain special headers:
1. receive general header information as `status`, `powered by`, `server engine`

2. the secure information is based on the presence of the `strict-transport-security` tag

3. the header `x-cache` generated by AWS CloudFront having the value` Miss from cloudfront` or `Hit from cloudfront`

4. the `x-amz-cf-pop` header showing the AWS CloudFront point of presence that served the request

<br />
<div align="center">The service offers a high level view of these headers.</div>
<br />

## Quick start
1.  Make sure that you have Node.js v12 and npm v5 or above installed.
2.  Clone this repo using `git clone https://github.com/michael-jeulinl/HTTP-Headers-Status.git`
3.  Run `npm install` in order to install dependencies and clean the git repo.<br />
4.  Run `npm run-script build` in order to build the app
5.  _At this point you can run `npm start` to see the example app at `http://localhost:3000`.

## Testing
1. Run `npm test` in order to launch all the tests.

## Documentation
### ** Backend part **
The back-end consists of a NodeJS API exposing a single entry point on the root path `/api/getHeader` and accepting a `url` parameter.

The service exposed by the API consists in making the call to the URL given as a parameter and retrieving the HTTP headers useful to build the response expected by the front-end.

Here is the information to decode the information from x-amz-cf-pop: [https://www.feitsui.com/en/article/3](https://www.feitsui.com/en/article/3) ,

## License
This project is licensed under the MIT license, Copyright (c) 2020 Michael
Jeulin-Lagarrigue. For more information see `LICENSE.md`.
