$.ajax({
type : 'POST',
url : 'http://ws.audioscrobbler.com/2.0/',
data : 'method=user.getrecenttracks&' + 'limit=10&'+'user=angelseay&'+
       'api_key=56252fd7b4b648f3fcea0292a8e6d90a&' +
       'format=json',
dataType : 'jsonp',
success : function(data) {

$.each(data.recenttracks.track, function(i, item) {
  html = $.parseHTML("<a href=" +item.url+ " target=&quot_blank&quot>"+item.name +" by " + item.artist['#text']+ "</a><br>"  );
  $('#success #recent').append(html);
}
)},
error : function(code, message){
    // $('#error').html('Error Code: ' + code + ', Error Message: ' + message);
    console.write('Error Code: ' + code + ', Error Message: ' + message);
}
});
