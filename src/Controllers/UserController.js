class UserController {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.Submit();
    }


    Submit(){
        [...this.form.elements].forEach((Element, index)=>{
            console.log(Element, index);
        })
    }

    getValues(){

    }
}