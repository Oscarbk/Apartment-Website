var formsGenerated = 0;
function generateForms(roommates) {
    document.getElementById("roommates").innerHTML = "";
    for (let i = 0; i < roommates; i++) {
        document.getElementById("roommates").innerHTML +=
            "<div class=\"form-group row\">" +
                "<label for=\"roommate" + i + "\" class=\"col-sm-2 col-form-label\">Roommate " + (i+1) + "</label>\n" +
                "<div class=\"col-sm-10\">" +
                    "<input type=\"text\" class=\"form-control formBox\" id=\"roommate" + i + "\" placeholder=\"Input Salary\">\n" +
                "</div>" +
            "</div>"
    }
    formsGenerated = roommates;
}
function calculateRent() {
    var budget = 0;
    for (let i = 0; i < formsGenerated; i++)
    {
        budget += document.getElementById("roommate"+i).value * 0.3;
    }
    document.getElementById("budget").value = budget;
}
