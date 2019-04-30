var list1 = [6,6,3];
var list2 = [6,3];

function answer(x,y){
    if(x.length > y.length)
        return compareList(x,y);
    else
        return compareList(y,x);
}

function compareList(bigList, smallList){
    var inList = false;
    for(var index1 = 0; index1 < bigList.length; index1++){
        for (var index2 = 0; index2 < smallList.length; index2++) {
            if(bigList[index1] == smallList[index2]){
                  inList = true;
                  delete smallList[index2];
            }
        }
        if(!inList)
            return bigList[index1];
        else
            inList = false;
    }
}
console.log(answer(list1,list2));