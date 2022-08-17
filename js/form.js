const $ = selector => document.querySelector(selector)

const $form = $('#form')
const $resultForm = $('#result-form')

$form.addEventListener('submit', element => {
	element.preventDefault()
	const formData = new FormData(element.target)

	const newContact = {
		name: formData.get('name'),
		email: formData.get('email'),
		coment: formData.get('coment'),
	}

	console.log('Contacto', newContact)

	showResultForm(newContact)

	$form.reset()
})

const showResultForm = ({ name, email, coment }) => {
	let body = `
		<p>
			Nombre: <span class="italic">${name}</span>
		</p>
		<p>
			Correo electrónico: <span class="italic">${email}</span>
		</p>
		<p>
			Comentario: <span class="italic">${coment}</span>
		</p>
	`

	$resultForm.innerHTML = body
}
