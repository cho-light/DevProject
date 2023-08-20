var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'y2xKI4n8HVZ8FMf6oi7vjx6DgvRRcpEi9x%2FpdGYtsR71AvCYoUozg4Uj%2BxY3jXSRLLQm346SYraXBuNvpFjX2A%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000'); /**/
queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('XML'); /**/
queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent('20210628'); /**/
queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent('0600'); /**/
queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('55'); /**/
queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('127'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');