const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["focus on your goal","keep consistency","get a result"];
let WorkItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true})); 

app.use(express.static("public"));

app.get("/",function(req, res){

    let today = new Date();
   // var currentday = today.getDay();
    //var day = "";

   
    //if(currentday === 6 || currentday === 0){
      //day="weekday";
  //res.render("list",{kindOFDay: day});
  //}
  
  //else{
    //  day="weekend";
      //res.render("list",{kindOFDay: day});
  //}


//switch(currentday){
  //  case 0:
    //    day = "sunday";
//      //  break;
  //  case 1:
    //     day = "monday";
      //  break;
 //   case 2:
 //       day = "tuesday";
 //       break;
 //   case 3:
 //       day = "wednesday";
  //      break;
   // case 4:
     //   day = "thursday";
       // break;
    //case 5:
      //  day = "friday";
       // break;
    //case 6:
      //  day = "saturday";
        //break;
        //default:
          //  console.log("error, current day is equal to " + currentday);
//}

let options = {
  weekday  : "long",
  day : "numeric",
  month : "long"
};

let day = today.toLocaleDateString("en-US",options);


res.render("list",{listTitle: day,newListItems: items});
});

app.post("/",function(req, res){
  let item =req.body.newitems;

if(req.body.list === "Work"){
  WorkItems.push(item);
  res.redirect("/work");
}
else{
items.push(item);
res.redirect("/");
}
});


app.get("/work",function(req, res){
  res.render("list", {listTitle: "WorkList", newListItems: WorkItems});
});

app.get("/about",function(req, res){
  res.render("about");
});

app.post("/work",function(req, res){
  let item = req.body.newitems;
  WorkItems.push(item);
  res.redirect("/work");
});




app.listen(4000,function(){
console.log(" server started on port number: 4000 ");
 }); 