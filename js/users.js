const URL_USERS = 'https://jsonplaceholder.typicode.com/users'

const $ = selector => document.querySelector(selector)

const $renderUsers = $('#render-users')

const showUsers = users => {
	let body = `
    <table class="table-fixed rounded overflow-hidden">
        <thead class="bg-violet-50">
            <tr>
                <th class="border-b border-slate-300 text-center p-2 font-semibold">Id</th>
                <th class="border-b border-slate-300 text-left p-2 font-semibold">Name</th>
                <th class="border-b border-slate-300 text-left p-2 font-semibold">Email</th>
                <th class="border-b border-slate-300 text-left p-2 font-semibold">Phone</th>
                <th class="border-b border-slate-300 text-left p-2 font-semibold">City</th>
                <th class="border-b border-slate-300 text-left p-2 font-semibold">Company</th>
            </tr>
        </thead>
        <tbody>
        `

	users.forEach(({ id, name, email, phone, address, company }) => {
		body += `<tr class="odd:bg-white even:bg-slate-50/50">
            <td class="border-b border-slate-200 font-semibold p-2 text-center">${id}</td>
            <td class="border-b border-slate-200 p-2">${name}</td>
            <td class="border-b border-slate-200 p-2">${email}</td>
            <td class="border-b border-slate-200 p-2 text-xs font-semibold">${phone}</td>
            <td class="border-b border-slate-200 p-2">${address.city}</td>
            <td class="border-b border-slate-200 p-2">${company.name}</td>
        </tr>`
	})

	body += `
        </tbody>
    </table>
    `

	$renderUsers.innerHTML = body
}

const fetchUsers = async () => {
	const response = await fetch(URL_USERS)
	const users = await response.json()
	showUsers(users)
}

fetchUsers()
