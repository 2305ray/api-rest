declare namespace Express { //nammeSpace ajuda a n ter conflit por causa do nome
export interface Request{
    user_id: string //a interface pode juntar com outra ja existente
}
}