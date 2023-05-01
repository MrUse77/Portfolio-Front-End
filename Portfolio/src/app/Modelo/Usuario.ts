import { v4 as uuidv4 } from 'uuid';
const uuid = uuidv4();
export class Usuario{
    id: typeof uuid | undefined;
    user: string | undefined;
    mail: string | undefined;
    password: string | undefined;
    offers: boolean = false;
    terms: boolean = false;
}
