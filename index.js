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
    $(".button5").mouseover(function(){
        $(this).fadeOut()    
    });    
});

$(document).ready(function(){
    $(".button5").mouseout(function(){
        $(this).fadeIn()    
    });    
});

function insertPeople() {
    $.get("/query", () => {})
}

function api(URL) {
	$.get(URL, function(data) {
		let items = JSON.parse(data)
		let html = ''
			html += '<div class="item"><div>' + 'First name:' + '</div><div>' + 'Last name:' + '</div></div>'

		for (var i = 0; i < items.length; i++) {
			html += '<div class="item"><div>' + items[i].first_name + '</div><div>' + items[i].last_name + '</div></div>'
		}
		$('#list').html(html)
	})
}