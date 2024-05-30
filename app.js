const add = document.querySelector(".add")
const full_email1_result1 = document.querySelector(".full_email1_result1")

const full_email1_result2 = document.querySelector(".full_email1_result2")


const email_text_result = document.querySelector(".email_text_result")

const number_result = document.querySelector(".number_result")

const pass1_results = document.querySelector(".pass1_results")
const pass2_results = document.querySelector(".pass2_results")

add.addEventListener("click", () =>{
    const full_email1 = document.querySelector(".full_email1").value
    const username = document.querySelector(".username").value


    const full_email2 = document.querySelector(".full_email2").value
    const number = document.querySelector(".number").value


    const pass1 = document.querySelector(".pass1").value
    const pass2 = document.querySelector(".pass2").value

    if(full_email1 !== username){
        full_email1_result1.textContent = "Username mos kelmayapti"
        full_email1_result2.textContent = "Username mos kelmayapti"
        
    } else if (full_email1 === username){

        full_email1_result1.textContent = "True"
        full_email1_result2.textContent = "True"
        
    } if(full_email1 === "" || username === ""){
        full_email1_result1.textContent = "To'ldrish majburiy"
        full_email1_result2.textContent = "To'ldrish majburiy"
        
    } 
    if(full_email2 === "@" !== number === "918682327"){
        email_text_result.textContent = "Siz email kiritmdingiz"
        number_result.textContent = "Siz tel raqam boshqa"
    }
    else if(full_email1 === "@" || number === "918682327"){
        email_text_result.textContent = "True"
        number_result.textContent = "True"

    } if(full_email1 === "" || number === ""){
        email_text_result.textContent = "To'ldrish majburiy"
        number_result.textContent = "To'ldrish majburiy"
    }

    if(pass1 !== pass2){
        pass1_results.textContent = "Siz parolingiz bir biriga to'gri kelmayapti"
        pass2_results.textContent = "Siz parolingiz bir biriga to'gri kelmayapti"
    }
   else if(pass1 === pass2){
        pass1_results.textContent = "True"
        pass2_results.textContent = "True"
    }
    if(pass1 === "" || pass2 === ""){
        pass1_results.textContent = "To'ldrish majburiy"
        pass2_results.textContent = "To'ldrish majburiy"
    }
})

