# HTTP
HyperText Transfer Protocol

We use http to communicate over the web. It is a standardized way of communicating text over the web

## Client/Server
when two machines communicate, they take on client and server role
the client asks for(requests) resource from server, server responds to the request.

## HTTP Request
Client requests to take a certain action to the resource in the server
### Start line
    - Method Verb
        - GET : Requesting to retrieve resource from the server
        - PUT : Requesting to modify existing resource in the server
        - POST : Request to create a new resource in the server
        - DELETE : Request to delete a particular resource in the server
        - Option, Head, etc.
    - Target: Where is this request going? (URL)
### Request Body
    - Payload, especially for PUT and POST request
### Request Header
    - Information about the request itself

## HTTP Response
### Status line
    - Response Status Codes: This is the standardized response from the server regarding the http request it received.
### Response Header
    - information about the response
### Response Body
    - contains the resource client has asked for

## Status Codes
- 1xx: Informational ('mmkay')
- 2xx: Success (we successfully fulfilled your request)
- 3xx: Redirection (we moved the resource you're looking for)
- 4xx: Client side error (your fault)
- 5xx: Server side error (my bad)
