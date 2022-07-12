function testJS(e) {
    e.preventDefault();
    var b = document.getElementById('name').value,
        url = 'http://path_to_next_location/next.html?name=' + encodeURIComponent(b);

    document.location.href = url;
}

function onLoad() {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {},
        tmp;
    for (var i = 0, l = params.length; i < l; i++) {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    document.getElementById('here').innerHTML = data.name;
}

window.onload = onLoad;