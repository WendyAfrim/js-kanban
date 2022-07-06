// let members = () => {
//     let self = {};

//     self.init = () => {
//         self.targetBtnAddMembers();
//     }

//     self.targetBtnAddMembers = () => {

//         document.getElementById('add-member').addEventListener('click', (event) => {
//             self.getInputsValues();
//         })
//     }

//     self.getInputsValues = () => {
//         let member = document.getElementsByClassName('member-input').value;
//         console.log(member);
//         self.addMemberToSession(member);
//     }

//     self.addMemberToSession = (member) => {
//         self.injectMembersToList(member);
//     }

//     self.injectMembersToList = (member) => {

//         let membersList = document.querySelector('.members-list');

//         let memberElement = document.createElement('li');
//         memberElement.innerHTML = member;

//         membersList.appendChild(memberElement);
//     }

//     return self;
// }

const list = document.getElementById('members');

function addUser(){
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let email = document.getElementById('email').value;
    let post = document.getElementById('post').value;
    let entry = document.createElement('li');
    entry.appendChild(document.createTextNode(name + ' ' + surname + ' ' + email + ' ' + post));
    list.appendChild(entry);
    
    return false;
}