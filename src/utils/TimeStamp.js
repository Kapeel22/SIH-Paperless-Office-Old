export default {
    getTimestamp (){
	    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep','Oct','Nov','Dec']


	    let date = new Date().getDate();
	    let month = new Date().getMonth();
	    let year = new Date().getYear() + 1900;
	    let hour = new Date().getHours()
	    let mins = new Date().getMinutes()

	    let timestamp = months[month]+" "+date+ " at "+hour+":"+mins+", " + year
	    

	return timestamp
    },	

    str2TSObj(time){
            const dict = {} 
		dict['Jan'] = 0
		dict['Feb'] =1 
		dict['Mar'] = 2
		dict['Apr'] = 3
		dict['May'] = 4
		dict['Jun'] = 5
		dict['Jul'] = 6
		dict['Aug'] = 7
		dict['Sep'] = 8
		dict['Oct'] = 9
		dict['Nov'] = 10
		dict['Dec'] = 11
	
            console.log(time)
	    let month = dict[time.split(' ')[0]]
	    let day = parseInt(time.split(' ')[1])
	    let year = parseInt(time.split(' ')[4])
	    let hour = parseInt(time.split(' ')[3].split(':')[0])
	    console.log(month,day,year,hour)

	    return new Date(year,month,day,hour).getTime()

	},
   getTSObj(){

	return new Date().getTime()
   },

    conversion(ms) { 
  
  
            // Calculating Minutes 
            var mins = (ms / (1000 * 60)).toFixed(1); 
  
            // Calculating hours  
            var hrs = (ms / (1000 * 60 * 60)).toFixed(1); 
  
            // Calculating days 
            var days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
            console.log(days,hrs) 
            if (mins < 60) { 
                return Math.floor(mins) + " Min"; 
            } else if (hrs < 24) { 
                hrs = Math.floor(mins/60);
                mins = Math.floor(mins%60)
                return hrs + " Hours, " + mins +" Mins" 
            } else { 
                days = Math.floor(hrs/24)
                hrs = Math.floor(hrs%24)
                return days + " Days, " + hrs + " Hours" 
            } 
        }
}