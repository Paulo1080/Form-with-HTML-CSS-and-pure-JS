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

    validation (element) {
        if(["name", "email", "phone", "password"].indexOf(element.name) > -1 && !element.value) {
            element.classList.remove("success");
            element.classList.add("error");
            return  false;
        }else {
            element.classList.remove("error");
            element.classList.add("success");
        }
    }

    getValues(){
        let user = {};
        let isvalid = true;

        [...this.form.elements].forEach((element, index)=>{
            
           isvalid = this.validation(element);



            if(element.name){
                user[element.name] = element.value;
            }
        })
        
        if(!isvalid) {
            return false;
        }

        let object = new User(user.name, user.email, user.phone, user.password);

        this.message(object);
    }
}