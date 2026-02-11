interface multi_face{
    multi_one : string
}

interface multi_child extends multi_face{
  multichild:string;
}

interface multi_super_child extends multi_child{
    super_child:string;
}

let mobj : multi_super_child={
    multi_one:"Multi Parent one",
    multichild:"Mutli child one",
    super_child:"Superchild"
}

console.log(mobj.multi_one, mobj.multichild, mobj.super_child)