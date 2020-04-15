$(document).ready(function() {
    $('#table').DataTable( {

        columnDefs: [ {
        orderable: false,
        className: 'select-checkbox',
        targets:   0
        } ],
        select: {
        style:    'os',
        selector: 'td:first-child'
        },
         order: [[ 1, 'asc' ]],
        "scrollY":        "200px",
        "scrollCollapse": true,
        "paging":         false,
        
    } )

    let client1 = document.getElementById("client1");
    let d1 = document.getElementById("d1");
    client1.addEventListener("click", () => {
        if(getComputedStyle(d1).display != "none"){
                d1.style.display = "none";
        } else {
                d1.style.display = "block";
        }
    })

    let client2 = document.getElementById("client2");
    let d2 = document.getElementById("d2");
    client2.addEventListener("click", () => {
        if(getComputedStyle(d2).display != "none"){
                d2.style.display = "none";
        } else {
                d2.style.display = "block";
        }
    })

    let client3 = document.getElementById("client3");
    let d3 = document.getElementById("d3");
    client3.addEventListener("click", () => {
        if(getComputedStyle(d3).display != "none"){
                d3.style.display = "none";
        } else {
                d3.style.display = "block";
        }
    })

    let client4 = document.getElementById("client4");
    let d4 = document.getElementById("d4");
    client4.addEventListener("click", () => {
        if(getComputedStyle(d4).display != "none"){
                d4.style.display = "none";
        } else {
                d4.style.display = "block";
        }
    })

    let client5 = document.getElementById("client5");
    let d5 = document.getElementById("d5");
    client5.addEventListener("click", () => {
        if(getComputedStyle(d5).display != "none"){
                d5.style.display = "none";
        } else {
                d5.style.display = "block";
        }
    })

    let client6 = document.getElementById("client6");
    let d6 = document.getElementById("d6");
    client6.addEventListener("click", () => {
        if(getComputedStyle(d6).display != "none"){
                d6.style.display = "none";
        } else {
                d6.style.display = "block";
        }
    })

} );

    