var itemid=1;
var boxsft;
var framesft;
var total=0;
function firstcall()
{
    boxsft = document.getElementById("boxcost").value;
    framesft = document.getElementById("framecost").value;
}
function newitem() {
    firstcall();
    var newitemname = document.getElementById("newitem").value;
    var newitem_boxlengthmm = document.getElementById("newitem_boxlengthmm").value;
    var newitem_boxheightmm =document.getElementById("newitem_boxheightmm").value;
    var newitem_framelengthmm =document.getElementById("newitem_framelengthmm").value;
    var newitem_frameheightmm =document.getElementById("newitem_frameheightmm").value;
    var inlineRadio1 = document.getElementById("inlineRadio1").checked;
    var boxarea;
    var framearea;
    if(inlineRadio1)
    {
        boxarea=((newitem_boxlengthmm/304.8 * newitem_boxheightmm/304.8)).toFixed(2);
        framearea = ((newitem_framelengthmm/304.8 * newitem_frameheightmm/304.8)).toFixed(2);
    }
    else
    {
        boxarea=((newitem_boxlengthmm * newitem_boxheightmm)).toFixed(2);
        framearea = ((newitem_framelengthmm * newitem_frameheightmm)).toFixed(2);
    }

    var boxcost = boxarea*boxsft;
    var framecost = framearea*framesft;  
    var totalcost = (boxcost + framecost);

    var table = document.getElementById("myTable");
    var row = table.insertRow(itemid);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = itemid;
    cell2.innerHTML = newitemname;
    cell3.innerHTML = boxarea;
    cell4.innerHTML = framearea;
    cell5.innerHTML = totalcost.toFixed(2);
    itemid++;
    total+=totalcost;
}
function done()
{
    var table = document.getElementById("myTable");
    var row = table.insertRow(itemid);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "<b>Total Cost</b>";
    cell5.innerHTML = "<b>"+total.toFixed(2);+"</b>";
}
