const URL_RICK_AND_MORTY = 'https://rickandmortyapi.com/api/character'

const $ = selector => document.querySelector(selector)

const $renderCards = $('#render-cards')
const $previousPage = $('#previous-page')
const $nextPage = $('#next-page')
const $currentPage = $('#current-page')

let page = 1

const showCurrentPage = page => {
	$currentPage.innerHTML = page
}

const showCharacters = characters => {
	body = ''

	characters.forEach(
		({ id, name, image, status, species, gender, origin }) => {
			body += `
            <div class="rounded bg-violet-50/50 overflow-hidden shadow shadow-violet-500/20">
                <div class="flex gap-4">
                    <div class="basis-1/2 grow relative">
                        <p class="absolute top-2 left-3 text-lg font-bold text-violet-500">
                            #${id}
                        </p>
                        <img 
                        class="object-cover w-full h-full" 
                        src="${image}" 
                        alt="${name}"
                        >
                    </div>
                    <div class="basis-1/2 shrink-0 grow-0 flex flex-col py-2">
                        <p class="text-2xl font-semibold">
                            ${name}
                        </p>
                        <p>
                            <span class="flex items-center gap-2">
                                <span class="relative flex w-3 h-3">
                                    <span class="animate-ping absolute w-full h-full ${
										status === 'Alive'
											? 'bg-green-500'
											: 'bg-red-500'
									} rounded-full inline-flex opacity-75"></span>
                                    <span class="w-3 h-3 ${
										status === 'Alive'
											? 'bg-green-500'
											: 'bg-red-500'
									} rounded-full inline-flex"></span>
                                </span>
                                ${status} - ${species}
                            </span>
                        </p>
                        <p class="text-gray-500 text-sm">
                            Gender
                        </p>
                        <p class="text-lg">
                            ${gender}
                        </p>
                        <p class="text-gray-500 text-sm">
                            Origin
                        </p>
                        <p class="text-lg">
                            ${origin.name}
                        </p>
                    </div>
                </div>
            </div>
        `
		}
	)

	$renderCards.innerHTML = body
}

const fetchRickAndMorty = async page => {
	try {
		showCurrentPage(page)
		const response = await fetch(`${URL_RICK_AND_MORTY}/?page=${page}`)
		const characters = await response.json()
		showCharacters(characters.results)
	} catch (error) {
		console.error('Ocurrio un error al traer los datos', error.message)
	}
}

fetchRickAndMorty(page)

$previousPage.addEventListener('click', () => {
	if (page > 1) {
		page--
		fetchRickAndMorty(page)
	}
})

$nextPage.addEventListener('click', () => {
	if (page < 42) {
		page++
		fetchRickAndMorty(page)
	}
})
