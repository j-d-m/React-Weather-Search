# Your Weather App

This is a Weather search single page application, using the open weather map api.
it is made with the React framework.
It enables the user to search for a city and will return the results of the local weather and temperature conditions.
The background will change from two different images depending on if the city that is searched for had a current temperature of 15 degrees celsius or colder.

## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

To fix the calling of an api for every letter used in an input, you must delay the setting of your state by using the setTimeOut() function- this is a work around for async await calling problem.

A general overview and understanding of the React framework and its syntax.

-better use of the useState hook.

-using a ternary in JSX.

-using a map fucntion inside a return

## Roadmap

- Split the application into multiple components.
- Imporove the function where the server call is being fired - App.js line 15 -- 22

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Deployment

To deploy this project run

```bash
  npm run deploy
```

## screen shots of the different backgrounds

![this is a screenshot of the main page]("./src/Screenshots/Screenshot 2021-11-25 at 20-45-46 Your Weather App-home.png")
![this is a screenshot of a city with colder weather]("./src/Screenshots/Screenshot 2021-11-25 at 20-45-46 Your Weather App-cold.png")
![this is a screenshot of a city with warmer weather]("./src/Screenshots/Screenshot 2021-11-25 at 20-45-46 Your Weather App-warm.png")
![this is a screenshot when the user enters unknown city ]("./src/Screenshots/Screenshot 2021-11-25 at 20-45-46 Your Weather App-notfound.png")
