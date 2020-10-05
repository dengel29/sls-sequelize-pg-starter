# AWS Lambda x Postgres
A Serverless Framework project configured to be used with a Postgres db and Sequelize ORM

This repository is the result of some work to get an AWS Lambda working with relational database. It can be used as a starter for others that want to connect their serverless function to a new or existing relational database.

## What this project features

* uses Serverless Framework to upload an AWS Lambda Layer containing Postgresql binaries, so your Lambda function can talk to an AWS RDS instance running Postgres
* pre-packaged Postgres Binary, so all you need to do is run `sls deploy -s prod` and the layer will be uploaded with your function
* Sequelize db connection to AWS RDS instance;
* Sequelize migrations to AWS RDS instance;
* pre-configured `dev` and `prod` environment through the `serverless.yml`

## To use yourself

* clone or fork this project
* have Serverless Framework already configured and connected to your AWS account with `sls config credentials` ([read more here](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/))
* add a `config.json` to the `config` folder to enable use of `sequelize-cli`to run your migrations locally and push them to production server ([see here for more info on how to format this file](https://sequelize.org/master/manual/migrations.html))
* on local, `npm install`, then (if serverless is already installed) `serverless plugin install —name serverless-offline` and `serverless plugin install —name serverless-sequelize-migrations` if you intend to use sequelize to run migrations from this codebase to your local and production databases.
* most configuration is located in the `serverless.yml`. You will need to change the following configuration to be consistent with your own AWS RDS instance:
  * `vpc > securityGroupIds`, 
  * `vpc > subnetIds`
  * `prod` database credentials
  * `dev` database credentials
* if you want to run any migrations use `sls migrations up`

If you have any problems please create an issue and I'll try to address it. 
