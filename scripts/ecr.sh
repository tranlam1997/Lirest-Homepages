#! /bin/bash
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 249521678241.dkr.ecr.us-east-1.amazonaws.com/lirest
docker tag lirest-homepages:latest 249521678241.dkr.ecr.us-east-1.amazonaws.com/lirest
docker push 249521678241.dkr.ecr.us-east-1.amazonaws.com/lirest
docker pull 249521678241.dkr.ecr.us-east-1.amazonaws.com/lirest

