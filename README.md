
# Roll Call

A simple javascript program that helps online FullStack TA's take attendance over zoom. Enter a list of students in your class and then import a CSV from zoom "Reports" to recive a Roll Call. 

##  Getting Started



To start add a list of all of the students in your cohort into the CLASSMASTER array. 
<br>
Make sure that the namse are entered as "Lastname Firtname",

![classMasterList](https://user-images.githubusercontent.com/90637390/203416639-9dfa88ba-13d6-411d-8fe3-fde46a3803ec.png)

once this is saved this should not need to be edited for the rest of the current cohort. 


Next, navigate to the Zoom tab on Canvas BCS, click on the “Previous Meetings” tab at the top of your screen and locate the “Report” button for the day of class for which you wish to take attendance. 


![zoomReports1](https://user-images.githubusercontent.com/90637390/203417726-d6c25dda-9628-417c-9cd7-d04dec3f0c21.png)


Now on the Reports page, locate the “export as CSV” button and export the report. 

![zoomReports2](https://user-images.githubusercontent.com/90637390/203417898-e406528b-5c2c-49e9-b9b5-33c844f6a300.png)

### IMPORTANT you must rename and move the CSV file into your working directory 
the CSV parser looks for a file called "zoomus_meeting_report.csv".
<br>
And, it expects it to be in the root directory of this project 

## Taking Roll

With a populated CLASSMASTER and zoomus_meeting_report.csv run "node index.js" to receive an attendance list 

![studentList](https://user-images.githubusercontent.com/90637390/203419308-003b393a-2a55-4a3b-9948-038edb45aa1f.png)


