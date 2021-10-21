export class employeedata {
    id : number;
    name :string;
    gender : string;
    role : string;
    skill:string;
    experience:string;
    constructor(id:any , name:any, gender:any ,role:any,skill:any,experience:any)
    {
        this.id=id;
        this.name= name;
        this.gender= gender;
        this.role =role;
        this.skill =skill;
        this.experience =experience;

    }
}