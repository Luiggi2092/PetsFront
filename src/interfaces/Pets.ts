export interface Pet {
    id: string,
    name: string,
    age: number,
    breed: string,
    sterilization: boolean,
    image: string,
    PetTypeId: string,
    Vaccines:[]

}

export interface TypePet {
    id:string,
    type:string    
}


export interface Vaccines {
    id:string,
    name:string,
}


export default Pet;