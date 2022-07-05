export default class Api
{

    static getTickets(ticket_id) {
        let tickets = readSession();

        let existing_tickets = tickets.find(ticket => ticket.id === ticket_id);

        if (!existing_tickets) {
            return [];
        }
        return existing_tickets;
    }

    static insertTicket(column_status, content) {
        let columns = readSession();
        let column = columns.find(column => column.status === column_status);

        let ticket = {
            id : Math.floor(Math.random() * 100000),
            content : content
        }

        if (!column) {
            throw new Error('Column not found');
        }

        column.tickets.push(ticket);
        saveInSession(columns);

        return ticket;
    }

    static updateTicket(ticket_id, update){
        let columns = readSession();
    }


}

function readSession()
{
    let data = localStorage.getItem('kanban_data');

    if (!data) {
        return [
            {
                id : 1,
                status : 'to_plan',
                tickets : []
            },
            {
                id : 2,
                status : 'in_progress',
                tickets : []
            },
            {
                id : 3,
                status: 'to_come',
                tickets : []
            },
            {
                id : 3,
                status: 'done',
                tickets : []
            },
        ]
    }

    return JSON.parse(data);
}

function saveInSession(data)
{
    localStorage.setItem('kanban_data', JSON.stringify(data));
}