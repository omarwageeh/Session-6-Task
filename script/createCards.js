function elementsFromHtml(html){
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

var cardHtml = `<div class="col-md-3">
<div class="card rounded-5 shadow p-3">
    <img class="img-fluid w-25 mb-1" src="./assets/img/Frame 1000001700.png" alt="">
    <p class="text-22px">
        No Added Cost
    </p>
    <p class="text-16">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, quas doloribus blanditiis
        vitae enim sequi quia, assumenda beatae incidunt inventore praesentium possimus tempore
        autem velit minima suscipit magnam ipsam similique!
    </p>
</div>
</div>`;

var listOfCards = [];
for(var i = 0; i < 3; i++){
    listOfCards[i] = elementsFromHtml(cardHtml);
}

var container = document.getElementsByClassName('add-here');
console.log(container)
var row = document.createElement("div");
row.className="row justify-content-center align-items-center";
for(var i = 0; i < 3; i++){
    row.appendChild(listOfCards[i]);
}
container[0].appendChild(row);
var store = document.querySelector(':root')
document.getElementsByClassName('purple-selector')[0]
        .addEventListener('click', function (event) {
            store.style.setProperty('--purple', '#0B760F')
        });