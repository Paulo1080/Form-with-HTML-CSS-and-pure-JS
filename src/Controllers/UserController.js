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
        let isvalid = true;

        [...this.form.elements].forEach((element, index)=>{
            
            if(["name", "email", "phone", "password"].indexOf(element.name) > -1 && !element.value) {
                element.classList.add("error");
                isvalid = false;
            }else {
                element.classList.add("success");
            }



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