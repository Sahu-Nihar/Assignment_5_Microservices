# Assignment_5_Web_Services_&_Docker

This is a microservice application implemented using node.js. It is a customer and order details application which has 4 API endpoints. 

The 4 end points are:
1. /api/v1/customers => shows list of all customers details.
2. /api/v1/customers/<customer_id> => shows details of that particular customer.
3. /api/v1/customers/<customer_id>/orders => shows list of orders of that selected customer.
4. /api/v1/customers/<customer_id>/orders/<order_id> => shows order details of the selected order of the selected customer.

## Available Scripts

<kbd> 
  <h2> To run the application on docker: </h2>
</kbd>

## `docker build -t <image_name> .`

To build the docker image intially run the above command inside the project directory in your terminal

## `sudo docker build -t <image_name> .`

To build the docker image for linux users

## `docker image`

To view all the existing docker image

## `sudo docker image`

To view existing docker image for linux users

## `docker run -it -p 8080:8080 <image_name>`

To the run the docker image in order to run the application and server

## `sudo docker run -it -p 8080:8080 <image_name>`

To the run the docker image in order to run the application and server for linux users


  <kbd> 
  <h2> To run the application locally: </h2> 
</kbd>

## `npm install`

Install all the packages and dependency required to run the application on your local machine.

### `npm run dev`

Runs the app on port 8080.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### There is a frontend react application/ web page for this application to run the endpoints. => (Assignment_5_Frontend)

### The repository also contains a power point presentation for this assignment (Assignment_5_PPT.pptx)
