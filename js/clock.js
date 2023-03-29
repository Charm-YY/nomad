const $clock = document.querySelector('#clock');

function getTimes(){
    const date = new Date(); //현재 날짜 생성
    const hours = String(date.getHours()).padStart(2, '0');
    //String : 문자열로 변경 /getHours : 현재시간 생성, padStart(minLength, minLength 보다 짧으면 앞에 넣을 문자);
    const min = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    $clock.innerText = `${hours}:${min}:${seconds}`; //시간 표시
}
getTimes(); //처음시간 표시
setInterval(getTimes, 1000); //1초마다 실행해줘
// setTimeout(함수, ms초) : 몇초 후에 실행해줘