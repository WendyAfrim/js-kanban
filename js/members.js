export let members = () => {
    let self = {};

    self.init = () => {
        self.targetBtnAddMembers();
    }

    self.targetBtnAddMembers = () => {
        document.getElementById('add-member').addEventListener('click', (event) => {
            self.getInputsValues();
        })
    }

    self.getInputsValues = () => {
        let memberElements = document.getElementsByClassName('member-input');
        let memberArray = Array.from(memberElements);
        self.injectMembersToTable(memberArray);
    }
    
    self.injectMembersToTable = (memberArray) => {

        let membersTable = document.getElementById("members-table");
        let memberRowElement = membersTable.insertRow();
        for (let i = 0; i < memberArray.length; i++) {
            let cell = memberRowElement.insertCell();
            cell.innerHTML = memberArray[i].value;
        }
    }

    return self;
}