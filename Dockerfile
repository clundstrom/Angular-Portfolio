# This docker config enables live compilation from the compose file
# of the Angular project without need for manual configuration.
# All config needed to run a dev environment is found in this file.

FROM node:12.18.2-alpine

# Add git and SSH
RUN apk add --update \
  python3 \
  git

WORKDIR /frontend

# Install and cache dependencies
COPY package.json /frontend/package.json
RUN npm install -g @angular/cli@8.3.25
RUN npm install
