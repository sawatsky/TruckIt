function getAll(resource) {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("GET", "http://localhost:3000/" + resource + "/", true);
    xmlHttpRequest.onreadystatechange = function() {
        if (xmlHttpRequest.readyState == XMLHttpRequest.DONE && xmlHttpRequest.status == 200) {
            try {
                var data = JSON.parse(xmlHttpRequest.responseText);
                for (var i = 0; i < data.length; i++) {
                    var trHead = document.createElement("tr");
                    var tr = document.createElement("tr");
                    var entries = Object.entries(data[i]);
                    for (var j = 0; j < entries.length; j++) {
                        if (i == 0) {
                            var th = document.createElement("th");
                            th.innerHTML = entries[j][0];
                            trHead.appendChild(th);
                        }

                        var td = document.createElement("td");
                        td.innerHTML = entries[j][1];
                        tr.appendChild(td);
                    }

                    if (i == 0) {
                        document.querySelector("#data").appendChild(trHead);
                    }
                    document.querySelector("#data").appendChild(tr);
                }
            } catch (error) {
                console.error(error);
            }
        }
    };
    xmlHttpRequest.send();
}

function create(resource) {

}

function get(resource) {

}
