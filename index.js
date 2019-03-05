$(function(){
    $("h1").click(function(){
        $("body").fadeOut(500000)
    })
})

function changecolor()  {
    $(".seppi").addClass("yellow");
}

function takeover(){
    $(".b").text("hehe darkness")
}

$(document).ready(function(){
    $(".button4").mouseover(function(){
        $(this).fadeOut()    
    });    
});

$(document).ready(function(){
    $(".button4").mouseout(function(){
        $(this).fadeIn()    
    });    
});

function postPeople(){

}

function api(URL) {
	$.get(URL, function(data) {
		let items = JSON.parse(data)
		let html = ''
		for (var i = 0; i < items.length; i++) {
			html += '<div class="item"><div>' + items[i].first_name + '</div><div>' + items[i].last_name + '</div></div>'
		}
		$('#list').html(html)
	})
}