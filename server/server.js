var franc = require("franc-min");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const port = 8080;

app.post("/api", (req, res) => {
  // try{
  let text = req.body.text;
  let lang = franc(text);
  res.json(lang);
  // }catch(err){
  // res.json({"message" : err})

  // }
});
const x = franc("سلام دوستان و همراهان عزیزم"); // => 'afr'
franc("এটি একটি ভাষা একক IBM স্ক্রিপ্ট"); // => 'ben'
franc("Alle menneske er fødde til fridom"); // => 'nno'

franc(""); // => 'und' (language code that stands for undetermined)

// You can change what’s too short (default: 10):
franc("the"); // => 'und'
franc("the", { minLength: 3 }); // => 'sco'

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
