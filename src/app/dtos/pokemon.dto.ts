export class PokemonDto {

    private constructor(
        public name: string,
        public sprites: {[key: string]: any},
        public abilities: Array<Object>,
        public moves: Array<Object>
    ) { }

    static create(data: {[key: string]: any}): PokemonDto {
        const {name, sprites, abilities, moves} = data

        return new PokemonDto(
            name,
            sprites,
            abilities,
            moves
        )
    }
}