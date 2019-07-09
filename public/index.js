let picker = new Lightpick({
    field: document.getElementById('demo-3_1'),
    secondField: document.getElementById('demo-3_2'),
    singleDate: false,
    onSelect: function(start, end){
        let str = '';
        str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
        str += end ? end.format('Do MMMM YYYY') : '...';
        document.getElementById('result-3').innerHTML = str;
    }
});