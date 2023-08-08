let Revision = JSON.parse(localStorage.getItem('Revision')) || [];

isEdit = -1;

const rendertable = () => {
    document.getElementById('t1').innerHTML =
        Revision.map((item, index) =>
            `<tr>
    <td>${item.userid}</td>
    <td>${item.username}</td>
    <td>${item.gender}</td>
    <td>${item.useremail}</td>
    <td>${item.password}</td>
    <td>${item.phone}</td>
    <td>${item.date}</td>
    <td>${item.studentBox}</td>
    <td><button type="button" onclick="deletedata(${index})">Remove</button></td>
    <td><button type="button" onclick="editrecord(${index})">Edit </button></td>
    </tr>`
        ).join("");
}
rendertable();

//edit record code

const editrecord = (index) => {
    isEdit = index;
    let editdata = Revision.find((item, index1) => { return index1 === index });
    console.log("editdata", editdata.password);
    document.getElementById('id').value = editdata.userid
    document.getElementById('name').value = editdata.username
    document.getElementById('email').value = editdata.useremail
    document.getElementById('psw').value = editdata.password
    document.getElementById('phone').value = editdata.phone
    document.getElementById('date').value = editdata.date
    rendertable();
}

//delete record code

let deletedata = (index) => {
    let studentdata = Revision.filter((value, ind) => ind !== index);
    Revision = studentdata;
    localStorage.setItem("Revision", JSON.stringify(studentdata));
    rendertable();
}

//data sorting code

const sortdata = () => {
    const dataa = Revision.sort((a, b) => a.username.localeCompare(b.username));
    Revision = dataa;
    console.log("dataa", dataa);
    rendertable();
}
const sortdata1 = () => {
    const dataa = Revision.sort((a, b) => a.gender.localeCompare(b.gender));
    Revision = dataa;
    console.log("dataa", dataa);
    rendertable();
}
const sortdata2 = () => {
    const dataa = Revision.sort((a, b) => a.useremail.localeCompare(b.useremail));
    Revision = dataa;
    console.log("dataa", dataa);
    rendertable();
}
const sortdata3 = () => {
    const dataa = Revision.sort((a, b) => a.date.localeCompare(b.date));
    Revision = dataa;
    console.log("dataa", dataa);
    rendertable();
}
function test() {
    let id = document.getElementById('id').value
    let name = document.getElementById('name').value
    let gender = '';
    if (document.getElementById('female').checked) {
        gender += document.getElementById("female").value
    }
    if (document.getElementById('male').checked) {
        gender += document.getElementById("male").value
    }
    console.log("gender", gender);
    let email = document.getElementById('email').value
    let psw = document.getElementById('psw').value
    let phone = document.getElementById('phone').value
    let date = document.getElementById('date').value
    let box = " "
    if (document.getElementById('true').checked) {
        box += document.getElementById('true').value
    }
    if (document.getElementById('false').checked) {
        box += document.getElementById('false').value
    }
    let rev = { userid: id, username: name, gender: gender, useremail: email, password: psw, phone: phone, date: date, studentBox: box };
    console.log("rev", rev);
    console.log("Revision", Revision);

    //duplicate record code

    if (isEdit === -1) {
        let client = Revision.some((item) => item.name === name);
        console.log("client", client);
        if (client) {
            window.alert("@username incorrect...!!!");
        }
        else {
            Revision.push(rev);
        }
        localStorage.setItem("Revision", JSON.stringify(Revision))
        rendertable();
    }
    else {
        const updatedData = Revision.map((item, index) => {
            if (isEdit === index) { return rev }
            return item
        })
        Revision = updatedData;
        localStorage.setItem("Revision", JSON.stringify(updatedData))
        rendertable();

        console.log("updatedData", updatedData)
    }
}

//search data code

function searchdata() {
    let employee = document.getElementById("search").value;
    let stud = Revision.filter((item) => item.username === employee || item.useremail === employee || item.password === employee || item.phone === employee || item.date === employee);
    Revision = stud;
    console.log("stud", stud);
    rendertable();
}