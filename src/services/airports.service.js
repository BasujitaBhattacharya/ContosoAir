const avoidEmptyCity = function(a) {
    return Object.assign({}, a, { city: a.city || '-'});
}
//Test Pipeline feature fixes#1
class AirportsService {
    constructor(airports){
        this._airports = airports;
    }

    getAll(){
        return this._airports.filter(a => a.code).map(avoidEmptyCity).sort((a,
        b) => (a.city > b.city) ? 1 : -1);
        }

    getByCode(code) {
        return avoidEmptyCity(this._airports.find(a => a.code == code));
    }
}
//Test Changes Fixes#1  
module.exports = AirportsService;