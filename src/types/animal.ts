export type Sexo = 'Hembra' | 'Macho';
export type TipoAnimal = 'Perro' | 'Gato';

export interface Animal {
  identificador: number;
  nombre: string;
  raza: string;
  fechaIngreso: string;
  edad: number;
  sexo: Sexo;
  tipoAnimal: TipoAnimal;
}

export interface AnimalInput {
  nombre: string;
  raza: string;
  edad: number;
  sexo: Sexo;
  tipoAnimal: TipoAnimal;
}
