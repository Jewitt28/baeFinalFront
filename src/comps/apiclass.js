// AnprAPI.js
class tester {
    async getCitizen() {
        throw new Error("Unimplemented getCitizen() from AnprAPI");
    }
}

class DummyAnprAPI extends AnprAPI {
    citizens = [{}, {}] 

    async getCitizen(citizenId) {
        // get citizen out of temporary data array
        return foundCitizen;
    }
}

class ConcreteAnprAPI extends AnprAPI {
    async getCitizen(citizenId) {
        return await fetch("springboot.api")
    }
}


// CitizenList.js
import ConcreteAnprAPI from ....;

const api = new ConcreteAnprAPI();

function CitizenList(props) {
    return (
        {api.getCitizens.map(data => {
            <Citizen data={data} />
        })}
    );
}