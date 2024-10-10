document.getElementById("sessionInterest").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const regSubmit = document.getElementById('sessionSubmit');
    const defaultText = regSubmit.innerText;
    regSubmit.disabled = true;
    regSubmit.innerText = 'Submitting...';
    const name = document.getElementById("name").value;
    const occupation = document.getElementById("occupation").value;
    const challenges = document.getElementById("challenges").value;
    const chat = document.getElementById("chat").value;
    const payment = document.getElementById("payment").value;
    const otherpayment = document.getElementById("otherpayment").value;
    const sharemind = document.getElementById("sharemind").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    fetch(`https://api.airtable.com/v0/${mini}/${tennis})`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${groK}`,
        }
    })
    .then(response => response.json())
    .then(data => {
        const recordData = {
            "fields": {
                "Name": name,
                "Role": occupation,
                "Challenges": challenges,
                "Interested": chat,
                "Price": payment,
                "OtherPrice": otherpayment,
                "AdditionalInfo": sharemind,
                "Email": email,
                "Phone": phone
            }
        };
        fetch(`https://api.airtable.com/v0/${mini}/${tennis}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${groK}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recordData),
        })
        .then(response => response.json())
        .then(data => {
            regSubmit.innerText = defaultText;
            regSubmit.disabled = false;
            window.alert("You have successfully submitted a response, thank you!")
        })
        .catch(error => console.error('Error:', error));
    })
    .catch(error => console.error('Error:', error));
});