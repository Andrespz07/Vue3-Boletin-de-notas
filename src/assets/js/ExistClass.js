export function existClass(listClass, classes){
    return (listClass.find(element => element.Name === classes.Name)!= undefined) ? true: false;
}