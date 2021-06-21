# Hubspot GUI
If you are a developer working with third party services you often end up not having access to the service. The only thing you get is an API key to interact with the system and that's it. 
Hubspot is such a service, for managing contact forms, while I was working on it I could only access the data with an API key. So I build a small GUI for it with Bootstrap, React and Flask(Python). 

From the GUI you can quickly get an overview of forms, submissions and files uploaded to the Hubspot CDN. 

For more information about the API see the [Hubspot docs](https://developers.hubspot.com/docs/api/overview).

As development continues more functionality might be added in the future.

## Dependencies 
- React
- Webpack
- Typescript
- Python(Flask)
- Visual Studio Code (recommended)

## Setup stepps 
1. Clone the repository 
2. Place your hubspot API key in app.py. (Don't commit this file)
2. Run `npm install`
3. Run `npm run start` to see if everything is setup correctly
4. Set the Flask app environment variable `set FLASK_APP=app.py` (Windows)
5. Run the server `flask run` or `yarn serve`

## Commands 

`npm run watch` Compile files in watch mode, development build. 

`npm run serve` Serve files with from Flask. 

`npm run build` Build production Javascript bundles, output to the dist folder. 


