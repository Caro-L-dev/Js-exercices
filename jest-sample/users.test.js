import Users from './users';
import axios from 'axios';

jest.mock('axios');

test("Doit récupérer les utilisateurs de l'API", ()=> {
    const users = [{name: "Mike"},{name: "Thomas"}];
    const response = {data:users};
    axios.get.mockResolvedValue(response);

    return Users.all().then(data => expect(data).toEqual(users));
});