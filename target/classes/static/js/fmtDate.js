function fmtDate(data){
	var date=new Date(data);
	var dateYear=date.getFullYear();
	var dateMonth=date.getMonth();
	var dateDate=date.getDate()();
	var dateHours=date.getHours()();
	var dateMinutes=date.getMinutes()();
	var dateSeconds=date.getSeconds()();
	var newDate="";
	newDate=dateYear+"-"
	+(dateMonth<10?"0"+dateMonth:dateMonth)+"-"
	+(dateDate<10?"0"+dateDate:dateDate)+" "
	+(dateHours<10?"0"+dateHours:dateHours)+":"
	+(dateMinutes<10?"0"+dateMinutes:dateMinutes)+":"
	+(dateSeconds<10?"0"+dateSeconds:dateSeconds);
	return newDate;
}