
document.querySelector('#btnTinhTien').onclick=
function(){
    var uberX = document.querySelector('#uberX').checked;

    var uberSUV = document.querySelector('#uberSUV').checked;

    var uberBlack = document.querySelector('#uberBlack').checked;
    
    var soKM = document.querySelector('#soKM').value;
    var thoiGian = document.querySelector('#thoiGianCho').value;

    if( uberX = true && uberSUV == false && uberBlack == false){
        var tienCho = thoiGian*2000;
        if(soKM <= 1){
            var thanhTien = 8000+tienCho;
            document.querySelector('#xuatTien').innerHTML = thanhTien;
        } else if(soKM <=20){
            var thanhTien = 8000 + (soKM-1)*12000 + tienCho;
            document.querySelector('#xuatTien').innerHTML = thanhTien;
        } else{
            var thanhTien = 8000 + (soKM-20)*12000 + (soKM-21)*10000 + tienCho;
            document.querySelector('#xuatTien').innerHTML = thanhTien;
        }
    }else if(uberX == false && uberSUV == true && uberBlack == false){
        var tienCho = thoiGian*3000;
        if(soKM <= 1){
            var thanhTien = 9000+tienCho;
            document.querySelector('#xuatTien').innerHTML = thanhTien;
        } else if(soKM <=20){
            var thanhTien = 9000 + (soKM-1)*14000 + tienCho;
            document.querySelector('#xuatTien').innerHTML = thanhTien;
        } else{
            var thanhTien = 9000 + (soKM-20)*14000 + (soKM-21)*12000 + tienCho;
            document.querySelector('#xuatTien').innerHTML = thanhTien;
        }
    }else{
        var tienCho = thoiGian*4000;
        if(soKM <= 1){
            var thanhTien = 10000+tienCho;
            document.querySelector('#xuatTien').innerHTML = thanhTien;
        } else if(soKM <=20){
            var thanhTien = 10000 + (soKM-1)*16000 + tienCho;
            document.querySelector('#xuatTien').innerHTML = thanhTien;
        } else{
            var thanhTien = 10000 + (soKM-20)*16000 + (soKM-21)*14000 + tienCho;
            document.querySelector('#xuatTien').innerHTML = thanhTien;
        }
    }
    document.querySelector('#btnHoaDon').onclick=
    function(){
      
        var tien = document.querySelector('#xuatTien').innerHTML = thanhTien;
        var mytable = document.getElementsByTagName('table')[0];

        var newRow = mytable.insertRow(0);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
    
        cell1.innerHTML = soKM +' km';
        cell2.innerHTML = thoiGian + ' phút';
        cell3.innerHTML = tien +' vnd';
        // $('#exampleModal').find('.modal-body .table tbody  tr td').append(<tr><td>km</td><td>newrow</td><td>newrow</td></tr>);
        $('#exampleModal').find('.modal-body .table tbody').append(newRow);
        // $('#exampleModal').find('.modal-body .table tbody tr ').append(   cell1.innerHTML = soKM,cell2.innerHTML = thoiGian,  cell3.innerHTML = tien);
}

}

// document.querySelector('#btnHoaDon').onclick=
// function(){
//     // var tien = document.querySelector('#xuatTien').innerHTML = thanhTien;
//     var mytable = document.getElementsByTagName('table')[0];

//     var soKM = document.querySelector('#soKM').value;
//     var thoiGian = document.querySelector('#thoiGianCho').value;

//     var newRow = mytable.insertRow(0);

//     var cell1 = newRow.insertCell(0);
//     var cell2 = newRow.insertCell(1);
//     var cell3 = newRow.insertCell(2);

//     cell1.innerHTML = soKM;
//     cell2.innerHTML = thoiGian;
//     cell3.innerHTML = '';
//     // $('#exampleModal').find('.modal-body .table tbody  tr td').append(<tr><td>km</td><td>newrow</td><td>newrow</td></tr>);
//     $('#exampleModal').find('.modal-body .table tbody').append(newRow);
//     // $('#exampleModal').find('.modal-body .table tbody tr ').append(   cell1.innerHTML = soKM,cell2.innerHTML = thoiGian,  cell3.innerHTML = tien);
// }

