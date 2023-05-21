# Steps to deploy the application via serverless framework / run it locally, run the test suits and access the api-docs

1. Install serverless framework, with npm globally
```
npm i serverless -g
```
2. Configure your AWS credentials to allow deployment using the Serverless Framework. You can follow the official Serverless Framework documentation. (https://www.serverless.com/framework/docs/providers/aws/guide/credentials/)

3. Set up a MongoDB instance or use an existing one to store the URL data. Make sure you have the connection details (e.g., URL, credentials) for your MongoDB database. (https://www.mongodb.com/atlas/database)
 
4. Clone the repository.
```
git clone git@github.com:shobhamrj/url-hasher.git
```
5. Change the directory and install the dependencies.
```
cd url-hasher
npm i
```

To deploy the application, serverless uses AWS Cloudformation to access the AWS resources therefore make a user AWS IAM and give these two permissions AdministratorAccess and AWSCloudFormationFullAccess, then run the command given below, (although you may adjust the permissions as needed)
``` 
serverless deploy
```
To delete the AWS resources, use this command
``` 
serverless remove
```


To run the application in your local machine make sure you have installed serverless-offline from npm (although it is already mentioned in package.json), then run the following command,
``` 
serverless offline
```

To run the test suits, use the command,
```
npm run test
```

The swagger api-docs is available in the home directory or '/api-docs'


