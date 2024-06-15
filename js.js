$(document).ready(function(){
	$.getJSON("data.json",function(data){
		//할 일 처리
		let member_data="";
        console.log(data.data);
        // console.log(Object.keys(data.data).length);
        for(var i = 0; i<Object.keys(data.data).length; i++){
            console.log(data.data[i]);

			member_data+="<tr>";
			member_data+="<td >"+dateFormat(data.data[i].timeOnSale)+"</td>"
			member_data+="<td >"+dateFormat(data.data[i].timeOffRefund)+"</td>"
			member_data+="<td>"+data.data[i].awayTeamName+"</td>"
			member_data+="<td>"+data.data[i].scheduleId+"</td>"
			member_data+="<td> https://facility.ticketlink.co.kr/reserve/product/49034?scheduleId="+data.data[i].scheduleId+"</td>"
			member_data+="<td>https://facility.ticketlink.co.kr/reserve/plan/schedule/"+data.data[i].scheduleId+"?menuIndex=reserve</td>"

			member_data+="</tr>";
        }
		$("#member_table").append(member_data);
	});
});
 
function dateFormat(timeOnSale){
    const date = new Date(timeOnSale);

    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    // 월과 일이 한 자리 숫자일 경우 앞에 0을 붙여 두 자리로 만듭니다.
    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }

   return `${year}-${month}-${day}`;
}