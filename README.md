<!DOCTYPE html>
<html>
<body>
<div align="center">
    <h1>Restauranteer Serverless Lambda App</h1>
    <img src="https://i.imgur.com/kqvjJ3c.png" alt="Logo" width="600" height="600">
</div>

<h2>Overview</h2>

<p>Restauranteer is a serverless API designed to streamline the management of restaurants. Leveraging AWS Lambda functions for serverless computing and a PostgreSQL serverless database, Restauranteer provides a scalable and efficient solution for handling various aspects of restaurant management.
</p>

<h2>Features:</h2>

<ul>
    <li><strong>Restaurant CRUD Operations:</strong> Easily manage restaurant data, including creating, updating, and deleting restaurant information.</li>
    <li><strong>Resturanat Management:</strong> Define and modify your restaurant with ease, allowing for seamless updates to offerings.</li>
    <li><strong>Serverless Architecture:</strong> Utilizing AWS Lambda functions, Restauranteer ensures cost-effective, scalable, and low-maintenance operation.</li>
    <li><strong>PostgreSQL Serverless Database:</strong> The API is connected to a serverless PostgreSQL database, providing a robust and flexible storage solution.</li>
</ul>

<h2>Technologies Used:</h2>

<ul>
    <li><strong>AWS Lambda:</strong> Serverless computing for scalable and cost-effective execution of functions.</li>
    <li><strong>Serverless Framework:</strong> Simplifies the deployment and management of serverless applications.</li>
    <li><strong>PostgreSQL:</strong> A powerful, serverless database for storing and retrieving restaurant data.</li>
<li><strong>GitHub Actions:</strong> Streamlining development workflow with automated CI/CD process for seamless deployment of AWS Lambda function.</li>
</ul>


<h2>Resources</h2>
<h3>Restaurants Resource</h3>

<ul>
    <li><strong>GET /restaurants</strong>: Retrieve a list of all existing restaurants and their information</li>
    <li><strong>GET /restaurants/:id</strong>: Retrieve specific restaurant's information</li>
    <li><strong>POST /restaurants</strong>: Create a new restaurant</li>
    <li><strong>PUT /restaurants/:id</strong>: Update a restaurant's information.</li>
    <li><strong>DELETE /restaurants/:id</strong>: Delete a restaurant from DB</li>
</ul>

<h2>API Paths</h2>

<p>Here are the main API endpoints with examples of how to use them:</p>

<h3>Restaurants Resource</h3>
<ul>
<li><p>Retrieve all restaurants:</p></li>
<pre><code>GET /restaurants</code></pre>

<li><p>Retrieve a specific restaurant</p></li>
<pre><code>GET /restaurants/:id</code></pre>

<li><p><u></u>Create a new restaurant:</p></li>
<pre><code>POST /restaurants</code></pre>
<pre><code>Example request body:
{
  "name": "Quagmire's Brew Haven ☕",
  "imgURL": "https://i.imgur.com/FB2KAHs.jpg",
  "rating": 4.0,
  "description": "Quagmire's Brew Haven, the coffee shop in Family Guy, where every cup is as bold as Peter, as smooth as Lois, and as full of surprises as Stewie's schemes.",
  "location": "789 Quagmire Avenue",
  "cuisine": "Coffee Shop",
  "reservationDates": [
    "2023-12-02T19:45:00",
    "2023-12-04T16:00:00",
    "2023-12-05T21:00:00"
  ]
}
</code></pre>

<li><p>Update a restaurant's information:</p></li>
<pre><code>PUT /restaurants/:id</code></pre>
<pre><code>
Example request body:
{
  "name": "Quagmire's Brew Haven ☕",
  "imgURL": "https://i.imgur.com/FB2KAHs.jpg",
  "rating": 4.0,
  "description": "Quagmire's Brew Haven, the coffee shop in Family Guy, where every cup is as bold as Peter, as smooth as Lois, and as full of surprises as Stewie's schemes.",
  "location": "789 Quagmire Avenue",
  "cuisine": "Coffee Shop",
  "reservationDates": [
    "2023-12-02T19:45:00",
    "2023-12-04T16:00:00",
    "2023-12-05T21:00:00"
  ]
}
</code></pre>

<li><p>Delete a restaurant:</p></li>
<pre><code>DELETE /restaurants/:id</code></pre>
<br></br>
</body>
</html>
