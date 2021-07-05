const TableService = {
  clickYnList(resource) {
    for (let i = 0; i < resource.length; i++) {
      delete resource[i].clickYn;
    }
    return resource;
  },
  clickYn(resource){
    delete resource.clickYn
    return resource
  },
  customDelete (resource, column){
    for(let i =0; i < resource.length; i++){
        delete resource[i][column];
        return resource;
    }
  },

  getIdList(resource){
      let result = resource.map((element)=>{
        return element.id
    })
    return result
  }

};
export default TableService;
