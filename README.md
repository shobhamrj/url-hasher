<!--
title: 'url-hasher'
description: 'Used to hashed URL'
layout: Doc
platform: AWS
language: nodeJS
authorLink: 'https://github.com/shobhamrj'
authorName: 'Shobham Rajak'
-->

# url-hasher Build With Node Express API on serverless framework that leverage serverless framework to manage AWS services.
The API is implemented using Node.js, Express.js, and MongoDB with the intention of creating a URL hashing service. Additionally, the serverless framework is utilized, leveraging AWS services for deployment and scalability.

Architecture Choice and Reasoning:

1. Node.js and Express.js: Node.js is a JavaScript runtime environment that allows for efficient and scalable server-side applications. Express.js is a popular web application framework for Node.js, providing a robust set of features and simplifying the development process. The choice of Node.js and Express.js enables efficient handling of incoming requests and seamless integration with other modules and libraries.

2. Serverless Framework: The serverless framework is utilized to deploy the application and manage AWS services. Serverless architecture allows for automatic scaling and efficient resource allocation, as the infrastructure is provisioned on-demand. It eliminates the need to manage servers and infrastructure manually, making it easier to focus on application development and reducing operational overhead.

3. AWS Services: The architecture leverages AWS services to provide a scalable and reliable infrastructure. While the specific services used are not explicitly mentioned, AWS services commonly employed in serverless architectures include AWS Lambda for running serverless functions, Amazon API Gateway for managing API endpoints. The choice of AWS services ensures high availability, scalability, and fault tolerance for the application.

4. MongoDB: MongoDB is chosen as the database for storing URL data. MongoDB is a popular NoSQL database that offers flexibility and scalability, making it suitable for handling large amounts of data. It allows for easy storage and retrieval of JSON-like documents, which aligns well with the nature of the data being stored in the URL hashing service. Additionally, MongoDB's schema-less design enables agile development.

Overall, this architecture choice combines the flexibility of Node.js and Express.js, the scalability and ease of deployment offered by the serverless framework and AWS services, and the efficient data storage provided by MongoDB. It aims to create a high-performance, scalable, and reliable URL hashing service that can handle a large number of requests while minimizing operational complexity.
