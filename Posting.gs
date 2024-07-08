const ss = SpreadsheetApp.getActiveSpreadsheet();
const main = ss.getSheetByName('Year 12 SDD Major Test Spreadsheet');
const sheet = ss.getSheetByName('Information');
const courseId = sheet.getRange('B2').getValue();
var birthday = [];
const birthDate = main.getRange("C2:C12").getValue();
const today = new Date();
var year = today.getFullYear(); 
var newYear = year.toString();


//Gets the spreadsheet and the specific courseID
//where the values in the rows will be stored

function postAnnouncement() {
 Logger.log(newYear)
 //creates date format
  let [d, m] = birthDate.split(/[\/]/); //Takes the date string and isolates the day and month, storing it in the array
  newDate = year + "-" + m + "-" + d + "T" + "00:00:00Z"; //Builds the newDate variable in the Zulu format

//loops through the birthday array and stores them in an array
  var data = main.getDataRange().getValues();
  data.forEach(function (row){
    var fname = row[0]; 
    var lname = row[1]; 
    var bdate = newDate;
    
    birthday.push([fname, lname, bdate]);   
    Logger.log(birthday)
     })

    
  for (var i = 1, l = birthday.length; i < l; i++){ //For each birthday line to each 
  const message = sheet.getRange('E1').getValue().toString() //Gets the desired message
  var announcement ={ //announcement object that is needed for classroom to understand what is needed to be posted
    text: message + ' ' + birthday[i][0] + ' ' + birthday[i][1] + '!', //This originally was going to be used to loop through the sheet for 
    scheduledTime: newDate,  //the right birthday, however, has been repurposed to be used for scheduling
    state: "DRAFT" 
   }; 
  Classroom.Courses.Announcements.create(announcement, courseId); //Classroom api that handles posting
  }
}
function loopThroughSheet(){
  var data = main.getDataRange().getValues();
   data.forEach(function (row) {
   Logger.log(row);
 });
}



  
//Schedules an announcement on the classroom. Put under the Saved announcements section
//and will be posted at the correct time
  



//Will be used for Sprint 2
  //for (var i = 1, l = birthday.length; i < l; i++){ //For each birthday line to each 
    //  Logger.log(birthday[i][2]);
     
    //  if (birthday[i][2] === currentTime){
       // var newTime = currentTime
      
     



     // }

 // };
 
 //var date = new Date().toISOString();
 // Logger.log(date)



  