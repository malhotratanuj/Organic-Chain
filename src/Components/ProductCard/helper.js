import localStorageHandler from '../../utils/localStorage';
export const addProduct = (key,details, isSet = false)=>{
    const ls= new localStorageHandler();
    let value  = JSON.parse(JSON.stringify(ls.get(key) || []));
    value.push(details);
    ls.set(key, value)
}
export const removeProduct = (key,id, isSet = false)=>{
    const ls= new localStorageHandler();
    let value  = JSON.parse(JSON.stringify(ls.get(key) || []));
    let arr = value.filter((value)=> value.id  !== id);
    ls.set(key, arr)
}
export const checkItemExist = (key, id) =>{
    const ls= new localStorageHandler();
    let value  = JSON.parse(JSON.stringify(ls.get(key) || []));
    let arr = value.filter((value)=> value.id  === id);
    if(arr.length > 0){
        return true
    }
    return false
}