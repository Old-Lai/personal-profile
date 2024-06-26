FROM node:20

ENV GITHUB_REPO="https://github.com/Old-Lai/personal-profile.git"

WORKDIR /app
COPY . /app/
RUN git clone $GITHUB_REPO

WORKDIR /app/personal-profile

RUN npm install && npm run build

EXPOSE 4173

CMD ["npm", "run", "preview"]