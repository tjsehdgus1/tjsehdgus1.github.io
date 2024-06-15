const date = new Date(1718416800000);

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

const formattedDate = `${year}-${month}-${day}`;
