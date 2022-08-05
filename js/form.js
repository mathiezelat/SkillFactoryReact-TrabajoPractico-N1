const $ = selector => document.querySelector(selector)

const $form = $('#form')

$form.addEventListener('submit', element => {
	element.preventDefault()
	const formData = new FormData(element.target)

	const newContact = {
		name: formData.get('name'),
		email: formData.get('email'),
		coment: formData.get('coment'),
	}

	console.log('Contacto', newContact)

	$form.reset()
})
