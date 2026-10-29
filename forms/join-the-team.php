<style>

.btn_jointheteam{cursor:pointer}

.fixForm{display:none;-webkit-backdrop-filter:blur(.3rem);backdrop-filter:blur(.3rem);background:hsla(0,0%,100%,.365);height:100%;inset:0;margin:auto;position:fixed;width:100%;z-index:9999999}

.active_jointheteam .fixForm{display:block}

.fixForm .modalContainer{background:#000;border-radius:30px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;inset:0;margin:auto;padding:40px;position:absolute;width:800px}

.fixForm .modalContainer .modalClose{background:0 0;border:0;color:#fff;cursor:pointer;font-size:30px;outline:0;position:absolute;right:8px;top:8px;cursor:pointer}

.fixForm .modalContainer .modalClose{color:#fff;cursor:pointer;font-size:30px}

.center{text-align:center!important}

.sizeH1,.sizeH2{font-size:45px}

.yellow{color:#fff118}

.fixForm .modalContainer .FormGridS1{margin:15px auto}

.FormGridS1{display:flex;gap:30px;margin:20px auto 40px}

.form-group{position:relative;width:100%}

.fixForm .modalContainer .form-group .form-control::placeholder{color:#fff!important;opacity:1}

.fixForm .modalContainer .form-group .form-control{color:#fff}

.form-group .form-control{background-color:#0000;border:none;border-bottom:1px solid #f2f2ec;display:block;font-family:regular;font-size:14px;height:52px;padding:5px 15px;width:100%}

.pt-40{padding-top:40px}

.form-group .errorText{bottom:-20px;color:red;font-size:12px;left:10px;position:absolute}

.errorText{color:red}

.FormGridS .ripple-button{font-size:16px;padding:9px 25px}

.ripple-button.btnYellow{background-color:#fff118;border-color:#fff118;color:#000}

.ripple-button{background:#0000;border:1px solid;border-radius:50px;cursor:pointer;display:inline-block;font-size:19px;overflow:hidden;padding:15px 40px 12px;position:relative;text-transform:uppercase;transition:all .9s;cursor:pointer}

.ripple-button span{position:relative;z-index:2}

.form_response{color:#fff;font-size:14px;margin-top:15px}

.form_response .error{all:unset;display:block;font-size:21px;padding:0 0 20px;text-align:center}



.errorText {

    display: block;

    color: #ff4d4d;

    font-size: 12px;

    margin-top: 5px;

}



.form-control.input-error {

    border-bottom-color: #ff4d4d !important;

}



.form-control.input-success {

    border-bottom-color: #28a745 !important;

}

</style>

<div class="modalBackground fixForm">

    <div class="modalContainer"><button class="modalClose"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">

                <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 1 1-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 0 1-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0 1 22.62-22.62L256 233.37l52.69-52.68a16 16 0 0 1 22.62 22.62L278.63 256z"></path>

            </svg></button>

        <div class="center">

            <h4 class="yellow sizeH1">Apply Now</h4>

        </div>

        <form id="applyForm" action="javascript:void(0);" method="post" novalidate>

            <div class="FormGridS1">

                <div class="form-group"><input class="form-control" placeholder="Name*" type="text" id="name" name="name" value=""></div>

                <div class="form-group"><input class="form-control" placeholder="Mobile*" type="text" id="mobile" name="mobile" value=""></div>

            </div>

            <div class="FormGridS1">

                <div class="form-group"><input class="form-control" placeholder="Email Id*" type="email" id="email" name="email" value=""></div>

                <div class="form-group"><select class="form-control apply-field" id="forExperience" name="experience">

                        <option value="" disabled selected>Experience In Years*</option>

                        <option value="1">1</option>

                        <option value="2">2</option>

                        <option value="3">3</option>

                        <option value="4">4</option>

                        <option value="5">5</option>

                        <option value="6">6</option>

                        <option value="7">7</option>

                        <option value="8">8</option>

                        <option value="9">9</option>

                        <option value="10+">10+</option>

                    </select></div>

            </div>

            <div class="FormGridS1">

                <div class="form-group"><select class="form-control apply-field" id="forQualification" name="qualification">

                        <option value="" disabled selected>Qualification*</option>

                        <option value="Any Postgraduate">Any Postgraduate</option>

                        <option value="Any Graduate">Any Graduate</option>

                        <option value="MBA/PGDM">MBA/PGDM</option>

                        <option value="M.Tech">M.Tech</option>

                        <option value="MCA">MCA</option>

                        <option value="BCA">BCA</option>

                        <option value="B.Tech/B.E.">B.Tech/B.E.</option>

                        <option value="CA">CA</option>

                        <option value="M.A">M.A</option>

                        <option value="BFA or MFA">BFA or MFA</option>

                        <option value="Specialisation in audio visuals">Specialisation in audio visuals</option>

                        <option value="B.A">B.A</option>

                        <option value="PG Diploma">PG Diploma</option>

                        <option value="Diploma">Diploma</option>

                        <option value="M.Com">M.Com</option>

                        <option value="B.B.A/ B.M.S">B.B.A/ B.M.S</option>

                        <option value="B COM">B COM</option>

                        <option value="other">Other</option>

                    </select></div>

                <div class="form-group"><select class="form-control apply-field" id="forDepartment" name="department">

                        <option value="" disabled selected>Department*</option>

                        <option value="Business Developement">Business Developement</option>

                        <option value="Ops">Ops</option>

                        <option value="Strategy">Strategy</option>

                        <option value="Content">Content</option>

                        <option value="Graphic Designer">Graphic Designer</option>

                        <option value="Production">Production</option>

                        <option value="Digital PR">Digital PR</option>

                        <option value="Media Planning &amp; Buying">Media Planning &amp; Buying</option>

                        <option value="SEO">SEO</option>

                        <option value="ORM">ORM</option>

                        <option value="Tech Development &amp; Programming">Tech Development &amp; Programming</option>

                        <option value="Mobile Development &amp; Programming">Mobile Development &amp; Programming</option>

                        <option value="Human Resource">Human Resource</option>

                        <option value="Finance &amp; Accounting">Finance &amp; Accounting</option>

                        <option value="IT Support">IT Support</option>

                        <option value="Administration">Administration</option>

                        <option value="other">Other</option>

                    </select></div>

            </div>

            <div class="FormGridS1">

                <div class="form-group"><select class="form-control apply-field" id="forIndustry" name="industry">

                        <option value="" disabled selected>Industry*</option>

                        <option value="Digital Marketing">Digital Marketing</option>

                        <option value="Advertising &amp; Media">Advertising &amp; Media</option>

                        <option value="Printing &amp; packaging">Printing &amp; packaging</option>

                        <option value="Internet/ Ecommerce">Internet/ Ecommerce</option>

                        <option value="IT Software">IT Software</option>

                        <option value="Human Resources">Human Resources</option>

                        <option value="Accounting/ Finance">Accounting/ Finance</option>

                        <option value="Education/ Teaching/ Training">Education/ Teaching/ Training</option>

                        <option value="other">Other</option>

                    </select></div>

                <div class="form-group"><input type="text" placeholder="Current Location*" name="current_location" class="form-control apply-field" id="forLocation" value=""></div>

            </div>

            <div class="FormGridS1">

                <div class="form-group"><input type="text" placeholder="Annual Current CTC*" name="current_ctc" class="form-control apply-field" id="forCTC" value=""></div>

                <div class="form-group"><input class="form-control" placeholder="Resume*" type="file" id="resume" name="resume" accept=".pdf,.doc,.docx"></div>

            </div>

            <div class="FormGridS">

                <div class="form-group"><textarea name="app_message" rows="3" class="apply-field form-control c-message" placeholder="Message"></textarea></div>

            </div>

            <div class="FormGridS">

                <div class="center pt-40"><button type="button" id="applyButton" class="btnYellow fontS ripple-button"><span>Apply Now</span></button></div>

            </div>

        </form>

        <div class="form_response"></div>

    </div>

</div>

<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

<script src="https://www.google.com/recaptcha/api.js?render=6LelbAYqAAAAAGvo7ZJ_k3t_R1z4rJKA7Aeu7ojF"></script>

<script>

document.addEventListener("DOMContentLoaded", function () {



    const form = document.getElementById("applyForm");

    const button = document.getElementById("applyButton");

    const responseBox = document.querySelector(".form_response");



    // --------------------------------

    // Configuration

    // --------------------------------



    const RECAPTCHA_SITE_KEY = "6LelbAYqAAAAAGvo7ZJ_k3t_R1z4rJKA7Aeu7ojF";



    const API_URL =

        "https://www.agency09.in/test_api/applyApi.php";





    // --------------------------------

    // Safety check

    // --------------------------------



    if (!form || !button) {

        console.error("Application form or button not found.");

        return;

    }





    // --------------------------------

    // Validation function

    // --------------------------------



    function validateForm() {



        let isValid = true;



        // Remove previous errors

        form.querySelectorAll(".errorText").forEach(function (error) {

            error.remove();

        });



        // Clear response

        if (responseBox) {

            responseBox.innerHTML = "";

        }





        // --------------------------------

        // Error function

        // --------------------------------



        function showError(id, message) {



            const element = document.getElementById(id);



            if (!element) {

                return;

            }



            const group = element.closest(".form-group");



            if (!group) {

                return;

            }



            // Don't add duplicate error

            if (group.querySelector(".errorText")) {

                return;

            }



            const error = document.createElement("span");



            error.className = "errorText";

            error.innerText = message;



            group.appendChild(error);



            element.classList.add("input-error");



            isValid = false;

        }





        // --------------------------------

        // Name

        // --------------------------------



        const name =

            document.getElementById("name").value.trim();



        if (name === "") {



            showError(

                "name",

                "Please enter your name."

            );



        } else if (!/^[a-zA-Z\s]+$/.test(name)) {



            showError(

                "name",

                "Please enter a valid name."

            );

        }





        // --------------------------------

        // Mobile

        // --------------------------------



        const mobile =

            document.getElementById("mobile").value.trim();



        if (mobile === "") {



            showError(

                "mobile",

                "Please enter your mobile number."

            );



        } else if (!/^[6-9][0-9]{9}$/.test(mobile)) {



            showError(

                "mobile",

                "Please enter a valid 10-digit mobile number."

            );

        }





        // --------------------------------

        // Email

        // --------------------------------



        const email =

            document.getElementById("email").value.trim();



        if (email === "") {



            showError(

                "email",

                "Please enter your email address."

            );



        } else if (

            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

        ) {



            showError(

                "email",

                "Please enter a valid email address."

            );

        }





        // --------------------------------

        // Experience

        // --------------------------------



        const experience =

            document.getElementById("forExperience").value;



        if (!experience) {



            showError(

                "forExperience",

                "Please select experience."

            );

        }





        // --------------------------------

        // Qualification

        // --------------------------------



        const qualification =

            document.getElementById("forQualification").value;



        if (!qualification) {



            showError(

                "forQualification",

                "Please select qualification."

            );

        }





        // --------------------------------

        // Department

        // --------------------------------



        const department =

            document.getElementById("forDepartment").value;



        if (!department) {



            showError(

                "forDepartment",

                "Please select department."

            );

        }





        // --------------------------------

        // Industry

        // --------------------------------



        const industry =

            document.getElementById("forIndustry").value;



        if (!industry) {



            showError(

                "forIndustry",

                "Please select industry."

            );

        }





        // --------------------------------

        // Current Location

        // --------------------------------



        const location =

            document.getElementById("forLocation").value.trim();



        if (location === "") {



            showError(

                "forLocation",

                "Please enter your current location."

            );

        }





        // --------------------------------

        // Current CTC

        // --------------------------------



        const ctc =

            document.getElementById("forCTC").value.trim();



        if (ctc === "") {



            showError(

                "forCTC",

                "Please enter your current CTC."

            );

        }





        // --------------------------------

        // Resume

        // --------------------------------



        const resumeInput =

            document.getElementById("resume");



        const resume =

            resumeInput.files[0];





        if (!resume) {



            showError(

                "resume",

                "Please upload your resume."

            );



        } else {



            // File extension

            const extension =

                resume.name

                    .split(".")

                    .pop()

                    .toLowerCase();





            // Allowed extensions

            const allowedExtensions = [

                "pdf",

                "doc",

                "docx"

            ];





            if (!allowedExtensions.includes(extension)) {



                showError(

                    "resume",

                    "Only PDF, DOC and DOCX files are allowed."

                );

            }





            // Maximum 5 MB

            const maxSize =

                5 * 1024 * 1024;





            if (resume.size > maxSize) {



                showError(

                    "resume",

                    "Resume size should not exceed 5 MB."

                );

            }

        }





        return isValid;

    }





    // --------------------------------

    // Remove error when user edits

    // --------------------------------



    form.addEventListener("input", function (e) {



        if (

            e.target.matches(

                "input, select, textarea"

            )

        ) {



            e.target.classList.remove("input-error");



            const group =

                e.target.closest(".form-group");



            if (group) {



                const error =

                    group.querySelector(".errorText");



                if (error) {

                    error.remove();

                }

            }

        }



    });





    // --------------------------------

    // Apply button

    // --------------------------------



    button.addEventListener("click", function (e) {



        e.preventDefault();



        console.log("Apply button clicked");





        // --------------------------------

        // Validate form

        // --------------------------------



        if (!validateForm()) {



            console.log("Validation failed");



            return;

        }





        console.log("Validation successful");





        // --------------------------------

        // Disable button

        // --------------------------------



        button.disabled = true;



        button.querySelector("span").innerText =

            "Verifying...";





        // --------------------------------

        // Check reCAPTCHA

        // --------------------------------



        if (

            typeof grecaptcha === "undefined"

        ) {



            console.error(

                "Google reCAPTCHA is not loaded."

            );



            if (responseBox) {



                responseBox.innerHTML =

                    '<div class="error">' +

                    'reCAPTCHA could not be loaded. Please refresh the page and try again.' +

                    '</div>';

            }



            button.disabled = false;



            button.querySelector("span").innerText =

                "Apply Now";



            return;

        }





        // --------------------------------

        // Execute reCAPTCHA v3

        // --------------------------------



        grecaptcha.ready(function () {



            grecaptcha.execute(

                RECAPTCHA_SITE_KEY,

                {

                    action: "apply"

                }

            )

            .then(function (token) {



                console.log(

                    "reCAPTCHA token generated"

                );





                // --------------------------------

                // Create FormData

                // --------------------------------



                const formData =

                    new FormData(form);





                // --------------------------------

                // Add reCAPTCHA token

                // --------------------------------



                formData.append(

                    "recaptcha_token",

                    token

                );



                formData.append(

                    "recaptcha_action",

                    "apply"

                );





                // --------------------------------

                // Submit button

                // --------------------------------



                button.querySelector("span").innerText =

                    "Submitting...";





                // --------------------------------

                // AJAX

                // --------------------------------



                $.ajax({



                    url: API_URL,



                    type: "POST",



                    data: formData,



                    processData: false,



                    contentType: false,





                    // --------------------------------

                    // Before request

                    // --------------------------------



                    beforeSend: function () {



                        console.log(

                            "Submitting application..."

                        );

                    },





                    // --------------------------------

                    // Success

                    // --------------------------------



                    success: function (response) {



                        console.log(

                            "API Response:",

                            response

                        );





                        let result =

                            response;





                        // Parse JSON response

                        if (

                            typeof response ===

                            "string"

                        ) {



                            try {



                                result =

                                    JSON.parse(

                                        response

                                    );



                            } catch (error) {



                                console.error(

                                    "Invalid JSON response:",

                                    response

                                );

                            }

                        }





                        // --------------------------------

                        // API success

                        // --------------------------------



                        if (

                            result &&

                            (

                                result.status == 1 ||

                                result.success === true

                            )

                        ) {



                            if (responseBox) {



                                responseBox.innerHTML =

                                    '<div class="success">' +

                                    (

                                        result.message ||

                                        "Application submitted successfully."

                                    ) +

                                    '</div>';

                            }





                            // Reset form

                            form.reset();





                            // Remove validation classes

                            form.querySelectorAll(

                                ".input-error"

                            ).forEach(function (element) {



                                element.classList.remove(

                                    "input-error"

                                );



                            });





                        } else {



                            // --------------------------------

                            // API returned error

                            // --------------------------------



                            if (responseBox) {



                                responseBox.innerHTML =

                                    '<div class="error">' +

                                    (

                                        result &&

                                        result.message

                                            ? result.message

                                            : "Something went wrong. Please try again."

                                    ) +

                                    '</div>';

                            }

                        }

                    },





                    // --------------------------------

                    // AJAX error

                    // --------------------------------



                    error: function (

                        xhr,

                        status,

                        error

                    ) {



                        console.error(

                            "AJAX Error:",

                            error

                        );



                        console.error(

                            "HTTP Status:",

                            xhr.status

                        );



                        console.error(

                            "Response:",

                            xhr.responseText

                        );





                        if (responseBox) {



                            responseBox.innerHTML =

                                '<div class="error">' +

                                'Unable to submit application. Please try again.' +

                                '</div>';

                        }

                    },





                    // --------------------------------

                    // Complete

                    // --------------------------------



                    complete: function () {



                        button.disabled = false;



                        button.querySelector("span").innerText =

                            "Apply Now";

                    }



                });



            })



            .catch(function (error) {



                console.error(

                    "reCAPTCHA Error:",

                    error

                );





                if (responseBox) {



                    responseBox.innerHTML =

                        '<div class="error">' +

                        'reCAPTCHA verification failed. Please try again.' +

                        '</div>';

                }





                button.disabled = false;



                button.querySelector("span").innerText =

                    "Apply Now";

            });



        });



    });



});

</script>

