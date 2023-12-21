export class PokemonMovesDto {
    private constructor(
        public name: string,
        public move: Array<{[key: string]: any}>
    ) { }

    static create(data: {[key: string]: any}): PokemonMovesDto {
        const {name, moves} = data

        return new PokemonMovesDto(
            name,
            moves
        )
    }
}