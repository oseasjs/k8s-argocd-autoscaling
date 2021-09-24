printf '\n### Docker build of simple-api-app started...\n'
cd ../
docker build . -t simple-api-app
printf '\n### Docker build of simple-api-app ended...\n'

printf '\n### Tagging docker image ...\n'
docker tag simple-api-app oseasjs/simple-api-app:1.2

printf '\n### Pushing image to remote docker repository...\n'
docker push oseasjs/simple-api-app:1.2

# printf '\n### Starting docker-compose to install services...\n'
# pwd
# cd ./infra
# docker-compose up

# Command to run docker-compose with 3 POC instances
# docker-compose up --scale app-instance=3

printf '\n### All services were successfully started!'