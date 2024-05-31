# Smart India Hackathon Project

## Set Up and Start

```
git clone https://github.com/ShauryaSood2003/SIH_Hackathon.git
```

> Create a mongoDB url :

 - For creating  Online MongoDB instance visit [MongoDB](https://www.mongodb.com/)
 
 - For running MongoDB locally use Docker 
 ```
 docker run -d -p 27017:27017 mongo
 ```
 > Make a data folder with config.js file inside server folder
 
  where inside config file add 
 ```
 export  const  MongoDB_Url= "Your MongoDb url!"
 ```

>  Start the Frontend
```
npm i
npm run start
```
> Start the Backend 
```
cd server 
npm i
npm run start
```
> Start the WebSocket
```
cd socket
npm i
npm run start
```

