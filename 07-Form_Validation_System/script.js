const form =
    document.getElementById("loginForm");

const email =
    document.getElementById("email");

const password =
    document.getElementById("password");

const emailError =
    document.getElementById("emailError");

const passwordError =
    document.getElementById("passwordError");

form.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        let isValid = true;

        emailError.textContent = "";
        passwordError.textContent = "";

        email.classList.remove(
            "error",
            "success"
        );

        password.classList.remove(
            "error",
            "success"
        );

        // Email Required

        if(email.value.trim() === ""){

            emailError.textContent =
                "Email is required";

            email.classList.add("error");

            isValid = false;
        }

        // Email Format

        else{

            const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(
                !emailRegex.test(
                    email.value
                )
            ){

                emailError.textContent =
                    "Invalid email format";

                email.classList.add("error");

                isValid = false;
            }
            else{
                email.classList.add(
                    "success"
                );
            }
        }

        // Password Required

        if(password.value.trim() === ""){

            passwordError.textContent =
                "Password is required";

            password.classList.add(
                "error"
            );

            isValid = false;
        }

        // Password Strength

        else{

            const passwordRegex =
            /^(?=.*[!@#$%^&*])(?=.*[A-Za-z]).{8,}$/;

            if(
                !passwordRegex.test(
                    password.value
                )
            ){

                passwordError.textContent =
                    "Min 8 chars and 1 special character required";

                password.classList.add(
                    "error"
                );

                isValid = false;
            }
            else{
                password.classList.add(
                    "success"
                );
            }
        }

        if(isValid){

            alert(
                "Login Successful"
            );

            form.reset();

            email.classList.remove(
                "success"
            );

            password.classList.remove(
                "success"
            );
        }

    }
);