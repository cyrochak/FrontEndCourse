import express  from "express";

const port = 3000;
const app = express();

app.get("/", (req, res) =>{
    const today = new Date();
    let day = "a weekday";
    let word = "work hard"

    if(today.getDay() === 0 || getDay() === 6){
        day = "a weekend";
        word = "have fun"
    }
    res.render("index.ejs",
    { dayType: day,
      wordType: word
    }
    );
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  });
