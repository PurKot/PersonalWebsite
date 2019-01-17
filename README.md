Welcome to my personal static website
==================================================
This is a static HTML website deployed by AWS CodeDeploy and AWS CloudFormation to an Amazon EC2 instance.

Contents
-----------

This project includes:

* README.md - this file
* appspec.yml - this file is used by AWS CodeDeploy when deploying the website
  to EC2
* scripts/ - this directory contains scripts used by AWS CodeDeploy when
  installing and deploying the website on the Amazon EC2 instance
* webpage/ - this directory contains static web assets used by the website
  * index.html - this file contains the main website code.
* template.yml - this file contains the description of AWS resources used by AWS
  CloudFormation to deploy the infrastructure

-----------
