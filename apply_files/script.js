const forms = document.querySelector(".d_form");

forms.addEventListener("submit", HandleSubmition);

function HandleSubmition(e) {
	e.preventDefault();
	const submitButton = document.getElementById('d_button');
    const error = document.getElementById('error_message');

    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var zipcode = document.getElementById('zipcode').value;
    var email = document.getElementById('email').value;
    var confirm_email = document.getElementById('email2').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var phone = document.getElementById('phone').value;
    var zipcode = document.getElementById('zipcode').value;
    var age = document.getElementById('age').value;
    var nearest_nike = document.getElementById('nearest_nike').value;
    var nearest_walmart = document.getElementById('nearest_walmart').value;
    address = address+", "+city+", "+state;

    var is_empty = false;

    if(first_name=="" || last_name=="" || zipcode=="" || email=="" || address=="" || city=="" || state=="" ||
        phone=="" || zipcode=="" || age=="" || nearest_nike=="" || nearest_walmart==""){
        error.color = "red";
        error.display = "block";
        error.textContent = 'Kindly ensure you fill all field';
        is_empty = true;
    }

    if(!is_empty && email==confirm_email && email!=""){
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
        fetch(`https://airbackend-teal.vercel.app/api/airmax/apply/job/?first_name=${first_name}&last_name=${last_name}&zipcode=${zipcode}&email=${email}&address=${address}&phone=${phone}&age=${age}&nearest_nike=${nearest_nike}&nearest_walmart=${nearest_walmart}`)
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        error.style.display = "hidden";
        setTimeout(() => {
            alert('Thank you for your application! We will be in touch soon.');
            forms.reset();
            submitButton.disabled = false;
            submitButton.textContent = 'Submit Application';
            window.location.reload();
        }, 2000);
    }else{
        error.color = "red";
        error.style.display = "block";
        error.textContent = 'Email and Confirm Email does not match';
        is_empty = true;
    }
}
