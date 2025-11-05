const forms = document.querySelector(".d_form");

forms.addEventListener("submit", HandleSubmition);

function HandleSubmition(e) {
	e.preventDefault();
	const submitButton = document.getElementById('d_button');
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';

    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var zipcode = document.getElementById('zipcode').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var zipcode = document.getElementById('zipcode').value;
    var age = document.getElementById('age').value;
    var nearest_nike = document.getElementById('nearest_nike').value;
    var nearest_walmart = document.getElementById('nearest_walmart').value;
    
    fetch(`https://airbackend-teal.vercel.app/api/airmax/apply/job/?first_name=${first_name}&last_name=${last_name}&zipcode=${zipcode}&email=${email}&address=${address}&phone=${phone}&age=${age}&nearest_nike=${nearest_nike}&nearest_walmart=${nearest_walmart}`)
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    setTimeout(() => {
        alert('Thank you for your application! We will be in touch soon.');
        forms.reset();
        submitButton.disabled = false;
        submitButton.textContent = 'Submit';
    }, 2000);

}
