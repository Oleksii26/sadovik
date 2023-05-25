const form = document.querySelector('.form')

form.addEventListener('submit', handleSubmit)


async function handleSubmit(e) {
    e.preventDefault();
    const { email, phone } = e.currentTarget

    if (email.value === '' || phone.value === "") {
        alert('Please, enter data')
    }

    console.log(`Email ${email.value}, phone ${phone.value}`)

   
    fetch("https://sadovik-mail.onrender.com/mail", {
        method: "POST",
        body: JSON.stringify({
            to: email.value,
            subject: phone.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => console.log(res.json()))
        .catch(error => console.log(error));

    e.currentTarget.reset()
}