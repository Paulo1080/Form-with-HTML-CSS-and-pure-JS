class UserController {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.onSubmit();
    }


    onSubmit(){
        this.form.addEventListener("submit",(e)=>{
            e.preventDefault();
            this.getValues();
        })
    }

    message(user){
        console.log(user);
    }

    getValues(){
        let user = {};
        [...this.form.elements].forEach((element, index)=>{
            if(element.name){
                user[element.name] = element.value;
            }
        })
        
        let object = new User(user.name, user.email, user.phone, user.password);

        this.message(object);
    }
}