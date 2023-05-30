---
layout: post
title:  "A Beginners Guide to AWS Cloud9"
author: ndcharles
categories: [ Tech ]
image: assets/images/aws_cloud9.webp
tags: [ featured, aws, aws_cloud9, devops, cloud ]
---
First, this is coming from a frustrated beginner. During my first project in ALX/Udacity Cloud DevOps Engineering ND I had to setup a static website using AWS S3. The project was going well until I had to upload to S3 bucket. The upload speed was terribly slow despite the file is about 15MB. So I ahd to go programmatically.

## Accessing AWS Services
There are several ways to manage your AWS service.
- The GUI
describe

- AWS cloud console
describe 

- CLI
describe
*I couldn't use this due to account restrictions.

- Cloud9 
describe

## Welcome to AWS Cloud9
AWS cloud9 is similar to using the AWS CLI on your laptop. The key difference is that the CLI require setting up a user with IAM roles. Whereas cloud9 allows you work as you (the default account, no other account needed).

Cloud9 also has some other advantages over the pc CLI such as working with your codes in the cloud, sharing your workspace with others, accessing other AWS services using a GUI and lots more [advantages of cloud9]().

- Setting up your Cloud9 environment
- Working with the terminal
- Common commands

## Wrap up



References
- https://general-webapp.workshop.aws/clean-up.html
- https://aws.amazon.com/cli/
- https://docs.aws.amazon.com/cli/latest/reference/
- https://docs.aws.amazon.com/cli/latest/reference/s3api/create-bucket.html
- https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3api/index.html (for aws cli v2)




AWS cloudformation resources
- Template basis: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/gettingstarted.templatebasics.html
- AWS CLI Command Reference for CloudFormation: https://docs.aws.amazon.com/cli/latest/reference/cloudformation/index.html#cli-aws-cloudformation
- create-stack, update-stack, describe-stacks, delete-stack, 


with the create.sh bash script: ./create.sh myFirstStack network.yml network-parameters.json
