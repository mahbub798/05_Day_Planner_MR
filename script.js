
$(document).ready(function(){
    // Display current day, month and date at the top of the page
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
    var currentTime = moment().format('h A');
    console.log('Current time is: ' +currentTime);
    
    //Set time span between 9 AM - 5 PM
    $('.Hour').each(function(i){
      $(this).text(moment().hour(i + 9).format('h A'))
    });
    //Provide work day hours in an array
    var timeArr = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];

    $('.HourRow').each(function(i){
      //Get index of current hour
      var currentIndexOfGivenTimeArray = timeArr.indexOf(currentTime);
      console.log('Index of current hour from provided time Array is: ' +currentIndexOfGivenTimeArray);

      if(currentIndexOfGivenTimeArray > i){
        //past and disabled

      } else if(currentIndexOfGivenTimeArray === i){
        //present

      } else{
        //future

      }
    });
 
});
