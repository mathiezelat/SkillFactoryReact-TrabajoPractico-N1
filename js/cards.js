const URL_RICK_AND_MORTY = 'https://rickandmortyapi.com/api/character'

const $ = selector => document.querySelector(selector)

const $renderCards = $('#render-cards')

const showCharacters = characters => {
	body = ''

	characters.forEach(
		({ id, name, image, status, species, gender, origin }) => {
			body += `
            <div class="rounded bg-violet-50 overflow-hidden shadow shadow-violet-500/20">
                <div class="flex gap-4">
                    <div class="basis-1/2 grow relative">
                        <p class="absolute top-2 left-3 text-lg font-bold text-violet-500">
                            #${id}
                        </p>
                        <img 
                        class="object-cover w-full" 
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

const fetchRickAndMorty = async () => {
	const response = await fetch(URL_RICK_AND_MORTY)
	const characters = await response.json()
	console.log(characters.results)
	showCharacters(characters.results)
}

fetchRickAndMorty()
