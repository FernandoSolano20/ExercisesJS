function answer(area){
    var listAreas = [];
    while(area > 0){
        var size  = parseInt(Math.sqrt(area));
        var smallArea = size * size;
        area = area - smallArea;
        listAreas.push(smallArea);
    }
    return listAreas;
}

console.log(answer(12));