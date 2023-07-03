export interface Pet {
    id: string;
    name: string;
    age: number;
    breed: string;
    sterilization: boolean;
    image: string;
    Vaccines:[];

}

export interface TypePet {
    id:string,
    name:string    
}


export default Pet;