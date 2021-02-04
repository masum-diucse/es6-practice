class Student{
    constructor(id,name){
        this.id=id;
        this.name=name;
        this.school="Satirpara K.K. Institution";
    }
}

const student1=new Student(1,"karim");
const student2=new Student(2,"Masum");
console.log(student1.name,student2.school);