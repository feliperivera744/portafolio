import { Hero } from "./hero";

export let heros: Hero[] = [
  {
    id: 1,
    nombre: "FC BARCELONA",
    imagen: "data:image/png;base64,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",
    descripcion: "En 1899, Joan Gamper, un hombre suizo, decidió introducir el fútbol en Barcelona mediante la creación de un equipo. El club fue fundado oficialmente el veintinueve de noviembre de 1899. Creció y cobró fuerza, ganando títulos como la Copa Macaya en 1902, la Copa de los Pirineos en 1910 - 1912.   El FC Barcelona construyó su primer estadio en 1909 con una capacidad de 6.000 personas.   Durante la década de 1920 la fama y el éxito del equipo creció. Ganaron la primera Liga del Campeonato en la temporada 1928 - 1929. Con la nueva popularidad del club fue necesario construir un nuevo estadio. En 1922 se construyó el estadio 'Les Corts', con una capacidad de 22.000 personas"
  },
];
