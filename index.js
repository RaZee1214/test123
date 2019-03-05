$(function(){
    $("h1").click(function(){
        $("body").fadeOut(500)
    })
})

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