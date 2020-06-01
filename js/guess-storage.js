function saveToStorage(key,val){
    var json = JSON.stringify(val)
    localStorage.setItem(key, json);
}

function loadFromStorage(key){
    var val = localStorage.getItem(key);
    return JSON.parse(val)
}