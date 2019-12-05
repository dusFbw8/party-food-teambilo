var foodbring = [{ id: 1, name: "Maxim", food: "Paska" }];
//Main page
const getting = (req, res) => {
  res.render("default", { foodbringers: foodbring });
};
const posting = (req, res) => {
  var toAdd = req.body;
  toAdd["id"] = foodbring.length + 1;
  foodbring.push(toAdd);
  res.redirect("/");
};
module.exports = { getting, posting };
