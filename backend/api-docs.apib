FORMAT: 1A
HOST: http://127.0.0.1:300/api/v1

# Group Auth
Auth endpoints

## Auth [/auth]

### Login [POST /auth/login]

+ Request User login

    + Headers

            Accept: application/json
            Content-Type: application/json
            Authorization: Bearer {TOKEN}

    + Attributes (Login)
            
+ Response 200 (application/json)
    + Attributes (LoginResponse)

+ Response 401

### Register [POST /auth/register]

+ Request Register a new User

    + Headers

            Accept: application/json
            Content-Type: application/json
            Authorization: Bearer {TOKEN}

    + Attributes (Register)
            
+ Response 200 (application/json)
    + Attributes (User)

+ Response 422 (application/json)
    + Attributes (ValidationError)

### Me [POST /auth/me]

+ Request Logged user

    + Headers

            Accept: application/json
            Content-Type: application/json
            Authorization: Bearer {TOKEN}
            
+ Response 200 (application/json)
    + Attributes (User)

+ Response 401

# Group Tools
Tools endpoints

## Tools [/tools]

### List Tools [GET /tools{?q,tag}]

+ Parameters
    + q: `search string` (string, optional) - Search tools by a query string
    + tag: `tag_name` (string, optional) - Search tools by tag name

+ Request List Tools

    + Headers

            Accept: application/json
            Content-Type: application/json
            Authorization: Bearer {TOKEN}

+ Response 200 (application/json)
    + Attributes (array[ToolResponse])

+ Response 401

### Create Tool [POST]

+ Request Store new Tool

    + Headers

            Accept: application/json
            Content-Type: application/json
            Authorization: Bearer {TOKEN}

    + Attributes (ToolStore)
            
+ Response 200 (application/json)
    + Attributes (ToolResponse)

+ Response 401

+ Response 500 (application/json)
    + Attributes (Error)


## Delete Tool [DELETE /tools/{id}]

+ Parameters
    + id (string)

+ Request Delete Tool

    + Headers

            Accept: application/json
            Content-Type: application/json
            Authorization: Bearer {TOKEN}
            
+ Response 204

+ Response 401

+ Response 500 (application/json)
    + Attributes (Error)


# Data Structures

## Login (object)
+ username: `myuser` (string) - User username
+ password: `mypass` (string) - User password

## LoginResponse (object)
+ access_token: `...` (string) - Authorization Bearer Token
+ token_type: `bearer` (string)
+ expires_in: 1800 (number) - Expiration time

## Register (object)
+ name: `John Doe` (string) - User name
+ username: `john_doe` (string) - User username
+ password: `john1234` (string) - User password

## User (object)
+ id: 1 (number) - User ID
+ name: `John Dow` (string) - User name
+ username: `john_doe` (string) - User username
+ created_at: `2021-06-17T11:40:34.000000Z` (string) - Date of the user creation
+ updated_at: `2021-06-17T11:40:34.000000Z` (string) - Date of the the last user info update

## ToolStore (object)
+ name: `My new Tool` (string) - Tool Name
+ link: `http://www.google.com` (string) - Tool URL
+ description: `My new tool description` (string) - Tool Description
+ tags: `tag1 tag2` (string) - Tool Tags separated by spaces

## ToolResponse (object)
+ id (number) - Tool ID
+ name: `GitHub` (string) - Tool Name
+ link: `https://github.com` (string) - Tool URL
+ description: `My Github description` (string) - Tool Description
+ tags: `git`, `code` (array[string]) - Tool Tags
+ created_at: `2021-06-17T11:40:34.000000Z` (string) - Creation date
+ updated_at: `2021-06-17T11:40:34.000000Z` (string) - Last update date

## Error (object)
+ message: `Error message` (string) - Error Message

## ValidationError (object)
+ message: `Error message` (string) - Error Message
+ errors (array[ValidationErrorField]) - Error messages

## ValidationErrorField
+ field_name (array[string]) - Field errors