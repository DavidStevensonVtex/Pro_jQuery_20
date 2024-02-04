let flowers = [
	["Aster", "Daffodil", "Rose"],
	["Peony", "Primula", "Snowdrop"],
	["Carnation", "Lily", "Orchid"]
];

$("<div id='row3', class='drow' />").appendTo("div.dtable");

for (let row = 0; row < flowers.length; row++) {

    let fNames = flowers[row];
    let fRow = $("< div id='#row" + (row + 1) + "' />");

    for (let i = 0; i < fNames.length; i++) {
        let img = $("<img />").attr("src", fNames[i] + ".png");
        let label = $("<label />").attr("for", fNames[i]).text(fNames[i] + ":");
        let input = $("<input />")
            .attr("name", fNames[i])
            .attr("value", 0)
            .attr("required", "required");

        let cell = $("<div class='dcell'>").append(img).append(label).append(input);
        fRow.append(cell);
    }

    dRow.appendTo("div.dtable");
}
