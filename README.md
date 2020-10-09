# Mailer-Api
SEND ANONYMOUS MAILS API


## Description
This API helps you to send mails to anyone without requiring you to signin to any Google account
## Table of Contents

 * [Technologies](#technologies)
 * [Features](#features)
 * [Installation](#installation)

### Technologies
* Nodejs Express framework

### Application API Documentation


### Persistent API Enpoint
Api entry point (http://localhost:3333/api/v1/send/to_many)
Persistent API Endpoints is hosted at #coming soon
### Features
* Send Mails to a single User
* Send Mails to Multiple Users at a go


## API Endpoints

###

<table>

<tr><th>HTTP VERB</th><th>ENDPOINT</th><th>TASK</th></tr>

<tr><td>POST</td> <td>/send/to_many</td> <td>Send Mail to Many Users</td></tr>

<tr><td>POST</td> <td>/send/to_one</td> <td>Send Mail to a User</td></tr>


#### Send a mail to one client

* Method - POST

* URL - http://localhost:3000/api/v1/send/to_one

* Sample Request

```
{
    "mail": "abc@gmail.com",
    "message": "dshbcd hchb ch che vh ch hd vhv",
    "subject": "End SARS",
    "from": "anonymous@nigeria"
}
```

* Sample Response

```
{
   
    "message": "Message sent to abc@gmail.com",
    "object": "sent"
}
```

#### Send a mail to multiple client

* Method - POST

* URL - http://localhost:3000/api/v1/send/to_one

* Sample Request

```
{
    "mails": ["abc@gmail.com", "xyz@gmail.com"],
    "message": "dshbcd hchb ch che vh ch hd vhv",
    "subject": "End SARS",
    "from": "anonymous@nigeria"
}
```

* Sample Response

```
{
   
    "message": [
        "message sent to minister1@gmail.com",
        "message sent to minister2@gmail.com"
    ]
}
```



</table>

## Getting Started

### Installation 

* Create a folder on your computer and navigate to the folder using your terminal
* git clone https://github.com/Humiditii/Mailer.git
* Run `npm install` to install packages and dependencies
* Run `npm run dev` to start the server
* Navigate to http://localhost:3333/ on your browser to have access to the  API

#### Prerequisites

* To try out the endpoints, use the POSTMAN API Toolchain, visit https://getpostman.com

#### Testing with Postman

* After successful installation as stated above
* Navigate to http://localhost:3333/ on the Postman App
* Try out any of the API endpoints
* Enjoy! 


### Author 
Babatunde A.O.





